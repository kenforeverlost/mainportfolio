'use server'

import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { supabase } from '@lib/supabase'

export const logNodemailer = async ({
  name,
  email,
  message,
  status_code,
  status_message,
  response,
}: {
  name: string
  email: string
  message: string
  status_code: number
  status_message: string
  response?: SMTPTransport.SentMessageInfo
}) => {
  try {
    const log = {
      name,
      email,
      message,
      status_code,
      status_message,
      response: response ?? {},
    }
    await supabase.from('log_nodemailer').insert(log)
  } catch (error) {
    console.error('Error logging Nodemailer data:', error)
  }
}
