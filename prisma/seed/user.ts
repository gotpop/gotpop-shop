import { cart } from "./cart";

export const users = [
    {
        email: 'alice@prisma.io',
        name: 'Alice',
        loggedIn: true,
        password: '1234',
        address: '1234',
        Carts: {
            create: cart
        }
    },
    {
        email: 'bob@prisma.io',
        name: 'Bob',
        loggedIn: false,
        password: '1234',
        address: '1234',
        Carts: {
            create: cart
        }
    }
]