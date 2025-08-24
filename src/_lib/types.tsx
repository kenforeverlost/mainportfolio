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

export interface SectionProps extends BoxProps {}

export interface ProfileSectionProps extends SectionProps {
  title: string
  subtitle?: string
  description?: string
}
