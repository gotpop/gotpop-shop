import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(401).send(`Method ${req.method} not allowed`)
  }

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

  const theCart = currentUser.Carts[0].id

  if (req.method === 'GET') {
    const { query } = req
    const productId = Array.isArray(query.id) ? query.id[0] : query.id

    const makeCartItem = await prisma.cartItem.upsert({
      where: { productId: productId },
      update: {},
      create: {
        product: {
          connect: { id: productId },
        },
        Cart: {
          connect: { id: theCart },
        },
      },
    })

    return res.status(200).json(makeCartItem)
  }

  if (req.method === 'POST') {
    const { body } = req
    const { id, quantity } = body
    const updateQuantity = { quantity: quantity }
    const dontUpdateQuantity = {}

    const makeCartItem = await prisma.cartItem.upsert({
      where: { productId: id },
      update: quantity !== null ? updateQuantity : dontUpdateQuantity,
      create: {
        product: {
          connect: { id: id },
        },
        Cart: {
          connect: { id: theCart },
        },
      },
    })

    return res.status(200).json(makeCartItem)
  }
}
