'use strict';

module.exports = {
  up: function (migration, DataTypes) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return migration.createTable(
	  'beers',
	  {
	      id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	      },  
	      beer: {
		  type: DataTypes.TEXT
              },
              brewer: {type: DataTypes.TEXT},
              store: {
		  type: DataTypes.INTEGER,
		  references: 'store',
		  referencesKey: 'id'
	      },
	      size: {type: DataTypes.TEXT},
              qty: {type: DataTypes.TEXT},
              price: {type: DataTypes.TEXT},
	      link: {type: DataTypes.TEXT},
	      createdAt: { type: DataTypes.DATE },
	      updatedAt: { type: DataTypes.DATE }
	  });
  },

  down: function (migration, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return migration.dropTable('users');
    */
      migration.dropTable('beers');
  }
};
