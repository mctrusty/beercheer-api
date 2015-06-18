'use strict';

module.exports = {
  up: function (migration, Sequelize) {
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
      return migration.dropTable('store');
  }
};
