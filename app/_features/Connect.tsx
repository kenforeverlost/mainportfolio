import { BsCameraFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'

import ProfileSection from '@components/ProfileSection'
import ContactForm from '@components/ContactForm'

const Connect = () => {
  return (
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
            Shoot me a message if you are looking to collaborate on a project or
            to request my resume. Look forward to hearing from you!
          </div>
          <div className="flex flex-col gap-5">
            <div>Feel free to also check out my other links.</div>
            <div className="flex flex-row justify-center gap-8">
              <a href="https://www.linkedin.com/in/kendrickDLP" target="_blank">
                <SiLinkedin className="fill-primary text-4xl" />
              </a>
              <a href="https://github.com/kenforeverlost" target="_blank">
                <FaGithub className="fill-primary text-4xl" />
              </a>
              <a href="https://foreverlostphoto.com/" target="_blank">
                <BsCameraFill className="fill-primary text-4xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </ProfileSection>
  )
}

export default Connect
