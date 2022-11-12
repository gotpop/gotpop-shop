export default function handler(req, res) {
  const body = req.body
  const { first, last } = body

  if (!first || !last) {
    return res.status(400).json({ data: 'First or last name not found' })
  }

  res.status(200).json({
    first,
    last
  })
}
