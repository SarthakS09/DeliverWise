import NodeCache from 'node-cache';
import { env } from '../config/env.js';


const cache = new NodeCache({ stdTTL: env.CACHE_TTL, checkperiod: 30 });


export function getCache(key) { return cache.get(key); }
export function setCache(key, value, ttl = env.CACHE_TTL) { return cache.set(key, value, ttl); }
export function cacheKeyCompare({ query, location }) {
return `compare:${(location||'').trim().toLowerCase()}|${(query||'').trim().toLowerCase()}`;
}