import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const arrayOfIds = _req.body.ids

  const product = await prisma.product.findMany({
    where: {
      id: {
        in: arrayOfIds
      }
    },
  })

  return res.status(200).json(product)
} 
