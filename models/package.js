module.exports = function(sequelize, DataTypes) {
    return sequelize.define('package', {
	id: DataTypes.INTEGER,
	size: DataTypes.STRING,
	qty: DataTypes.INTEGER,
	pkg: DataTypes.STRING
    });
}
