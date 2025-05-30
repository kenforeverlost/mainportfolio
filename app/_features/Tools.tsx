import ProfileSection from '@components/ProfileSection'
import SkillWrap from '@components/SkillWrap'
import { SKILLS } from '@lib/constants'

const Tools = () => {
  return (
    <ProfileSection
      id={'skills'}
      title={'Languages, Libraries, Frameworks, and more!'}
      titleClass={'text-slate-900'}
      textClass={'text-slate-800'}
      backgroundClass={'bg-base-300'}
    >
      <div className="flex flex-col gap-5">
        <div>
          The first language I learned, aside from HTML from the early MySpace
          days, was C++ through my university. Since then, I have picked up more
          languages and other helpful tools throughout my career.
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {SKILLS.map((item, index) => {
            return (
              <SkillWrap
                key={index}
                skillName={item.name}
                type={item.category}
                icon={item.icon}
              />
            )
          })}
        </div>
      </div>
    </ProfileSection>
  )
}

export default Tools
