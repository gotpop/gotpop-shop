import { NextApiRequest, NextApiResponse } from 'next'

import { Card } from '@types'
import { cards } from '@data/cards'

type ResponseError = {
  message: string
}

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Card | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = cards.filter((p) => p.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}