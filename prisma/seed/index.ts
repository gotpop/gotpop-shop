import { PrismaClient } from '@prisma/client'
import { panels } from './panel'
import prisma from '../../src/lib/prisma'
import { products } from './product'
import { users } from './user'

async function main() {
    await prisma.account.deleteMany({})
    await prisma.cart.deleteMany({})
    await prisma.cartItem.deleteMany({})
    await prisma.panel.deleteMany({})
    await prisma.photo.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.session.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.verificationToken.deleteMany({})

    //     for (let user of users) {
    //     await prisma.user.create({ data: user })
    // }

    prisma.cartItem.findMany()

    for (let panel of panels) {
        await prisma.panel.create({ data: panel })
    }

    for (let product of products) {
        await prisma.product.create({ data: product })
    }
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
