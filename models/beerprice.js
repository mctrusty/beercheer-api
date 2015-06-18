module.exports = function(sequelize, DataTypes) {       
    return sequelize.define('beerprice', {
        id: DataTypes.INTEGER,                                          
        storeId: DataTypes.STRING,
        beerId: DataTypes.STRING,
        price: DataTypes.DECIMAL
    });
};
