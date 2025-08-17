import dotenv from 'dotenv';
dotenv.config();


export const env = {
NODE_ENV: process.env.NODE_ENV || 'development',
PORT: process.env.PORT || 5001,
CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000,http://localhost:5173',
USE_MOCKS: (process.env.USE_MOCKS || 'true').toLowerCase() === 'true',
CACHE_TTL: Number(process.env.CACHE_TTL || 60),
LOG_LEVEL: process.env.LOG_LEVEL || 'info'
};