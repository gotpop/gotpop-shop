import { NextApiRequest, NextApiResponse } from 'next'

import { Cart } from '@prisma/client'
import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const cartData = await prisma.cart.upsert({
    include: {
      cartItems: true
    }
  })

  return res.status(200).json(cartData)
}