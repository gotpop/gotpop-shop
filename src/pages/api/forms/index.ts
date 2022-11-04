import { NextApiResponse, NextApiRequest } from 'next'
import { forms } from '@content/forms'
import { IForm } from 'types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IForm[]>
) {
  return res.status(200).json(forms)
}