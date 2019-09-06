const express = require('express')
const app = express()
const PORT = 2500
const path = require('path')
const sendEmail = require('./mail')

const log = console.log

// Data parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Send Email
app.post('/email', (req, res) => {
  const { email, subject, message, firstName, lastName } = req.body
  log('Data:', req.body)

  sendEmail(email, subject, message, firstName, lastName, (err, data) => {
    if (err) {
      log('ERROR :', err)
      return res.status(500).json({ message: 'Internal error' })
    } else {
      return res.json({ message: 'Email sent !!!' })
    }
  })
  res.json({ message: 'Message Received' })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(PORT, () => {
  log(`server startet on PORT ${PORT}`)
})
