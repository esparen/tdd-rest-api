const supertest = require("supertest");

const app = require("../../src/app");

describe('users', () => {
  const mail = `${Date.now()}@mail.com`

  test('GET on the route "/users" should list all the users', async () => {
    const response = await supertest(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('POST on the route "/users" should insert a new record ', async () => {
    const newUser = {name: 'Walter Mitty', mail, passwd: '123456'}
    const response = await supertest(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.mail).toBe(newUser.mail);
    expect(response.body.passwd).toBe(newUser.passwd) ;
  })

  test('Should not insert user without a valid name', async () => {
    const newUser = {mail: 'some@mail.com', passwd: '123456'}
    const response = await supertest(app).post('/users').send(newUser);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("name is a required attribute")
  })

  test('Should not insert user without a valid mail', async () => {
    const newUser = {name: 'Some Name', passwd: '123456'}
    const response = await supertest(app).post('/users').send(newUser);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("mail is a required attribute")
  });

  test('Should not insert user without a valid password', (done) => {
    const newUser = {name: 'Some Name', mail: 'some@mail.com'}
    supertest(app).post('/users')
      .send(newUser)
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("passwd is a required attribute");
        done();
      }).catch(err => done.fail(err));
  })

  test('Should not insert user with duplicated mail', async () => {
    const newUser = {name: 'Walter Mitty', mail, passwd: '123456'}
    const response = await supertest(app).post('/users').send(newUser);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('An user with that email is already present');
  });

});