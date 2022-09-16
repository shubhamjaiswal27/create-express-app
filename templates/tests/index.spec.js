import request from 'supertest';
import { expect } from 'chai'

import { createApp } from '../src';

describe('Our server', function() {
    var app;
  
    // Called once before any of the tests in this block begin.
    before((done) => {
      app = createApp();
      app.listen((err) => {
        if (err) { return done(err); }
        done();
      });
    });
  
    it('should send back a JSON object with 2 users data', (done) => {
      request(app)
        .get('/api/v1/users')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) { return done(err); }
          users = res.body.users;
          expect(users.length).to.equal(2);
          done();
        });
    });
  
  });

describe('Our application', () => {

  it('should understand basic mathematical principles', () => {
    expect(5).to.equal(5);
    expect(5).to.not.equal(3);
  });

});