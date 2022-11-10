import { NextApiRequest, NextApiResponse } from 'next'

import { IForm } from 'types'
import { forms } from 'data/forms'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IForm[]>
) {
  return res.status(200).json(forms)
}