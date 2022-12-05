import { books, html, keyboard, mac } from "./photos";

export const products = [
    {
        name: 'HTML & JS',
        urlName: 'htmljs',
        basePrice: 10.99,
        stock: 11,
        description: 'A html book',
        photos: {
            create: books
        }
    },
    {
        name: 'Stunning CSS',
        urlName: 'stunningcss',
        basePrice: 10.99,
        stock: 11,
        description: 'A css book',
        photos: {
            create: html
        }
    },
    {
        name: 'Keyboard',
        urlName: 'Keyboard',
        basePrice: 10.99,
        stock: 11,
        description: 'A Keyboard',
        photos: {
            create: keyboard
        }
    },
    {
        name: 'MacBook Pro',
        urlName: 'mac',
        basePrice: 10.99,
        stock: 11,
        description: 'A mac',
        photos: {
            create: mac
        }
    }
]
