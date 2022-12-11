import { NextApiRequest, NextApiResponse } from "next"

import { IData3 } from "@types"

type ResponseError = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData3 | ResponseError>
) {
  const body = req.body
  const { first, last } = body

  if (!first || !last) {
    return res.status(400).json({ message: 'First or last name not found' })
  }

  res.status(200).json({
    first,
    last
  })
}
