import { NextApiResponse, NextApiRequest } from 'next'
import { cards } from '@content/cards'
import { Card } from 'types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Card[]>
) {
  return res.status(200).json(cards)
}