import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({ log: ['query'] })

const PanelWithPhotos = Prisma.validator<Prisma.PanelArgs>()({
    include: { photos: true }
})

export type PanelWithPhotos = Prisma.PanelGetPayload<typeof PanelWithPhotos>

const ProductWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photos: true }
})

export type ProductWithPhotos = Prisma.ProductGetPayload<typeof ProductWithPhotos>

export default prisma