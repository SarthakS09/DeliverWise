import { fetchSwiggy } from '../collectors/swiggy.js';
import { fetchZomato } from '../collectors/zomato.js';
import { fetchBlinkit } from '../collectors/blinkit.js';
import { getCache, setCache, cacheKeyCompare } from '../utils/cache.js';


function decorate(results) {
const valid = results.filter(Boolean);
if (valid.length === 0) return [];


const minPrice = Math.min(...valid.map(v => v.price));
const minEta = Math.min(...valid.map(v => v.deliveryTimeMin));


return valid
.map(v => ({
...v,
isCheapest: v.price === minPrice,
isFastest: v.deliveryTimeMin === minEta
}))
.sort((a, b) => a.price - b.price || a.deliveryTimeMin - b.deliveryTimeMin);
}


export async function compareAll({ query, location }) {
const key = cacheKeyCompare({ query, location });
const cached = getCache(key);
if (cached) return cached;


const [swiggy, zomato, blinkit] = await Promise.allSettled([
fetchSwiggy({ query, location }),
fetchZomato({ query, location }),
fetchBlinkit({ query, location }),
]);


const values = [swiggy, zomato, blinkit].map(r => r.status === 'fulfilled' ? r.value : null);
const output = decorate(values);
setCache(key, output);
return output;
}