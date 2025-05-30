import ProfileSection from '@components/ProfileSection'
import { PROFILE_PICTURE_URL } from '@lib/constants'

const Introduction = () => {
  return (
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
            src={PROFILE_PICTURE_URL}
            alt="profile_picture"
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div>
            I go by <b>Kendrick De La Pena</b> and currently reside in{' '}
            <b>Las Vegas, Nevada (Ne-VA-duh)</b>. Growing up in the battle born
            state, I am constantly progressing, both in and out of the tech
            world. Logical thinking and critical observation are my key skills.
          </div>
          <div>
            I attained a{' '}
            <b>Bachelor of Science degree in Computer Engineering</b> from the{' '}
            <a
              href="https://www.unlv.edu/"
              target="_blank"
              className="font-bold underline"
            >
              University of Las Vegas, Nevada
            </a>
            , along with a{' '}
            <b>Minor in Computer Science and Technology Commercialization</b>.
            During my time at the university, I was also inducted into{' '}
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
            Outside of my tech interests, I enjoy traveling and live music as
            well as video gaming, photography, and rock climbing. These pursuits
            allow me to expand my perspective and exercise my creativity.
            Whether I am working a job or pursuing a hobby, my goal is to{' '}
            <b>be at my best</b>.
          </div>
        </div>
      </div>
    </ProfileSection>
  )
}

export default Introduction
