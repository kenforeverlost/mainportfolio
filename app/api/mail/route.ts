import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { logNodemailer } from '@lib/actions'

const isProduction = process.env.NODE_ENV === 'production'

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    port: isProduction ? 465 : 2525,
    host: process.env.NODEMAILER_HOST,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: false,
  })

  const body = await req.json()
  const { name, email, message: userMessage } = body
  const mailData = {
    from: '"KDLP Dev" <admin@kdlp.dev>',
    to: 'kendrickdelapena@gmail.com',
    subject: 'Portfolio Message',
    html: `You received the following message from <b>${name} (${email})</b>:<br/><br/>${userMessage}`,
  }
  const simpleEmailFormat = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let statusInfo: {
    status_code: number
    message: string
    response?: SMTPTransport.SentMessageInfo
  } = {
    status_code: 500,
    message: 'Email could not be sent at this time. Check back later!',
    response: undefined,
  }

  try {
    if (!name || !email || !userMessage) {
      statusInfo = {
        status_code: 400,
        message: 'Missing required information!',
        response: undefined,
      }
    } else if (!email.match(simpleEmailFormat)) {
      statusInfo = {
        status_code: 400,
        message: 'Please provide a valid email!',
        response: undefined,
      }
    } else {
      const response: SMTPTransport.SentMessageInfo =
        await transporter.sendMail(mailData)

      statusInfo = {
        status_code: 200,
        message: 'Message has been sent!',
        response: response,
      }
    }
  } catch (error) {
    console.error(error)
  }

  await logNodemailer({
    name,
    email,
    message: userMessage,
    status_code: statusInfo.status_code,
    status_message: statusInfo.message,
    response: statusInfo.response,
  })

  return NextResponse.json(statusInfo)
}
