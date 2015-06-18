'use strict';

module.exports = {
  up: function (migration, Sequelize) {
      return migration.createTable(
	  'pkg',
	  {
	      id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	      },
	      createdAt: {
		  type: Sequelize.DATE
	      },
	      updatedAt: {
		  type: Sequelize.DATE
	      },
	      qty: {
		  type: Sequelize.INTEGER
	      },
	      container: {
		  type: Sequelize.STRING
	      },
	      size: {
		  type: Sequelize.STRING
	      }
	  }
      );
  },

  down: function (queryInterface, Sequelize) {
    return migration.dropTable('pkg');
  }
};
