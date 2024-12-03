import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(
  req: Request,
) {
  const transporter = nodemailer.createTransport({
    port:  process.env.NODE_ENV === 'production' ? 465 : 2525,
    host: process.env.NODEMAILER_HOST,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: process.env.NODE_ENV === 'production',
  })

  const body = await req.json()
  const {
    name,
    email,
    message
  } = body

  const mailData = {
    from: '"KDLP Dev" <donotreply@kdlp.dev>',
    to: 'kendrickdelapena@gmail.com',
    subject: 'Portfolio Message',
    html: `You received the following message from <b>${name} (${email})</b>:<br/><br/>${message}`,
  }

  const simpleEmailFormat = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!name || !email || !message) {
    return NextResponse.json({
      status_code: 400,
      message: 'Missing required information!',
    })
  }

  if (!email.match(simpleEmailFormat)) {
    return NextResponse.json({
      status_code: 400,
      message: 'Please provide a valid email!',
    })
  }

  try {
    await transporter.sendMail(mailData)
 
    return NextResponse.json({
      status_code: 200,
      message: 'Message has been sent!',
    })
  } catch {
    return NextResponse.json({
      status_code: 400,
      message: 'Email could not be sent at this time. Check back later!',
    })
  }
}
