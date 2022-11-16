const dev = process.env.NODE_ENV !== 'production'
const local = process.env.LOCALHOST
const prod = process.env.PRODUCTION

export const server = dev ? local : prod



// export const server = dev ? 'http://localhost:3000' : 'https://gotpop-starter.vercel.app';
