export default function handler(req, res) {
  const body = req.body

  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    return res.status(400).json({ data: 'First or last name not found!' })
  }
  
  console.log('res :', res.rawHeaders);
  console.log('res :', res.httpVersion);

  res.status(200).json({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password
  })
}
