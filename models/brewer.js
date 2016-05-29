module.exports = function(sequelize, DataTypes){
    return sequelize.define('brewer_id', {
		name: DataTypes.STRING
    });
}
