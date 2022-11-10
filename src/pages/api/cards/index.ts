import { NextApiRequest, NextApiResponse } from 'next'

import { Card } from '@types'
import { cards } from '@data/cards'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Card[]>
) {
  return res.status(200).json(cards)
}