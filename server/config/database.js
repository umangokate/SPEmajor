require('dotenv').config()
const {Sequelize} = require('sequelize')
const DB = process.env.MYSQL_DB
const USERNAME = process.env.MYSQL_USER
const PASSWORD = process.env.MYSQL_PASS
const HOST = process.env.MYSQL_HOST

module.exports = new Sequelize(DB, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'mysql'

});