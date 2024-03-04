// spec/images.spec.ts

import request from 'supertest';
import app from '../index';

describe('Images API', () => {
  it('should log a message when hitting the endpoint', async () => {
    // Spy on the console.log method
    spyOn(console, 'log');

    // Send a GET request to the /images endpoint
    await request(app).get('/api/images');

    // Expect that console.log has been called with the correct message
    expect(console.log).toHaveBeenCalledWith('Endpoint /images is running');
  });
});