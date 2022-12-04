export const product1 = {
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
}

export const product2 = {
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
}

export const product3 = {
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
}

export const product4 = {
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
}