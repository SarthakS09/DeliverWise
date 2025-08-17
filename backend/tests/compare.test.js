import request from 'supertest';
import app from '../src/app.js';


test('POST /api/compare returns results', async () => {
const res = await request(app).post('/api/compare').send({ query: 'pizza', location: 'Delhi' });
expect(res.status).toBe(200);
expect(Array.isArray(res.body.results)).toBe(true);
});