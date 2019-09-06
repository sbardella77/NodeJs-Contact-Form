const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: '5deb4b26d64c3a07c8e89b591031d9e9-19f318b0-e0298388',
    domain: 'sandbox53499e545a4a45dfbe175e864c45abf6.mailgun.org'
  }
}

let mailTransporter = nodemailer.createTransport(mailGun(auth))

const sendEmail = (email, subject, message, firstName, lastName, cb) => {
  const mailOption = {
    from: email,
    to: 'patrizio.sbardella@gmail.com',
    firstName,
    lastName,
    subject,
    message
  }

  mailTransporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err)
      return cb(err, null)
    } else {
      console.log('your message was sendet ')
      return cb(null, data)
    }
  })
}

module.exports = sendEmail
