import { cartActive, cartInactive } from "./cart";

export const users = [
    {
        address: '1234',
        cartActiveID: '1234',
        email: 'alice@prisma.io',
        loggedIn: true,
        name: 'Alice',
        password: '1234',
        Carts: {
            create: cartActive
        }
    },
    {
        address: '1234',
        cartActiveID: '1234',
        email: 'bob@prisma.io',
        loggedIn: false,
        name: 'Bob',
        password: '1234',
        Carts: {
            create: cartInactive
        }
    }
]
