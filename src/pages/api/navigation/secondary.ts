import { NextApiResponse, NextApiRequest } from 'next'
import { navSecondary } from '@content/nav-secondary'
import { Card } from 'types'

export default function handler(
  _req: NextApiRequest,
  // res: NextApiResponse<Card[]>
  res
) {
  return res.status(200).json(navSecondary)
}