const dbconfig = require("./src/config/db.config.js");

const Sequelize= require("sequelize");

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    //operatorsAliases: false,

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signup = require("./src/models/signup.model.js")(sequelize,Sequelize);
db.login = require('./src/models/login.model.js')(sequelize, Sequelize);

module.exports = db;
