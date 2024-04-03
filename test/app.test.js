const request = require('supertest');

const rootApp = require('../src/app.js');


describe('The main app', () => {
  afterEach(async () => {
    rootApp.server.close();
  })

  it("Should answer on the root folder", async () => {
    const response = await request(rootApp.app).get('/');
    return expect(response.status).toBe(200);  
  });

});

