module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pkg', {
	id: DataTypes.INTEGER,
	size: {
	    type: DataTypes.DECIMAL,
	    references: {
		model: sequelize.Size,
		key: 'us_oz'
	    }
	},
	qty: DataTypes.INTEGER,
	container: DataTypes.STRING
    });
}
