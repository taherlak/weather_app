const config = require('../config/index');
const baseURL = config.baseURL;

const externalURLs = {
    'getWeatherByCityName': `${baseURL}/data/2.5/history/city`
};

module.exports = externalURLs;