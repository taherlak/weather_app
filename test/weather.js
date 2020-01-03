const chai = require('chai');
chai.use(require('chai-json'));
const expect  = require('chai').expect;
const request = require('request');
const moment = require('moment');
const utils = require('../lib/utils');


describe('Weather Report API', () => {

    it('Should return JSON output', function(done) {
        request('http://localhost:3000/weather/weatherReport?city=London&code=UK' , function(error, response, body) {
            let responseBody = JSON.parse(body);
            expect(responseBody).to.be.not.equal({})
            expect(responseBody.data).to.be.not.equal({})
            expect(responseBody.data).to.be.not.equal({})
            expect(responseBody.data).to.be.jsonObj()
            expect(responseBody.statusCode).to.be.equal(200)
            done();
        });
    });

    it('Error if required param not provided', function(done) {
        request('http://localhost:3000/weather/weatherReport' , function(error, response, body) {
            let responseBody = JSON.parse(body);
            expect(responseBody[0].message).to.be.not.equal('')
            expect(responseBody[0].type).to.be.equal('any.required')
            done();
        });
    });

    it('Response if date is Prime else error', function(done) {
        request('http://localhost:3000/weather/weatherReport?city=London&code=UK' , function(error, response, body) {
            const day = moment().format('DD');
            const isPrime = utils.isPrime(day);
            let responseBody = JSON.parse(body);
            if(!isPrime){
                expect(responseBody.message).to.be.equal('Date is not prime so no date')
            }
            done();
        });
    });
});
