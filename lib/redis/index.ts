import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_URL
});

export { redis };