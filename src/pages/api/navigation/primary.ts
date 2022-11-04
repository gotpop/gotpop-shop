import { NextApiResponse, NextApiRequest } from 'next'
import { navPrimary } from '@content/nav-primary'
import { Card } from 'types'

export default function handler(
  _req: NextApiRequest,
  // res: NextApiResponse<Card[]>
  res
) {
  return res.status(200).json(navPrimary)
}