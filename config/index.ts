// const dev = process.env.NODE_ENV !== 'production'
// const local = process.env.HOST
// const prod = process.env.PRODUCTION

// export const server = dev ? local : prod

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://gotpop-starter.vercel.app';
