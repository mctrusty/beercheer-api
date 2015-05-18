'use strict';

module.exports = {
  up: function (migration, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return migration.createTable(
	'store', 
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
	    googleId: {
		type: Sequelize.STRING
	    },
	    name: {
		type: Sequelize.STRING
	    }
	});
	    
	
  },

  down: function (migration, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      return migration.dropTable('store');
  }
};
