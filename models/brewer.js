module.exports = function(sequelize, DataTypes){
    return sequelize.define('brewer', {
		name: DataTypes.STRING
    });
}
