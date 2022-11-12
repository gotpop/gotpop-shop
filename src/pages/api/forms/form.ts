import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { headers, body: { firstName, lastName, email, password } } = req
  const requestHeaders = JSON.stringify(headers)

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ data: 'First or last name not found!' })
  }

  res.status(200).json({
    requestHeaders,
    firstName,
    lastName,
    email,
    password
  })
}
