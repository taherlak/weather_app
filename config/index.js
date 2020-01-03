const config = {};

config.baseURL = process.env.OPEN_WEATHER_URL;
config.appId = process.env.APP_ID

config.connectionObj = {
	'connectionLimit': parseInt(process.env.CONNECTION_POOL_LIMIT) || 50,
	'host': process.env.DB_HOST,
	'user': process.env.DB_USER,
	'password': process.env.DB_PASSWORD,
	'database': process.env.DB_NAME,
	'driver': 'mysql',
	'multipleStatements': true,
	'waitForConnections': true,
	'queueLimit': parseInt(process.env.QUEUE_LIMIT) || 20,
	'ssl': JSON.parse(process.env.SSL)
}
module.exports = config;