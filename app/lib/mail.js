import * as R from 'ramda'
import nodemailer from 'nodemailer'

export default function Mail(req, res) {
  const transporter = nodemailer.createTransport({
    port: process.env.NODEMAILER_PORT,
    host: process.env.NODEMAILER_HOST,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: R.equals('465', process.env.NODEMAILER_PORT),
  })

  const mailData = {
    from: '"KDLP Dev" <donotreply@kdlp.dev>',
    to: 'kendrickdelapena@gmail.com',
    subject: 'Portfolio Message',
    html: `You received the following message from <b>${req.body.name} (${req.body.email})</b>:<br/><br/>${req.body.message}`,
  }

  const simpleEmailFormat = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (R.and(req.body.email !== '', req.body.email.match(simpleEmailFormat))) {
    transporter.sendMail(mailData, function (error) {
      if (error) {
        res.send({
          status_code: 400,
          message: 'Email could not be sent at this time. Check back later!',
        })
      } else {
        res.send({
          status_code: 200,
          message: 'Message has been sent!',
        })
      }
    })
  } else {
    res.send({
      status_code: 400,
      message: 'Please provide a valid email!',
    })
  }
}
