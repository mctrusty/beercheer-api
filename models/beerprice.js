module.exports = function(sequelize, DataTypes) {       
    return sequelize.define('price', {
        id: DataTypes.INTEGER,                                          
        storeId: {
	    type: DataTypes.INTEGER,
	    references: {
		model: sequelize.Store,
		key: 'id'
	    }
	},
        beerId: {
	    type: DataTypes.INTEGER,
	    references: {
		model: sequelize.Beer,
		key: 'id'
	    }
	},
	pkgId: {
	    type: DataTypes.INTEGER,
	    references: {
		model: sequelize.Package,
		key: 'id'
	    }
	},
        price: DataTypes.DECIMAL
    },
    { freezeTableName: true}
);
};
