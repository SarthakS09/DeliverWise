import { fetchSwiggy } from '../src/collectors/swiggy.js';


test('swiggy mock returns shape', async () => {
const r = await fetchSwiggy({ query: 'burger', location: 'Noida' });
expect(r.platform).toBe('Swiggy');
expect(typeof r.price).toBe('number');
expect(typeof r.deliveryTimeMin).toBe('number');
});