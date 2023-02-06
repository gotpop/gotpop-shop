import { NextApiRequest, NextApiResponse } from 'next'

import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(_req, res, authOptions)
  const theEmail = session?.user?.email

  const currentUser = await prisma.user.findUnique({
    where: { email: theEmail ? theEmail : '' },
    include: {
      Carts: {
        include: {
          CartItems: true
        }
      }
    }
  })

  // TODO: Dynamically set active cart
  const theCart = currentUser?.Carts[0].id

  const activeCart = await prisma.cart.findUnique({
    where: { id: theCart },
    include: {
      CartItems: {
        where: {
          quantity: {
            gt: 0
          }
        },
        include: {
          product: {
            include: {
              photos: true
            }
          }
        }
      }
    }
  })

  return res.status(200).json(activeCart?.CartItems)
}
