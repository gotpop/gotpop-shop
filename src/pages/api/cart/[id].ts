import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const productId = Array.isArray(query.id) ? query.id[0] : query.id

  const currentUser = await prisma.user.findUnique({
    where: { email: 'alice@prisma.io' },
    include: {
      Carts: {
        include: {
          CartItems: true
        }
      }
    }
  })

  const makeCartItem = await prisma.cartItem.upsert({
    where: { productId: productId },
    update: {},
    create: {
      product: {
        connect: { id: productId },
      },
      Cart: {
        connect: { id: currentUser.Carts[0].id },
      },
    },
  })

  return res.status(200).json(makeCartItem)
}
