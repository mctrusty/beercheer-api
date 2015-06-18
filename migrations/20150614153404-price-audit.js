'use strict';

module.exports = {
  up: function (migration, Sequelize) {
      return migration.createTable(
	  'price_audit',
	  {
	      id: {
		    type: Sequelize.INTEGER,
		    primaryKey: true,
		    autoIncrement: true
	      },
	      storeId: {
		    type: Sequelize.STRING
	      },
	      createdAt: {
		    type: Sequelize.DATE
	      },
	      updatedAt: {
		    type: Sequelize.DATE
	      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return migration.dropTable('price_audit');
  }
};
