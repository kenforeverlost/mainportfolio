import { BoxProps } from '@mui/material'

export interface MailFormType {
  name: string
  email: string
  message: string
}

export interface ProjectsType {
  title: string
  subtitle: string
  timeframe: string
  category: string
  description: string
  highlights: string[]
  impact?: string
  url?: string
  tools: string[]
  image: string[]
}
