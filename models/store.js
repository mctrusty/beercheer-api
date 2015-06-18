module.exports = function(sequelize, DataTypes) {
    return sequelize.define('store', {
	id: DataTypes.INTEGER,
	googleId: DataTypes.STRING,
	name: DataTypes.STRING,
	address: DataTypes.STRING
    });
};
