export const alice = {
    where: { email: 'alice@prisma.io' },
    update: { name: 'Alicia' },
    create: {
        email: 'alice@prisma.io',
        name: 'Alice',
        password: '1234',
        address: '1234'
    },
}

export const bob = {
    email: 'bob@prisma.io',
    name: 'Bob',
    password: '1234',
    address: '1234'
}