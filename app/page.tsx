'use client'

import * as R from 'ramda'
import Head from 'next/head'
import { useState } from 'react'
import { BsCameraFill } from 'react-icons/bs'
import { FaBitbucket } from 'react-icons/fa'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { RiMenu5Fill } from 'react-icons/ri'
import { SiLinkedin } from 'react-icons/si'
import ProfileSection from '@components/ProfileSection'
import SkillWrap from '@components/SkillWrap'
import { AlertType, MailFormType } from '@lib/types'

export default function Home() {
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

  const profile_picture_url =
    'https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/profile_picture.png'

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
            'Content-Type': 'application/json'
          }
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
    <div>
      <Head>
        <title>Kendrick De La Pena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-gray-100 min-h-screen">
        <div className="navbar bg-primary">
          <div className="navbar-start flex-1">
            <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
              KDLP
            </a>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <RiMenu5Fill className="text-3xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center flex-1 justify-center lg:hidden">
            <a className="btn btn-ghost normal-case text-xl ">KDLP</a>
          </div>
          <div className="navbar-end flex-1">
            <ul className="menu menu-horizontal px-1 hidden lg:flex flex-none">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <ProfileSection
            id={'about'}
            title={'Engineer. Developer. Adventurer.'}
            titleClass={'text-slate-900'}
            textClass={'text-slate-800'}
            backgroundClass={'bg-base-200'}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col items-center justify-center w-full md:w-1/3 shrink-0">
                <img
                  className="w-full max-w-[300px]"
                  src={profile_picture_url}
                  alt="profile_picture"
                />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div>
                  I go by <b>Kendrick De La Pena</b> and currently reside in{' '}
                  <b>Las Vegas, Nevada (Ne-VA-duh)</b>. Growing up in the battle
                  born state, I am constantly progressing, both in and out of
                  the tech world. Logical thinking and critical observation are
                  my key skills.
                </div>
                <div>
                  I attained a{' '}
                  <b>Bachelor of Science degree in Computer Engineering</b> from
                  the{' '}
                  <a
                    href="https://www.unlv.edu/"
                    target="_blank"
                    className="font-bold underline"
                  >
                    University of Las Vegas, Nevada
                  </a>
                  , along with a{' '}
                  <b>
                    Minor in Computer Science and Technology Commercialization
                  </b>
                  . During my time at the university, I was also inducted into{' '}
                  <a
                    href="https://www.tbp.org/recruit/recruitHome.cfm"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Tau Beta Pi Engineering (ΤΒΠ) Honor Society
                  </a>
                  .
                </div>
                <div>
                  Outside of my tech interests, I enjoy traveling and live music
                  as well as video gaming, photography, and rock climbing. These
                  pursuits allow me to expand my perspective and exercise my
                  creativity. Whether I am working a job or pursuing a hobby, my
                  goal is to <b>be at my best</b>.
                </div>
              </div>
            </div>
          </ProfileSection>
          <ProfileSection
            id={'skills'}
            title={'Languages, Libraries, Frameworks, and more!'}
            titleClass={'text-slate-900'}
            textClass={'text-slate-800'}
            backgroundClass={'bg-base-300'}
          >
            <div className="flex flex-col gap-5">
              <div>
                The first language I learned, aside from HTML from the early
                MySpace days, was C++ through my university. Since then, I have
                picked up more languages and other helpful tools throughout my
                career.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                <SkillWrap skillName="JavaScript" />
                <SkillWrap skillName="CSS" />
                <SkillWrap skillName="HTML" />
                <SkillWrap skillName="TypeScript" />
                <SkillWrap skillName="PHP" />
                <SkillWrap skillName="SQL" />
                <SkillWrap skillName="GraphQl" />
                <SkillWrap skillName="Hasura" />
                <SkillWrap skillName="Progress 4GL" />
                <SkillWrap skillName="C++" />
                <SkillWrap skillName="jQuery" />
                <SkillWrap skillName="Bootstrap" />
                <SkillWrap skillName="Next.js" />
                <SkillWrap skillName="React" />
                <SkillWrap skillName="Ionic Framework" />
                <SkillWrap skillName="Node.js" />
                <SkillWrap skillName="GitHub" />
                <SkillWrap skillName="Bitbucket" />
                <SkillWrap skillName="Jira" />
                <SkillWrap skillName="Vercel" />
                <SkillWrap skillName="Supabase" />
                <SkillWrap skillName="Expo Go" />
                <SkillWrap skillName="Photoshop" />
              </div>
            </div>
          </ProfileSection>
          <ProfileSection
            id={'experience'}
            title={'Work History'}
            titleClass={'text-slate-900'}
            textClass={'text-slate-800'}
            backgroundClass={'bg-base-100'}
          >
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div className="flex flex-col items-center text-center justify-center">
                  <a
                    className="w-8/12 sm:w-6/12 md:w-7/12 lg:w-5/12 mb-8"
                    href="https://www.lasvegasrealtor.com/"
                    target="_blank"
                  >
                    <img src="https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/lvr_logo.png" alt="LVR" />
                  </a>
                  <div className="text-xl font-bold">Web Developer</div>
                  <div className="text-lg">Las Vegas REALTORS®</div>
                  <div className="italic text-md">
                    September 2020 to Current
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 col-span-1 md:col-span-2">
                  <div>
                    <div className="font-bold ">Highlights</div>
                    <ul className="list-disc ml-5">
                      <li>
                        Refined and enhanced the LVR member web portal to
                        increase membership engagement and accessibility of
                        association news
                      </li>
                      <li>
                        Integrated several web APIs including the DocuSign API
                        for membership applications and the SendGrid API for
                        automated email notices
                      </li>
                      <li>
                        Managed the digitization of the member check-in process
                        for verifying registration and tracking attendance at
                        events to better efficiency
                      </li>
                      <li>
                        Built administration tools to aid staff in helping
                        members with daily tasks
                      </li>
                      <li>
                        Migrated components from the legacy member web portal
                        stack to modern solutions such as Next.js and Sanity
                      </li>
                      <li>
                        Provided support to the development of the member portal
                        mobile app
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold ">Main Tools:</span> PHP, SQL,
                    Javascript, HTML, CSS, Node.js, React, Next.js, Supabase
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div className="flex flex-col items-center text-center justify-center">
                  <a
                    className="w-8/12 sm:w-6/12 md:w-7/12 lg:w-5/12 mb-8"
                    href="https://www.fdm4.com/"
                    target="_blank"
                  >
                    <img src="https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/fdm4_logo.png" alt="FDM4"/>
                  </a>
                  <div className="text-xl font-bold">Programmer Analyst</div>
                  <div className="text-lg">FDM4 America, Inc.</div>
                  <div className="italic text-md">June 2015 to June 2020</div>
                </div>
                <div className="flex flex-col justify-center gap-2 col-span-1 md:col-span-2">
                  <div>
                    <div className="font-bold ">Highlights</div>
                    <ul className="list-disc ml-5">
                      <li>
                        Strengthened the quality of the ERP, WMS, and E-Commerce
                        software solutions through custom modifications and bug
                        fixes
                      </li>
                      <li>
                        Collaborated directly with clients on-site in assisting
                        with questions and addressing issues to build rapport
                        and confidence with the company
                      </li>
                      <li>
                        Led a live product upgrade to upkeep the client’s
                        software version
                      </li>
                      <li>
                        Counseled new hires on knowing company procedures,
                        learning programming tools, and understanding the
                        software
                      </li>
                      <li>
                        Produced code reviews on the work of other team members
                        and assumed team lead duties when needed
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold ">Main Tools:</span> Progress
                    4GL, JavaScript, HTML, CSS, Bootstrap
                  </div>
                </div>
              </div>
            </div>
          </ProfileSection>
          <ProfileSection
            id={'contact'}
            title={'Connect'}
            titleClass={'text-slate-900'}
            textClass={'text-slate-800'}
            backgroundClass={'bg-base-300'}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-5 md:gap-12 items-center">
                <div>
                  Shoot me a message if you are looking to collaborate on a
                  project or to request my resume. Look forward to hearing from
                  you!
                </div>
                <div className="flex flex-col gap-5">
                  <div>Feel free to also check out my other links.</div>
                  <div className="flex flex-row justify-center gap-8">
                    <a
                      href="https://www.linkedin.com/in/kendrickDLP"
                      target="_blank"
                    >
                      <SiLinkedin className="fill-primary text-4xl" />
                    </a>
                    <a
                      href="https://bitbucket.org/Kenforeverlost"
                      target="_blank"
                    >
                      <FaBitbucket className="fill-primary text-4xl" />
                    </a>
                    <a href="https://foreverlostphoto.com/" target="_blank">
                      <BsCameraFill className="fill-primary text-4xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-center items-center">
                  <div className="form-control w-full max-w-lg flex flex-col gap-5">
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
                      <div className='flex flex-row items-center justify-center'>
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
                          <div className='flex flex-row items-center gap-5'>
                            <IoIosCheckmarkCircle />{' '}
                            <span>{mailFormAlert.message}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProfileSection>
        </div>
        <footer className="footer footer-center p-5 bg-base-100 text-base-content rounded">
          <div>
            <p>Copyright © 2024 - Kendrick De La Pena</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
