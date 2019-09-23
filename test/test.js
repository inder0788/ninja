var request = require('supertest');
var app = require('../app.js');
describe('Health Check--', function() {
 it('should say that the server is "Listening on 80"', function(done) {
 //navigate to root and check the server response
 request(app).get('/').expect('Listening', done)
 });
});