export const cartItem1 = {
    where: { name: 'Cart item 1' },
    update: { amount: 3 },
    create: {
        amount: 30,
        name: 'Cart item 1',
        product: {
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
    }
}

export const cartItem2 = {
    where: { name: 'Cart item 2' },
    update: { amount: 6 },
    create: {
        amount: 30,
        name: 'Cart item 2',
        product: {
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
    }
}

export const cartItem3 = {
    where: { name: 'Cart item 3' },
    update: { amount: 555 },
    create: {
        amount: 30,
        name: 'Cart item 3',
        product: {
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
    }
}

export const cartItem4 = {
    where: { name: 'Cart item 4' },
    update: { amount: 66 },
    create: {
        amount: 30,
        name: 'Cart item 4',
        product: {
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
    }
}

