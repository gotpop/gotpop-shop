import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const PanelWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photos: true }
})

export type PanelWithPhotos = Prisma.ProductGetPayload<typeof PanelWithPhotos>

const productWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photos: true }
})

export type productWithPhotos = Prisma.ProductGetPayload<typeof productWithPhotos>

export default prisma