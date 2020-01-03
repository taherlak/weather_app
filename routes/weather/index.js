const express = require('express');
const router = express.Router();
const weatherCtrl = require('../../controllers/weather/index');
const expressJoiMiddleware = require('express-joi-middleware');
const schemaValidationMiddleware = require('../../validations/index');

/**
 * API to get weather report by city name.
 * @method GET
 */

router.get('/weatherReport', expressJoiMiddleware(schemaValidationMiddleware.weatherReport, schemaValidationMiddleware.option), (req, res) => {
    weatherCtrl.getWeatherByCityName(req).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;