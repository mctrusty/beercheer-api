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

  app.post('/api/beer', function(req, res){
      config.beerdb.sequelize.transaction(function(t){
	  return config.beerdb.Beer.create({
	      beer: "TestBeer",
	      brewer: "TestBrewer"
	  }, {transaction: t}).then(function(result) {
	      res.setHeader('Content-Type', 'text/plain');
	      res.write('you posted:\n');
	      res.end(JSON.stringify(req.body, null, 2));
	  }).catch(function(err) {
	      res.send(err);
	  });
      });
  });

};
