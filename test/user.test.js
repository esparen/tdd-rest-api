const supertest = require("supertest");

const app = require("../src/app");

describe('users', () => {
  
  it('Should list all the users', async () => {
    const response = await supertest(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name', 'John Doe');

  });

});