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

};
