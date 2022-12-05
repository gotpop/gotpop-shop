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

  const activeCart = await prisma.cart.findUnique({
    where: { id: '007168a5-c5c1-4a50-882c-78b44bf5cf3b' },
    // include: {
    //   CartItems: true
    // }
  })

  console.log('activeCart :', activeCart);

  return res.status(200).json(activeCart)
}
