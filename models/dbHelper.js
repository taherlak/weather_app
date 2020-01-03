const mysql = require('mysql');
const config = require('../config/index');

const mysqlConnection = mysql.createPool(config.connectionObj);

module.exports = mysqlConnection;