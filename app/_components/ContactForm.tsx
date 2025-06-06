import * as R from 'ramda'
import { useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import { AlertType, MailFormType } from '@lib/types'

const ContactForm = () => {
  const [mailForm, setMailForm] = useState<MailFormType>({
    name: '',
    email: '',
    message: '',
  })
  const [formInputClass, setFormInputClass] = useState<MailFormType>({
    name: 'input-primary',
    email: 'input-primary',
    message: 'textarea-primary',
  })
  const [mailFormProcessing, setMailFormProcessing] = useState<boolean>(false)
  const [mailFormAlert, setMailFormAlert] = useState<AlertType>({
    type: '',
    message: '',
  })

  const changeMailForm = (id: string, event: string) => {
    setMailForm({
      ...mailForm,
      [id]: event,
    })
  }

  const submitMailForm = async () => {
    const newformInputClass = {
      name: 'input-primary',
      email: 'input-primary',
      message: 'textarea-primary',
    }
    let missingInfoFlag = false
    setMailFormProcessing(true)

    try {
      setMailFormAlert({
        type: '',
        message: '',
      })

      if (R.isEmpty(mailForm.name)) {
        missingInfoFlag = true
        newformInputClass['name'] = 'input-error'
      }

      if (R.isEmpty(mailForm.email)) {
        missingInfoFlag = true
        newformInputClass['email'] = 'input-error'
      }

      if (R.isEmpty(mailForm.message)) {
        missingInfoFlag = true
        newformInputClass['message'] = 'textarea-error'
      }

      setFormInputClass(newformInputClass)

      if (missingInfoFlag) {
        setMailFormProcessing(false)
        return
      } else {
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
            if (R.equals(response.status_code, 200)) {
              setMailFormProcessing(false)
              setMailFormAlert({
                type: 'alert-success',
                message: response.message,
              })
              setMailForm({
                name: '',
                email: '',
                message: '',
              })
            } else {
              setMailFormProcessing(false)
              setMailFormAlert({
                type: 'alert-error',
                message: response.message,
              })
            }
          })
          .catch(function () {
            setMailFormProcessing(false)
            setMailFormAlert({
              type: 'error',
              message: 'Something weird occurred... Try again later!',
            })
          })
      }
    } catch (error: unknown) {
      console.log(error)
    }
  }
  return (
    <div className="form-control w-full flex flex-col gap-5">
      <input
        type="text"
        placeholder="Name"
        className={`input input-bordered w-full ${formInputClass.name}`}
        value={mailForm.name}
        onChange={(e) => {
          changeMailForm('name', e.target.value)
        }}
      />
      <input
        type="email"
        placeholder="Email"
        className={`input input-bordered w-full ${formInputClass.email}`}
        value={mailForm.email}
        onChange={(e) => {
          changeMailForm('email', e.target.value)
        }}
      />
      <textarea
        className={`textarea textarea-bordered h-24 ${formInputClass.message}`}
        placeholder="Message"
        value={mailForm.message}
        onChange={(e) => {
          changeMailForm('message', e.target.value)
        }}
      ></textarea>
      {mailFormProcessing ? (
        <div className="flex flex-row items-center justify-center">
          <button className="btn loading">Sending...</button>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={async () => {
            await submitMailForm()
          }}
        >
          Send
        </button>
      )}
      <div className="h-12">
        {!R.isEmpty(mailFormAlert.message) && (
          <div className={`alert ${mailFormAlert.type} shadow-lg`}>
            <div className="flex flex-row items-center gap-5">
              <IoIosCheckmarkCircle /> <span>{mailFormAlert.message}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactForm
