import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: { name: 'Alicia' },
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            password: '1234',
            address: '1234'
        },
    })

    const product1 = await prisma.product.upsert({
        where: { name: 'HTML & JS' },
        update: { basePrice: 10.99 },
        create: {
            name: 'HTML & JS',
            urlName: 'htmljs',
            basePrice: 10.99,
            stock: 11,
            description: 'A html book',
            photos: {
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
        update: { basePrice: 20.00 },
        create: {
            name: 'Stunning CSS',
            urlName: 'stunningcss',
            basePrice: 10.99,
            stock: 11,
            description: 'A css book',
            photos: {
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
        update: { basePrice: 89.99 },
        create: {
            name: 'Keyboard',
            urlName: 'Keyboard',
            basePrice: 10.99,
            stock: 11,
            description: 'A Keyboard',
            photos: {
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
        update: { basePrice: 120.99 },
        create: {
            name: 'MacBook Pro',
            urlName: 'mac',
            basePrice: 10.99,
            stock: 11,
            description: 'A mac',
            photos: {
                create: {
                    url: '/images/mac.png',
                    alt: 'mac',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const panel1 = await prisma.panel.upsert({
        where: { title: '@container queries' },
        update: {},
        create: {
            direction: 'ltr',
            linktext: 'Find out more',
            linkhref: '/shop',
            excerpt: 'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
            title: '@container queries',
            photos: {
                create: {
                    url: '/images/books.png',
                    alt: 'books',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const panel2 = await prisma.panel.upsert({
        where: { title: 'Color Contrast' },
        update: {},
        create: {
            direction: 'ltr',
            linktext: 'Find out more',
            linkhref: '/shop',
            excerpt: 'The color-contrast() functional notation takes a color value and compares it to a list of other color values, selecting the one with the highest contrast from the list.',
            title: 'Color Contrast',
            photos: {
                create: {
                    url: '/images/html.png',
                    alt: 'html',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const panel3 = await prisma.panel.upsert({
        where: { title: 'Select Menu Element' },
        update: {},
        create: {
            direction: 'ltr',
            linktext: 'Find out more',
            linkhref: '/shop',
            excerpt: 'Say Hello to selectmenu, a Fully Style-able select Element.',
            title: 'Select Menu Element',
            photos: {
                create: {
                    url: '/images/keyboard.png',
                    alt: 'keyboard',
                    width: 1000,
                    height: 640,
                }
            }
        },
    })

    const panel4 = await prisma.panel.upsert({
        where: { title: '@custom-media' },
        update: {},
        create: {
            direction: 'ltr',
            linktext: 'Find out more',
            linkhref: '/shop',
            excerpt: 'Before @custom-media, media queries had to repeat themselves over and over, or rely on preprocessors to generate the proper output based on static variables during build time.',
            title: '@custom-media',
            photos: {
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
