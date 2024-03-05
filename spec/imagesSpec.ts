import request from 'supertest';
import app from '../src/index';
import path from 'path';

describe('Images API', () => {
  it('should hit the endpoint', async () => {
    // Send a GET request to the /images endpoint
    const response = await request(app).get('/api/images');
    // Log the directory of the current module
    console.log('Current directory:', __dirname);

    // Log a message indicating that the endpoint has been hit
    console.log('Endpoint has been hit');
  });
});
