const Joi = require('@hapi/joi');

module.exports = {
    'weatherReport': {
        'query': {
            'city': Joi.string().required(),
            'code': Joi.string().required()
        }
    },
    'option': {
        'wantResponse': true
    }
};
