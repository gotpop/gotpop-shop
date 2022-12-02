import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: { name: 'Alicia' },
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            password: '1234'
        },
    })

    const product1 = await prisma.product.upsert({
        where: { name: 'HTML & JS' },
        update: {},
        create: {
            name: 'HTML & JS',
            price: 10.99,
            stock: 11,
            brand: 'Acme',
            photo: {
                create: {
                    url: '/images/books.png',
                    alt: 'books',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const product2 = await prisma.product.upsert({
        where: { name: 'Stunning CSS' },
        update: {},
        create: {
            name: 'Stunning CSS',
            price: 19.99,
            stock: 9,
            brand: 'Acme',
            photo: {
                create: {
                    url: '/images/html.png',
                    alt: 'html',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const product3 = await prisma.product.upsert({
        where: { name: 'Keyboard' },
        update: {},
        create: {
            name: 'Keyboard',
            price: 120,
            stock: 11,
            brand: 'Acme',
            photo: {
                create: {
                    url: '/images/keyboard.png',
                    alt: 'keyboard',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const product4 = await prisma.product.upsert({
        where: { name: 'MacBook Pro' },
        update: {},
        create: {
            name: 'MacBook Pro',
            price: 1200,
            stock: 11,
            brand: 'Acme',
            photo: {
                create: {
                    url: '/images/mac.png',
                    alt: 'mac',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
