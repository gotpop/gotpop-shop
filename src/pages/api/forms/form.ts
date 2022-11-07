export default function handler(req, res) {
  const body = req.body

  console.log('body: ', body)


  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    return res.status(400).json({ data: 'First or last name not found' })
  }

  res.status(200).json({
    firstName: body.firstName.value,
    lastName: body.lastName.value,
    email: body.email.value,
    password: body.password.value
  })
}
