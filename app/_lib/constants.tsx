import { BsCameraFill } from 'react-icons/bs'
import {
  DiBootstrap,
  DiGithubBadge,
  DiJavascript1,
  DiJqueryLogo,
  DiMysql,
} from 'react-icons/di'
import {
  FaBitbucket,
  FaBriefcase,
  FaGithub,
  FaHtml5,
  FaInfo,
  FaPhone,
  FaReact,
  FaToolbox,
} from 'react-icons/fa'
import {
  SiAdobephotoshop,
  SiCplusplus,
  SiCss3,
  SiExpo,
  SiGraphql,
  SiHasura,
  SiJira,
  SiLinkedin,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiProgress,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export const NAVIGATION_MENU = [
  {
    label: 'About',
    section: 'about',
    icon: <FaInfo />,
  },
  {
    label: 'Skills',
    section: 'skills',
    icon: <FaToolbox />,
  },
  {
    label: 'Experience',
    section: 'experience',
    icon: <FaBriefcase />,
  },
  {
    label: 'Contact',
    section: 'contact',
    icon: <FaPhone />,
  },
]

export const PROFILE_PICTURE_URL =
  'https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/profile_picture.png'

export const SKILLS_ICON_CLASS = 'fill-secondary text-5xl'
export const SKILLS = [
  {
    name: 'JavaScript',
    category: 'Language',
    icon: <DiJavascript1 className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'CSS',
    category: 'Language',
    icon: <SiCss3 className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'HTML',
    category: 'Language',
    icon: <FaHtml5 className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: <SiTypescript className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'PHP',
    category: 'Language',
    icon: <SiPhp className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'SQL',
    category: 'Language',
    icon: <DiMysql className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'GraphQL',
    category: 'Language',
    icon: <SiGraphql className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Openedge ABL',
    category: 'Language',
    icon: <SiProgress className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'C++',
    category: 'Language',
    icon: <SiCplusplus className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'jQuery',
    category: 'Library',
    icon: <DiJqueryLogo className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'React',
    category: 'Library',
    icon: <FaReact className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Material UI',
    category: 'Library',
    icon: <SiMui className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Next.js',
    category: 'Framework',
    icon: <SiNextdotjs className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Bootstrap',
    category: 'Framework',
    icon: <DiBootstrap className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    icon: <SiTailwindcss className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Node.js',
    category: 'Platform',
    icon: <SiNodedotjs className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'GitHub',
    category: 'Platform',
    icon: <DiGithubBadge className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Bitbucket',
    category: 'Platform',
    icon: <FaBitbucket className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Vercel',
    category: 'Platform',
    icon: <SiVercel className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Supabase',
    category: 'Platform',
    icon: <SiSupabase className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Hasura',
    category: 'Platform',
    icon: <SiHasura className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Expo Go',
    category: 'Platform',
    icon: <SiExpo className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Jira',
    category: 'Platform',
    icon: <SiJira className={SKILLS_ICON_CLASS} />,
  },
  {
    name: 'Photoshop',
    category: 'Dev Tool',
    icon: <SiAdobephotoshop className={SKILLS_ICON_CLASS} />,
  },
]

export const WORK_EXPERIENCE = [
  {
    company: 'Las Vegas REALTORS®',
    role: 'Web Developer',
    period: 'September 2020 to Current',
    website: 'https://www.lasvegasrealtor.com/',
    logo: 'https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/lvr_logo.png',
    highlights: [
      'Refined and enhanced the LVR member web portal to increase membership engagement and accessibility of association news',
      'Integrated several web APIs including the DocuSign API for membership applications and the SendGrid API for automated email notices',
      'Managed the digitization of the member check-in process for verifying registration and tracking attendance at events to better efficiency',
      'Built administration tools to aid staff in helping members with daily tasks',
      'Migrated components from the legacy member web portal stack to modern solutions such as Next.js and Sanity',
      'Provided support to the development of the member portal mobile app',
    ],
    tools:
      'PHP, SQL, Javascript, HTML, CSS, Next.js, React, Tailwind CSS, Supabase',
  },
  {
    company: 'FDM4 America, Inc.',
    role: 'Programmer Analyst',
    period: 'June 2015 to June 2020',
    website: 'https://www.fdm4.com/',
    logo: '/placeholder.svg?height=60&width=60',
    highlights: [
      'Strengthened the quality of the ERP, WMS, and E-Commerce software solutions through custom modifications and bug fixes',
      'Collaborated directly with clients on-site in assisting with questions and addressing issues to build rapport and confidence with the company',
      "Led a live product upgrade to upkeep the client's software version",
      'Counseled new hires on knowing company procedures, learning programming tools, and understanding the software',
      'Produced code reviews on the work of other team members and assumed team lead duties when needed',
    ],
    tools: 'Openedge ABL, JavaScript, HTML, CSS, Bootstrap',
  },
]

export const OTHER_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kendrickDLP',
    icon: <SiLinkedin className="fill-primary text-4xl" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kenforeverlost',
    icon: <FaGithub className="fill-primary text-4xl" />,
  },
  {
    name: 'Portfolio',
    url: 'https://foreverlostphoto.com/',
    icon: <BsCameraFill className="fill-primary text-4xl" />,
  },
]
