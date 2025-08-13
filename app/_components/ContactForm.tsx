'use client'

import { ChangeEvent, useState } from 'react'
import {
  Alert,
  AlertProps,
  Box,
  CircularProgress,
  FormControl,
  Portal,
} from '@mui/material'

import { MailFormType } from '@lib/types'
import StyledPaper from '@components/StyledPaper'
import StyledTextField from '@components/StyledTextField'
import StyledButton from './StyledButton'
import StyledSnackbar from './StyledSnackbar'
import { FaPaperPlane } from 'react-icons/fa'

const blankMailForm: MailFormType = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [mailForm, setMailForm] = useState<MailFormType>(blankMailForm)
  const [mailFormError, setMailFormError] =
    useState<MailFormType>(blankMailForm)
  const [mailFormProcessing, setMailFormProcessing] = useState<boolean>(false)
  const [mailFormAlert, setMailFormAlert] = useState<AlertProps>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    console.log('handleChange', name, value)
    setMailForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const submitMailForm = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    setMailFormProcessing(true)

    try {
      setMailFormAlert(undefined)

      if (!mailForm.name) {
        setMailFormError((prev) => ({
          ...prev,
          name: 'Name is required',
        }))
      } else {
        setMailFormError((prev) => ({ ...prev, name: '' }))
      }

      if (!mailForm.email) {
        setMailFormError((prev) => ({
          ...prev,
          email: 'Email is required',
        }))
      } else {
        setMailFormError((prev) => ({ ...prev, email: '' }))
      }

      if (!mailForm.message) {
        setMailFormError((prev) => ({
          ...prev,
          message: 'Message is required',
        }))
      } else {
        setMailFormError((prev) => ({ ...prev, message: '' }))
      }

      if (mailForm.name && mailForm.email && mailForm.message) {
        const url = '/api/mail'

        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(mailForm),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then(function (response) {
            if (response.status_code === 200) {
              setMailForm(blankMailForm)
              setMailFormError(blankMailForm)

              setMailFormAlert({
                severity: 'success',
                children: response.message,
              })
              setMailFormProcessing(false)
            } else {
              setMailFormAlert({
                severity: 'error',
                children: response.message,
              })
              setMailFormProcessing(false)
            }
          })
          .catch(function () {
            setMailFormAlert({
              severity: 'error',
              children: 'Cannnot send at this time. Try again later!',
            })
            setMailFormProcessing(false)
          })
      } else {
        setMailFormProcessing(false)
      }
    } catch (error: unknown) {
      console.log(error)
      setMailFormAlert({
        severity: 'error',
        children: 'Something weird occurred... Try again later!',
      })
      setMailFormProcessing(false)
    }
  }

  return (
    <StyledPaper
      sx={{
        paddingX: 4,
        paddingY: 4,
        width: 1,
      }}
    >
      {mailFormAlert && (
        <Portal>
          <StyledSnackbar
            open={!!mailFormAlert}
            onClose={() => setMailFormAlert(undefined)}
          >
            <Alert
              onClose={() => setMailFormAlert(undefined)}
              severity={mailFormAlert.severity}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {mailFormAlert.children}
            </Alert>
          </StyledSnackbar>
        </Portal>
      )}
      <FormControl
        fullWidth
        onSubmit={submitMailForm}
        disabled={mailFormProcessing}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: 1 }}
        >
          <StyledTextField
            required
            fullWidth
            label="Name"
            name="name"
            value={mailForm.name}
            onChange={handleChange}
            error={!!mailFormError.name}
            helperText={mailFormError.name ?? ' '}
          />
          <StyledTextField
            required
            fullWidth
            label="Email"
            name="email"
            value={mailForm.email}
            onChange={handleChange}
            error={!!mailFormError.email}
            helperText={mailFormError.email ?? ' '}
          />
          <StyledTextField
            required
            fullWidth
            label="Message"
            name="message"
            value={mailForm.message}
            onChange={handleChange}
            multiline
            rows={4}
            error={!!mailFormError.message}
            helperText={mailFormError.message ?? ' '}
          />
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={mailFormProcessing}
            endIcon={
              mailFormProcessing ? (
                <CircularProgress size={20} />
              ) : (
                <FaPaperPlane />
              )
            }
          >
            {mailFormProcessing ? 'Sending...' : 'Send'}
          </StyledButton>
        </Box>
      </FormControl>
    </StyledPaper>
  )
}

export default ContactForm
