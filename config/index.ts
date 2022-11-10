const dev = process.env.NODE_ENV !== 'production'
const local = process.env.HOST
const prod = process.env.PRODUCTION

export const server = dev ? local : prod
