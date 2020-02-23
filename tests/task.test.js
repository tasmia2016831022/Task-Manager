const dotenv = require('dotenv');
dotenv.config({path: `${__dirname}/../config/test.env`});

const request = require('supertest');
const app = require('../src/app');

test('task create', async () => {
   await request(app).post('/users').send({
    description: "learn",
    completed: true
   }).expect(201)
});