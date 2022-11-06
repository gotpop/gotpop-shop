import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET':
            const liam = req.headers
            // console.log('res.json(body)', res.json(body));
            res.status(200)
            // Get data from your database
            res.status(200).json({ id, name: `User ${id}`, message: 'Nice GET!' })
            break
        case 'PUT':
            // Update or create data in your database
            res.status(200).json({ id, name: name || `User ${id}` , message: 'Nice PUT!'})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
