const request = require('supertest');
const app = require('./app');

describe('app', () => {
  describe('GET /', () => {
    test('should respond with 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });
  });
});
