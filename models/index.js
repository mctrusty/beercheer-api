if (!global.hasOwnProperty('db')) {
    debugger;
    var Sequelize = require('sequelize');
    var sq = null;
    var fs = require('fs');
    var path = require('path');
    var PGPASS_FILE = path.join(__dirname, '../.pgpass');
  console.log('db url ' + process.env.DATABASE_URL);
  if (process.env.DATABASE_URL) {
        /* Remote database
           Do `heroku config` for details. We will be parsing a connection
           string of the form:
           postgres://bucsqywelrjenr:ffGhjpe9dR13uL7anYjuk3qzXo@\
           ec2-54-221-204-17.compute-1.amazonaws.com:5432/d4cftmgjmremg1
        */
        var pgregex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
        var match = process.env.DATABASE_URL.match(pgregex);
        var user = match[1];
        var password = match[2];
        var host = match[3];
        var port = match[4];
        var dbname = match[5];
		console.log('connected: ' + user + ':' + password + '@' + host + ':' + '/' + dbname);
        var config =  {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     port,
            host:     host,
	    omitNull: true,
            logging:  true //false
        };
       sq = new Sequelize(dbname, user, password, config);
    } else {
        /* Local database
           We parse the .pgpass file for the connection string parameters.
        */
        var pgtokens = fs.readFileSync(PGPASS_FILE).toString().trimRight().split(':');
        var host = pgtokens[0];
        var port = pgtokens[1];
        var dbname = pgtokens[2];
        var user = pgtokens[3];
        var password = pgtokens[4];
        var config =  {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     port,
            host:     host,
	    omitNull: true,
	    logging: console.log
        };
        var sq = new Sequelize(dbname, user, password, config);
    }
    global.db = {
        Sequelize: Sequelize,
        sequelize: sq,
        Beer: sq.import(__dirname + '/beer'),
		Store: sq.import(__dirname + '/store'),
		Size: sq.import(__dirname + '/beersize'),
		Package: sq.import(__dirname + '/package'),
		Price: sq.import(__dirname + '/beerprice'),
		Brewer: sq.import(__dirname + '/brewer')
    };
}
module.exports = global.db;
