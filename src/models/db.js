const Sequelize = require('sequelize')
const {DataTypes} = Sequelize

const sb = new Sequelize(
    'sampleblogdb','samplebloguser','sampleblogpass',
    {
        dialect:'mysql',
        host:'localhost'
    }
)