import { NextApiRequest, NextApiResponse } from 'next'

import { Panel } from '@prisma/client'
import prisma from '@lib/prisma'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Panel[]>
) {
  const panelData = await prisma.panel.findMany()

  return res.status(200).json(panelData)
}