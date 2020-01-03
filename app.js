require('dotenv').config({ 'path': '.env' });

const statusCode = require('./config/statusCode');
const responseClass = require('./lib/Response.js');
const messages = require('./config/responseMessages');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const weather = require('./routes/weather/index');
app.use(bodyParser.urlencoded({ 'extended': false }));

// Declear globle variables

if (!global.STATUS_CODE) {
    global.STATUS_CODE = statusCode;
}

if (!global.RESPONSE) {
    global.RESPONSE = responseClass;
}

if (!global.MESSAGE) {
    global.MESSAGE = messages;
}

app.get('/', (req, res) => {
    res.json({
        message: 'URL not found'
    });
});


process.on('unhandledRejection', (exp) => {
    console.log('Unhandled rejection occurred : ', exp);
});

app.use((err, req, res, next) => {
    if (err.isJoi) {
        let message = err.details[0] ? err.details[0].message : 'Invalid parameter';

        let errObject = (RESPONSE.sendResponse(false, {}, message, STATUS_CODE.BAD_REQUEST));

        res.status(errObject.statusCode).send(errObject);
        res.end();
        return;
    }
});

app.use('/weather', weather);

module.exports = app;