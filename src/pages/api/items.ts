import { NextApiRequest, NextApiResponse } from 'next'

import Product from '@components/ui/Product'
import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // if (_req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Method not allowed' })
  // }

  // const productId = _req.body.productId
  // const amount = _req.body.amount

  // const product2 = await prisma.cartItem.create({
  //   data: {
  //     amount: 22,
  //     id: '',
  //     product: {
  //       create: {
  //         id: 'e9c6e102-179c-4f78-ae3e-37acf3d83a70'
  //       }
  //     }
  //   },
  // })


  const product2 = await prisma.cartItem.upsert({
    where: { name: 'HTML & JS' },
    update: { amount: 20 },
    create: {
      // userId: '338d6d22-5aea-401b-9be8-28d85ed6edb7',
      productId: 'e9c6e102-179c-4f78-ae3e-37acf3d83a70'
    },
  })

  return res.status(200).json(product2)
} 
