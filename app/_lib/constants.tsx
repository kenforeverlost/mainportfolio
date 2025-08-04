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
      'Refined and enhanced the LVR member web portal to increase membership engagement and accessibility of association news',
      'Integrated several web APIs including the DocuSign API for membership applications and the SendGrid API for automated email notices',
      'Managed the digitization of the member check-in process for verifying registration and tracking attendance at events to better efficiency',
      'Built administration tools to aid staff in helping members with daily tasks',
      'Migrated components from the legacy member web portal stack to modern solutions such as Next.js and Sanity',
      'Provided support to the development of the member portal mobile app',
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
      'Strengthened the quality of the ERP, WMS, and E-Commerce software solutions through custom modifications and bug fixes',
      'Collaborated directly with clients on-site in assisting with questions and addressing issues to build rapport and confidence with the company',
      "Led a live product upgrade to upkeep the client's software version",
      'Counseled new hires on knowing company procedures, learning programming tools, and understanding the software',
      'Produced code reviews on the work of other team members and assumed team lead duties when needed',
    ],
    tools: ['Openedge ABL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
  },
]

export const OTHER_LINKS = [
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
  {
    name: 'Projects',
    url: 'https://kdlp.dev/',
    icon: <FaProjectDiagram />,
  },
]
