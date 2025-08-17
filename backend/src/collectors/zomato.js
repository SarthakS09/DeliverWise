import { env } from '../config/env.js';


export async function fetchZomato({ query, location }) {
if (env.USE_MOCKS) {
return { platform: 'Zomato', price: 229, deliveryTimeMin: 33, url: 'https://www.zomato.com/' };
}
return null;
}