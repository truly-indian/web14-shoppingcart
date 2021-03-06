
const sequelize = require('sequelize')

const db = new sequelize('shopdb','shopper','shoppass',{
    host : 'localhost',
    dialect : 'mysql',
    pool :{
        min:0,
        max:5,
    }
})

const User = db.define('users',{
    id : {
        type :sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : sequelize.STRING,
        allowNULL :false,
    }
})

const Product = db.define('product',{
    id : {
        type :sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    name :{ 
        type : sequelize.STRING,
        allowNULL : false
    },
    manufacturer : sequelize.STRING,
    price :{
        type : sequelize.FLOAT,
        allowNULL : false,
        defaultValue : 0.0
    }


})

// for db to be created

db.sync()
    .then(()=> console.log("database has been synced"))
    .catch(()=> console.error("error in creating database"))
exports = module.exports ={
    User , Product
}

