const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/../config/test.env`});



const request = require('supertest');
const app = require('../src/app');

test('user should sign up', async () => {
   await request(app).post('/users').send({
    name:"abc",
	age:28,
	password:"1234567",
	email:"mowa@mail.com"
   }).expect(201)
});