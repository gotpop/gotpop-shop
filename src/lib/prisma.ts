import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const productWithPhotos = Prisma.validator<Prisma.ProductArgs>()({
    include: { photo: true }
})

export type productWithPhotos = Prisma.ProductGetPayload<typeof productWithPhotos>

export default prisma