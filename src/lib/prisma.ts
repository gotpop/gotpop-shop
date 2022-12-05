import { Prisma, PrismaClient } from "@prisma/client"

import { includes } from "cypress/types/lodash"

const prisma = new PrismaClient()

const PanelWithPhotos = Prisma.validator<Prisma.PanelArgs>()({
    include: { photos: true }
})

export type PanelWithPhotos = Prisma.PanelGetPayload<typeof PanelWithPhotos>

const ProductWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photos: true }
})

export type ProductWithPhotos = Prisma.ProductGetPayload<typeof ProductWithPhotos>


const CartItemWithProduct = Prisma.validator<Prisma.CartItemArgs>()({
    include: {
        product: {
            include: {
                photos: true
            }
        }
    }
})

export type CartItemWithProduct = Prisma.CartItemGetPayload<typeof CartItemWithProduct>

export default prisma