import { Prisma, PrismaClient } from "@prisma/client"

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

declare global {
    var prisma: PrismaClient | undefined
}

const PanelWithPhotos = Prisma.validator<Prisma.PanelArgs>()({
    include: { photos: true }
})

export type PanelWithPhotos = Prisma.PanelGetPayload<typeof PanelWithPhotos>
export type ProductWithPhotos = Prisma.ProductGetPayload<typeof ProductWithPhotos>
export type CartItemWithProduct = Prisma.CartItemGetPayload<typeof CartItemWithProduct>

const ProductWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photos: true }
})

const CartItemWithProduct = Prisma.validator<Prisma.CartItemArgs>()({
    include: {
        product: {
            include: {
                photos: true
            }
        }
    }
})

export default client
// TODO: Rename all defualt imports from this file into client to avoid clashes/confusion
