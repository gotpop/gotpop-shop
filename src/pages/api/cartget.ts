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
    where: { email: 'alice@prisma.io' },
    include: {
      Carts: true
    }
  })

  const theCart = currentUser.Carts[0].id

  const activeCart = await prisma.cart.findUnique({
    where: { id: theCart },
    include: {
      CartItems: true
    }
  })

  return res.status(200).json(activeCart)
}
