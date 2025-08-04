export interface MailFormType {
  name: string
  email: string
  message: string
}

export interface SectionProps {
  id: string
  backgroundColor?: string
  wholeScreen?: boolean
  children: React.ReactNode
}

export interface ProfileSectionProps extends SectionProps {
  title: string
  subtitle?: string
  description?: string
}
