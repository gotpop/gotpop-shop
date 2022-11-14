import { NextApiRequest, NextApiResponse } from 'next'

import { IPage } from '@types'
import { pages } from '@data/pages'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IPage[]>
) {
  return res.status(200).json(pages)
}