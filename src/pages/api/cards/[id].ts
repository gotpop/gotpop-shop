import { NextApiRequest, NextApiResponse } from 'next'
import { cards } from '@content/cards'
import { Card } from 'types'

type ResponseError = {
  message: string
}

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Card | ResponseError>
) {
  const { query } = req
  const { id } = query
  console.log('query :', query);
  const filtered = cards.filter((p) => p.id === id)
  console.log('filtered :', filtered);

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}