const weatherModel = require('../../models/weather');
const moment = require('moment');
const utils = require('../../lib/utils');
const STATUS_CODE = require('../../config/statusCode');
const RESPONSE_MSG = require('../../config/responseMessages');

/**
 * This function gets the historical data from City name.
 * @param {*} req 
 */

const getWeatherByCityName = (req) => new Promise((resolve, reject) => {
    try {
        const day = moment().format('DD');
        const isPrime = utils.isPrime(day);
        const requestType = 'GET';
        if (isPrime) {
            let data = req.query;
            weatherModel.getWeatherByCityName(data).then((result) => {
                resolve(RESPONSE.sendResponse(true, result, RESPONSE_MSG.WEATHER_API.GET_WEATHER_BY_CITY_NAME_SUCESS, STATUS_CODE.OK));
                weatherModel.saveAuditLogs(requestType, result);
            }).catch((err) => {
                reject(RESPONSE.sendResponse(false, {}, RESPONSE_MSG.WEATHER_API.GET_WEATHER_BY_CITY_NAME_ERROR, STATUS_CODE.INTERNAL_SERVER_ERROR));
                weatherModel.saveAuditLogs(requestType, err);
            });
        } else {
            resolve(RESPONSE.sendResponse(true, result, RESPONSE_MSG.WEATHER_API.DATE_NOT_PRIME, STATUS_CODE.OK));
        }
    } catch (err) {
        reject(RESPONSE.sendResponse(false, {}, RESPONSE_MSG.WEATHER_API.GET_WEATHER_BY_CITY_NAME_ERROR, STATUS_CODE.INTERNAL_SERVER_ERROR));
        weatherModel.saveAuditLogs(requestType, err);
    }
});

module.exports = {
    getWeatherByCityName
}