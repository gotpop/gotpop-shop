export default function handler(req, res) {
    const body = req.body

    if (!body.first || !body.last ) {
      return res.status(400).json({ data: 'First or last name not found' })
    }
  
    res.status(200).json({
      firstName: body.first.value,
      lastName: body.last.value,
      email: body.email.value,
      password: body.password.value
    })
  }
  