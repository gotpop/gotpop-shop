import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const currentUser = await prisma.user.findUnique({
    where: { loggedIn: true },
    include: {
      Carts: true
    }
  })

  const product = await prisma.product.findUnique({
    where: { id: _req.body.id }
  })

  const makeCartItem = await prisma.cartItem.upsert({
    where: { name: product.name },
    update: { amount: _req.body.newAmount },
    create: {
      name: product.name,
      product: {
        connect: { id: _req.body.id },
      },
      Cart: {
        connect: { id: currentUser.Carts[0].id },
      },
    },
  })

  console.log('makeCartItem :', makeCartItem);

  return res.status(200).json(makeCartItem)
}
