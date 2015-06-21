module.exports = function(sequelize, DataTypes){
    return sequelize.define('beersize', {
	us_oz: DataTypes.DECIMAL,
	name: DataTypes.STRING
    });
}
