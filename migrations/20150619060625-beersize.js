'use strict';

var sizes = 
[
    [1.0, 'US Oz'],
    [0.961, 'Imperial Oz'],
    [8.5, 'Small Euro Bottle'],
    [7.7, 'Glass'],
    [11.2, 'Euro Bottle'],
    [11.5, 'Canadian Bottle'],
    [12, 'US Can'],
    [12.7, 'Australian Bottle'],
    [14.4, 'Schooner'],
    [14.9, 'Euro Can/Bottle'],
    [16.0, 'US Pint'],
    [16.9, 'Euro Can'],
    [19.2, 'Imperial Pint'],
    [20, '20 oz Bottle'],
    [22, 'Bomber'],
    [23.7, '70 cL'],
    [24.0, '710 mL'],
    [25.4, '750 mL'],
    [26.0, '1/5 gallon'],
    [33.8, '1 L'],
    [38.4, '2 Imperial Pints'],
    [40, 'US 40 oz']
]

module.exports = {
  up: function (migration, DataTypes) {
      
      var insertBeerSize = function(e, i, a) {
	  var sqlstring = "insert into beersize (us_oz, updated_at, created_at, name) values (" + e[0] + ",current_timestamp, current_timestamp,'" + e[1] + "')";
	  migration.sequelize.query(sqlstring);
      }

      return migration.createTable(
	  'beersize',
	  {
	      us_oz: {
		  type: DataTypes.DECIMAL,
		  primaryKey: true
	      },
	      created_at: {
		  type: DataTypes.DATE,
		  defaultValue: DataTypes.NOW
	      },
	      updated_at: {
		  type: DataTypes.DATE,
		  defaultValue: DataTypes.NOW
	      },
	      name: {
		  type: DataTypes.STRING
	      }
	  }
      ).then(function(){
	  sizes.forEach(insertBeerSize);
	  //migration.sequelize.query("insert into beersize (us_oz,name) values(12, 'US Can')");
      });
		
  },

  down: function (migration, Sequelize) {
      return migration.dropTable('beersize');
  }
};
