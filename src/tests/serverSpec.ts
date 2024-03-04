// spec/server.spec.ts
import request from 'supertest';
import app from '../index';

describe('Server', () => {
  it('should return a 200 status when hitting the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
