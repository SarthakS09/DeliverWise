import { env } from '../config/env.js';


export async function fetchBlinkit({ query, location }) {
if (env.USE_MOCKS) {
return { platform: 'Blinkit', price: 199, deliveryTimeMin: 12, url: 'https://blinkit.com/' };
}
return null;
}