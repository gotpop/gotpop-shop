import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const body = _req.body

  if (_req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const currentUser = await prisma.user.findUnique({
    where: { email: 'alice@prisma.io' },
    include: {
      Carts: true
    }
  })

  const product = await prisma.product.findUnique({
    where: { id: body.id }
  })

  const productName = `ci-${product.name}`

  const makeCartItem = await prisma.cartItem.upsert({
    where: { name: productName },
    update: { amount: body.quantity },
    create: {
      name: productName,
      amount: body.quantity,
      product: {
        connect: { id: body.id },
      },
      Cart: {
        connect: { id: currentUser.Carts[0].id },
      },
    },
  })

  return res.status(200).json(makeCartItem)
}
