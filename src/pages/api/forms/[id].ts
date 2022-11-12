import { NextApiRequest, NextApiResponse } from 'next'

import { IForm } from '@types'
import { forms } from '@data/forms'

type ResponseError = {
  message: string
}

export default function formHandler(
  req: NextApiRequest,
  res: NextApiResponse<IForm | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = forms.filter((p) => p.id === id)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Form with id: ${id} not found.` })
}