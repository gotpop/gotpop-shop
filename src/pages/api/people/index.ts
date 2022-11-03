import { NextApiResponse, NextApiRequest } from 'next'
import { people } from '@content/data'
import { Person } from 'types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
  return res.status(200).json(people)
}