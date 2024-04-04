const request = require('supertest');

const app = require('../src/app.js');


describe('Main app tests', () => {

  it("Should answer on the root folder", async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);  
  });
});

