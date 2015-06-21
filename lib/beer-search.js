'use strict';
module.exports = function(config, app){
  var build_errfn = function(errmsg, res) {
    return function errfn(err) {
        console.log(err);
        res.send(errmsg);
    }
  };

  app.get('/api/fulltext', function(req, res) {
    var successcb = function(beers) {
	var data = { resultCount: beers.length, results : beers }
        res.jsonp(data);
    };
    var errcb = build_errfn('error retrieving brewer information', res);
    debugger;
    config.beerdb.Beer.fullTextSearch(req.query.q, successcb, errcb);

  });

    /*
      Currently assumes input of the form: 

      {
        store: {
          place_id: 'ChIJWx_qgUWPa4cROuq75SvZVyU',
          name: 'Ralston Square Liquors'
        },
        beer: {
	  beer: 'Reverend',
          brewer: 'Avery',
	},
        price: 7.99,
        package: {
          qty: 1,
          size: 22,
          container: 'bottle'
	}
      }
      
      Insert/Update order:
      1.) store needs to be added to store table
      2.) beer, brewer --> beers table
      3.) package --> pkg table
      4.) price --> price table, along with beers ref, store ref, package ref
      
    */
  app.post('/api/beer', function(req, res){
      var beerdata = req.body;
      config.beerdb.sequelize.transaction(
	  { isolationLevel: 'READ UNCOMMITTED'},
	  function(t){
	  debugger;
	  return config.beerdb.Beer.findOrCreate(
	      {
		  where: {beer:'Reverend'},
		  transaction: t
	      }
	  ).spread(function(beer, created){
	      debugger;
	      return config.beerdb.Store.findOrCreate(
		  { 
		      where: beerdata.store,
		      transaction: t
		  }
	      ).spread(function(store, created){
		  debugger;
		  return config.beerdb.Price.create(
		      {
			  price: beerdata.price
			 // storeId: store.id
		      },
		      {transaction: t}
		  )
	      })
	  })
      }).then(function(result) {    
	  debugger;
	  res.setHeader('Content-Type', 'text/plain');
	  res.write('you posted:\n');
	  res.end(JSON.stringify(req.body, null, 2));
      }).catch(function(err) {
	  debugger;
	  res.send(err);
      });
  });

};
