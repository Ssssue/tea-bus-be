const Sequelize = require("sequelize");

const sequelize = new Sequelize("accounts", "root", "123456", {
    host: "localhost",
    port: '3307',
    dialect: "mysql",
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: "+08:00"
});

module.exports = { sequelize };