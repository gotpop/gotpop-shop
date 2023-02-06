import { cartActive, cartInactive } from "./cart";

export const users = [
    {
        email: 'alice@prisma.io',
        name: 'Alice',
        Carts: {
            create: cartActive
        }
    },
    {
        email: 'bob@prisma.io',
        name: 'Bob',
        Carts: {
            create: cartInactive
        }
    }
]
