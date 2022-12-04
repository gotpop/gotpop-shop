import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const bob = await prisma.user.findUnique({
    where: {
      email: 'bob@prisma.io',
    },
  })

  const item = await prisma.cartItem.findUnique({
    where: {
      id: '6d1b7752-9e48-493f-88fd-11942312d3fc',
    },
  })

  const theCart = await prisma.cartItem.update({
    where: { id: 'de4889e1-4dcf-45d1-b295-10fd421c4ff7' },
    data: {
      Cart: {
        connect: { id: 'c4517f2a-05e2-4d04-bc9c-e2de07b8fb3c' },
      },
    },
  })

  const makeCartItem = await prisma.cartItem.create({
    data: {
      name: 'liamz',
      amount: 10,
      product: {
        connect: { id: 'c262889d-e2be-4e70-9769-6c93fe61e560' },
      },
      Cart: {
        connect: { id: 'c4517f2a-05e2-4d04-bc9c-e2de07b8fb3c' },
      },
    }
  })

  console.log('item :', item, bob);

  return res.status(200).json(item)
} 
