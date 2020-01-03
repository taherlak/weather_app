const request = require('request');
const externalURLs = require('../../config/externalURLs');
const config = require('../../config/index');
const queries = require('../../config/queries');
const pool = require('../dbHelper');



/**
 * This function gets the historical data from City name.
 * @param {*} req 
 */

const getWeatherByCityName = (data) => new Promise((resolve, reject) => {
    let options = {
        'url': `${externalURLs.getWeatherByCityName}?q=${data.city},${data.code}&appid=${config.appId}`,
        'method': 'GET'
    };
    console.log(options);
    request(options, (err, response, body) => {
        if (err) {
            reject(err);
        } else {
            let result = JSON.parse(body);

            if (!err && result) {
                resolve(result);
            } else {
                reject(err);
            }
        }
    });
});

/**
 * This function stores the auditlogs into the DB
 * @param {*} logObj 
 */

const saveAuditLogs = (requestType, response) => new Promise((resolve, reject) => {
    const responseBody = JSON.stringify(response);
    const insertQuery = queries.saveAuditLogs;
    pool.query(insertQuery, [requestType, responseBody], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            resolve(null, rows);
        }
    });
});

module.exports = {
    getWeatherByCityName,
    saveAuditLogs
}