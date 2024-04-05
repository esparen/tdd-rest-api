const supertest = require("supertest");

const app = require("../src/app");

describe('users', () => {
  
  it('GET on the route "/users" should list all the users', async () => {
    const response = await supertest(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name', 'John Doe');

  });

  it('POST on the route "/users" should insert a new record ', async () => {
    const newUser = {name: 'Walter Mitty', email: 'watermitty@email.com'}
    const response = await supertest(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email) ;

  })

});