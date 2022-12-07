import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req
  const { id, quantity } = body

  console.log('id, quantity :', id, quantity);

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

  const updateQuantity = { quantity: quantity }
  const dontUpdateQuantity = {}

  const makeCartItem = await prisma.cartItem.upsert({
    where: { productId: id },
    update: quantity ? updateQuantity : dontUpdateQuantity,
    create: {
      product: {
        connect: { id: id },
      },
      Cart: {
        connect: { id: currentUser.Carts[0].id },
      },
    },
  })

  return res.status(200).json(makeCartItem)
}
