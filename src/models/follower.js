const { DataTypes, Model } = require('sequelize')
const db = require('../config/database')

class Follower extends Model{
    static id
    static id_seguidor
    static id_seguido
}

Follower.init({
    sequelize: db,
    modelName: 'Follower',
    tableName: 'follower',
    timestamps: true
})

Follower.associate = (models) =>{
    Follower.belongsTo(models.User, { foreignKey: 'userId', as: 'user'});
    Follower.hasMany(models.Follower, { foreignKey: 'followerId', as: 'follower'})
}