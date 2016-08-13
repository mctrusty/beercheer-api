var pg = require('pg');
var connStr = 'postgres://beerlover:tnst4bb54jbto@ec2-52-201-236-181.compute-1.amazonaws.com:5432/beerlover';

var client = new pg.Client(connStr);

client.connect(function(err) {
	if (err) throw err;

	client.query('SELECT $1::text as name', ['mike'], function(err, result){
		if (err) throw err;

		console.log(result.rows[0]);

		client.end(function(err){
			if (err) throw err;
		});
	});

});
