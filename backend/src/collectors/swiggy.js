import { env } from '../config/env.js';


export async function fetchSwiggy({ query, location }) {
if (env.USE_MOCKS) {
return { platform: 'Swiggy', price: 239, deliveryTimeMin: 27, url: 'https://www.swiggy.com/' };
}
// TODO: Implement real fetch/scrape using axios/puppeteer
return null;
}