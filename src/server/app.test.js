const request = require('supertest');
const app = require('./app');
const {
  pool, testDbConn, createDb, createTables, cleanTables, dropTables,
} = require('../database');

describe('app', () => {
  beforeAll(async () => {
    await createDb(process.env.POSTGRES_DB);
    await createTables(pool);
  });

  // beforeEach(async () => {
  // });

  afterEach(async () => {
    await cleanTables(pool);
  });

  afterAll(async () => {
    await dropTables(pool);
    await pool.end();
  });

  describe('DB conn', () => {
    test('should connect', async () => {
      expect(await testDbConn(pool)).toBe(true);
    });
  });

  describe('GET /', () => {
    test('should respond with 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('/api/customers', () => {
    const name = 'bob';
    const email = 'bob@business.com';

    describe('POST', () => {
      const data = { name, email };
      test('should create customer', async () => {
        const res = await request(app)
          .post('/api/customers')
          .send(data);
        expect(res.statusCode).toBe(201);
        expect(res.body.customerId).toBeDefined();
      });
    });
  });
});
