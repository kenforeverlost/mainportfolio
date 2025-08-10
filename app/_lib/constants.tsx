import {
  DiBootstrap,
  DiGithubBadge,
  DiJavascript1,
  DiJqueryLogo,
  DiMysql,
} from 'react-icons/di'
import {
  FaBriefcase,
  FaGithub,
  FaHtml5,
  FaInfo,
  FaPhone,
  FaProjectDiagram,
  FaReact,
  FaToolbox,
} from 'react-icons/fa'
import { FaCode, FaComputer } from 'react-icons/fa6'
import {
  GiGraduateCap,
  GiHearts,
  GiMusicalNotes,
  GiStarsStack,
  GiTiedScroll,
} from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import {
  SiCplusplus,
  SiCss3,
  SiGraphql,
  SiHasura,
  SiLinkedin,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiProgress,
  SiSanity,
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

export const IMAGES = {
  placeholder: 'placeholder.svg',
  profile: '/profile/profile-picture.png',
  fdm4: '/company/fdm4.png',
  lvr: '/company/lvr.png',
}

export const HIGHLIGHTS = [
  {
    label: '+10 Years Experience',
    icon: <FaComputer />,
  },
  {
    label: 'Full Stack Proficiency',
    icon: <FaCode />,
  },
]

export const FACTS = [
  {
    label: 'College',
    description: 'University of Nevada, Las Vegas',
    icon: <GiGraduateCap />,
  },
  {
    label: 'Degree',
    description: 'B.S. in Computer Engineering',
    icon: <GiTiedScroll />,
  },
  {
    label: 'Minor',
    description: 'Computer Science and Tech Commercialization',
    icon: <GiStarsStack />,
  },
  {
    label: 'Favorite Language',
    description: 'JavaScript',
    icon: <GiHearts />,
  },
  {
    label: 'Music',
    description: 'EDM, Rock, and R&B',
    icon: <GiMusicalNotes />,
  },
]

export const SKILLS = [
  {
    name: 'JavaScript',
    category: 'Language',
    icon: <DiJavascript1 />,
    company: ['lvr', 'fdm4'],
  },
  {
    name: 'CSS',
    category: 'Language',
    icon: <SiCss3 />,
    company: ['lvr', 'fdm4'],
  },
  {
    name: 'HTML',
    category: 'Language',
    icon: <FaHtml5 />,
    company: ['lvr', 'fdm4'],
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: <SiTypescript />,
    company: ['lvr'],
  },
  {
    name: 'PHP',
    category: 'Language',
    icon: <SiPhp />,
    company: ['lvr'],
  },
  {
    name: 'SQL',
    category: 'Language',
    icon: <DiMysql />,
    company: ['lvr'],
  },
  {
    name: 'GraphQL',
    category: 'Language',
    icon: <SiGraphql />,
    company: ['lvr'],
  },
  {
    name: 'Openedge ABL',
    category: 'Language',
    icon: <SiProgress />,
    company: ['fdm4'],
  },
  {
    name: 'C++',
    category: 'Language',
    icon: <SiCplusplus />,
  },
  {
    name: 'jQuery',
    category: 'Library',
    icon: <DiJqueryLogo />,
    company: ['fdm4'],
  },
  {
    name: 'React',
    category: 'Library',
    icon: <FaReact />,
    company: ['lvr'],
  },
  {
    name: 'Material UI',
    category: 'Library',
    icon: <SiMui />,
    company: ['lvr'],
  },
  {
    name: 'Next.js',
    category: 'Framework',
    icon: <SiNextdotjs />,
    company: ['lvr'],
  },
  {
    name: 'React Native',
    category: 'Framework',
    icon: <FaReact />,
    company: ['lvr'],
  },
  {
    name: 'Bootstrap',
    category: 'Framework',
    icon: <DiBootstrap />,
    company: ['fdm4'],
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    icon: <SiTailwindcss />,
    company: ['lvr'],
  },
  {
    name: 'Node.js',
    category: 'Platform',
    icon: <SiNodedotjs />,
    company: ['lvr'],
  },
  {
    name: 'GitHub',
    category: 'Platform',
    icon: <DiGithubBadge />,
  },
  {
    name: 'Vercel',
    category: 'Platform',
    icon: <SiVercel />,
  },
  {
    name: 'Supabase',
    category: 'Platform',
    icon: <SiSupabase />,
    company: ['lvr'],
  },
  {
    name: 'Hasura',
    category: 'Platform',
    icon: <SiHasura />,
    company: ['lvr'],
  },
  {
    name: 'PostgreSQL',
    category: 'Platform',
    icon: <SiPostgresql />,
    company: ['lvr'],
  },
  {
    name: 'Sanity',
    category: 'Platform',
    icon: <SiSanity />,
    company: ['lvr'],
  },
]

export const WORK_EXPERIENCE = [
  {
    company: 'Las Vegas REALTORS®',
    position: 'Web Developer',
    start: 'September 2020',
    end: 'Current',
    logo: {
      src: IMAGES.lvr,
      alt: 'LVR',
      width: 550,
      height: 274,
    },
    website: 'https://www.lasvegasrealtor.com/',
    highlights: [
      'Built and deployed a forms platform that reduced manual paperwork and processed over 300 digital submissions in the first month',
      'Enhanced the member web portal UI/UX, increasing engagement and improving access to association resources.',
      'Developed internal admin tools that streamlined workflows for multiple member-facing departments.',
      'Integrated APIs, including DocuSign for digital applications and SendGrid for automated email notifications.',
      'Digitized the member event check-in process, improving operational efficiency and data tracking.',
      'Modernized legacy web portal components using Next.js and Supabase, improving performance and maintainability.',
      'Contributed to development efforts for the member mobile app, ensuring consistency across platforms.',
    ],
    tools: [
      'PHP',
      'Javascript',
      'HTML',
      'CSS',
      'SQL',
      'Next.js',
      'React',
      'Node.js',
      'Supabase',
    ],
  },
  {
    company: 'FDM4 America, Inc.',
    position: 'Programmer Analyst',
    start: 'June 2015',
    end: 'June 2020',
    logo: {
      src: IMAGES.fdm4,
      alt: 'FDM4',
      width: 550,
      height: 133,
    },
    website: 'https://www.fdm4.com/',
    highlights: [
      'Improved ERP, WMS, and E-Commerce software through custom feature development and critical bug fixes.',
      'Delivered on-site support to clients, resolving issues and building long-term confidence in the product.',
      'Led live software version upgrades, minimizing downtime and ensuring smooth transitions.',
      'Mentored junior developers on company procedures and the OpenEdge ABL programming stack, accelerating their onboarding.',
      'Conducted code reviews and assumed lead developer responsibilities when needed.',
    ],
    tools: ['Openedge ABL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
  },
]

export const OTHER_LINKS = [
  {
    name: 'kendrickdelapena@gmail.com',
    url: 'mailto:kendrickdelapena@gmail.com',
    icon: <HiOutlineMail />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kendrickDLP',
    icon: <SiLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kenforeverlost',
    icon: <FaGithub />,
  },
]
