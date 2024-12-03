import {
  DiBootstrap,
  DiGithubBadge,
  DiJavascript1,
  DiJqueryLogo,
  DiMysql,
} from 'react-icons/di'
import { FaBitbucket, FaHtml5, FaQuestionCircle, FaReact } from 'react-icons/fa'
import {
  SiAdobephotoshop,
  SiCplusplus,
  SiCss3,
  SiExpo,
  SiGraphql,
  SiHasura,
  SiIonic,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiProgress,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

interface Props {
  skillName: string
}

const iconClass = 'fill-secondary text-5xl'
let iconObject = null

export default function SkillWrap({ skillName }: Props) {
  switch (skillName) {
    case 'Bitbucket':
      iconObject = <FaBitbucket className={iconClass} />
      break
    case 'Bootstrap':
      iconObject = <DiBootstrap className={iconClass} />
      break
    case 'C++':
      iconObject = <SiCplusplus className={iconClass} />
      break
    case 'CSS':
      iconObject = <SiCss3 className={iconClass} />
      break
    case 'Expo Go':
      iconObject = <SiExpo className={iconClass} />
      break
    case 'GitHub':
      iconObject = <DiGithubBadge className={iconClass} />
      break
    case 'GraphQl':
      iconObject = <SiGraphql className={iconClass} />
      break
    case 'Hasura':
      iconObject = <SiHasura className={iconClass} />
      break
    case 'HTML':
      iconObject = <FaHtml5 className={iconClass} />
      break
    case 'Ionic Framework':
      iconObject = <SiIonic className={iconClass} />
      break
    case 'JavaScript':
      iconObject = <DiJavascript1 className={iconClass} />
      break
    case 'Jira':
      iconObject = <SiJira className={iconClass} />
      break
    case 'jQuery':
      iconObject = <DiJqueryLogo className={iconClass} />
      break
    case 'Next.js':
      iconObject = <SiNextdotjs className={iconClass} />
      break
    case 'Node.js':
      iconObject = <SiNodedotjs className={iconClass} />
      break
    case 'PHP':
      iconObject = <SiPhp className={iconClass} />
      break
    case 'Photoshop':
      iconObject = <SiAdobephotoshop className={iconClass} />
      break
    case 'Progress 4GL':
      iconObject = <SiProgress className={iconClass} />
      break
    case 'React':
      iconObject = <FaReact className={iconClass} />
      break
    case 'SQL':
      iconObject = <DiMysql className={iconClass} />
      break
    case 'Supabase':
      iconObject = <SiSupabase className={iconClass} />
      break
    case 'TypeScript':
      iconObject = <SiTypescript className={iconClass} />
      break
    case 'Vercel':
      iconObject = <SiVercel className={iconClass} />
      break
    default:
      iconObject = <FaQuestionCircle className={iconClass} />
      break
  }

  return (
    <div className="flex flex-col gap-1 items-center py-2">
      {iconObject}
      <div className="font-bold text-primary">{skillName}</div>
    </div>
  )
}
