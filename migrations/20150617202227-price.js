'use strict';

module.exports = {
  up: function (migration, DataTypes) {
      return migration.createTable(
	  'price',
	  {
	      id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	      },
	      createdAt: {
		  type: DataTypes.DATE
	      },
	      updatedAt: {
		  type: DataTypes.DATE
	      },
	      price : {
		  type: DataTypes.DECIMAL
	      },
	      beerId: {
		  type: DataTypes.INTEGER,
		  references: 'beers',
		  referencesKey: 'id'
	      },
	      storeId: {
		  type: DataTypes.INTEGER,
		  references: 'store',
		  referencesKey: 'id'
	      },
	      pkgId: {
		  type: DataTypes.INTEGER,
		  references: 'pkg',
		  referencesKey: 'id'
	      }
	  }
      );      
  },

  down: function (migration, Sequelize) {
      return migration.dropTable('price');
  }
};
