import { alice, bob } from './user'
import { cartItem1, cartItem2, cartItem3, cartItem4 } from './cartItem'
import { panel1, panel2, panel3, panel4 } from './panel'

import { PrismaClient } from '@prisma/client'
import { cart } from './cart'

const prisma = new PrismaClient()

async function main() {
    // await prisma.user.deleteMany({})
    // await prisma.product.deleteMany({})
    // await prisma.panel.deleteMany({})
    // await prisma.cartItem.deleteMany({})
    // await prisma.photo.deleteMany({})
    // await prisma.cart.deleteMany({})

    await prisma.user.upsert(alice)

    await prisma.panel.upsert(panel1)
    await prisma.panel.upsert(panel2)
    await prisma.panel.upsert(panel3)
    await prisma.panel.upsert(panel4)

    await prisma.cartItem.upsert(cartItem1)
    await prisma.cartItem.upsert(cartItem2)
    await prisma.cartItem.upsert(cartItem3)
    await prisma.cartItem.upsert(cartItem4)

    await prisma.cart.upsert(cart)
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
