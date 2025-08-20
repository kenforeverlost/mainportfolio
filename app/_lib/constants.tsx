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
  FaInfoCircle,
  FaEnvelope,
  FaReact,
  FaTools,
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
  SiPostgresql,
  SiProgress,
  SiSanity,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export const SCROLL_MENU = [
  {
    label: 'About',
    section: 'about',
    icon: <FaInfoCircle />,
  },
  {
    label: 'Skills',
    section: 'skills',
    icon: <FaTools />,
  },
  {
    label: 'Experience',
    section: 'experience',
    icon: <FaBriefcase />,
  },
  {
    label: 'Contact',
    section: 'contact',
    icon: <FaEnvelope />,
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
      'Co-developed a forms system that reduced manual paperwork and processed over 300 digital submissions in the first month.',
      'Enhanced the member web portal UI/UX, improving access to resources and engagement by 20-30%.',
      'Developed internal admin tools that streamlined workflows across 4 departments.',
      'Integrated APIs, including DocuSign for digital applications and SendGrid for automated email notifications.',
      'Digitized the member event check-in process, optimizing operational efficiency and data tracking.',
      'Modernized legacy web portal components using Next.js and Supabase for better maintainability and performance.',
      'Collaborated on the development of the member mobile app, ensuring consistency across platforms.',
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
      'Mentored junior developers on OpenEdge ABL programming stack, accelerating their onboarding and growth.',
      'Conducted code reviews and assumed lead developer responsibilities as needed.',
    ],
    tools: ['Openedge ABL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
  },
]

export const OTHER_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/kenforeverlost',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kendrickDLP',
    icon: <SiLinkedin />,
  },
]

export const PROJECTS = [
  {
    title: 'Application Digitization',
    subtitle: 'Web-based application process with DocuSign integration',
    timeframe: 'Completed in 2021, expanded through 2023',
    category: 'Work',
    description:
      'Replaced the paper-based membership application process with a streamlined web-based workflow. The system auto-fills member data from an external database and routes forms through DocuSign for securing signing. The same approach was later adapted other processes such as Board of Directors applications and Professional Standards case submissions.',
    highlights: [
      'Integrated DocuSign API for digital signing and status updates',
      'Implemented a webhook for tracking and secure document storage',
      'Built admin tools for monitoring and managing applications',
    ],
    impact:
      'Significantly reduced application turnaround times, minimized clerical errors, and improved transparency for both staff and applicants',
    tools: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    image: ['/project/application1.png'],
  },
  {
    title: 'Forms System',
    subtitle: 'Hub for digitally signing and submitting association forms',
    timeframe: 'Started in 2024, launched in 2025',
    category: 'Work',
    description:
      'Co-developed a digital forms system that allowed for submitting association documents online. The system included a visual template builder that lets staff map inputs onto PDFs, reducing setup time for future forms. It mimics the signing flow of DocuSign and is optimized for mobile users.',
    highlights: [
      'Collaborated on the design of the architecture and workflow',
      'Built a drag-and-drop PDF template mapper for dynamic form creation',
      'Integrated AI validation to confirm the authenticity of required documents',
    ],
    impact:
      'Increased accessibility and processing efficiency, with over 300 submissions in the first month',
    tools: ['Next.js', 'TypeScript', 'React', 'Supabase', 'Material UI'],
    image: ['/project/forms1.png'],
  },
  {
    title: 'Member Check-In System',
    subtitle:
      'Custom-built event attendance system for weekly classes and meetings',
    timeframe: 'Completed in 2021, migrated tech stack in 2022',
    category: 'Work',
    description:
      'Designed and developed a digital check-in system for attendance tracking at association events. The system replaced the manual sign-in process with badge-scanning linked to a registration database. It was originally created in PHP and later migrated to Next.js and Supabase for better improved maintainability and user experience.',
    highlights: [
      'Built an end-to-end system in both PHP and MySQL and later Next.js and Supabase',
      'Implemented registration validation, real-time updates, and admin tools',
      'Designed a user interface for staff to manage check-ins and generate attendance reports',
    ],
    impact:
      'Streamlined event operations, reduced human error, and attracted interest from other associations exploring similar modernization',
    tools: [
      'PHP',
      'MySQL',
      'SQL Server',
      'JavaScript',
      'Next.js',
      'TypeScript',
      'React',
      'Supabase',
      'Tailwind CSS',
    ],
    image: ['/project/checkIn1.png'],
  },
  {
    title: 'Photography Portfolio',
    subtitle: 'PHP web gallery showcasing portrait photography',
    timeframe: 'Started in 2019, launched in 2020',
    category: 'Hobby',
    description:
      'Created a simple portfolio site to showcase my portrait photography, linking my creative hobby to my development experience. Hosted on traditional cPanel, the site reflects legacy development methods and deepened my understanding of raw PHP',
    highlights: [
      'Designed a clean and responsive portrait photography gallery',
      'Built a PHP-powered contact form for direct email inquiries',
    ],
    url: 'https://www.foreverlostphoto.com',
    tools: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    image: ['/project/photography1.png'],
  },
  {
    title: 'Wedding Website',
    subtitle: 'Personalized site with a modern UI and RSVP functionality',
    timeframe: 'Completed in 2024, updated through 2025',
    category: 'Hobby',
    description:
      'Developed a custom wedding website in place of platforms like WithJoy or Zola. The site included RSVP functionality, real-time countdown, and event information pages — designed to be elegant and easy for all users.',
    highlights: [
      'Built a digital RSVP form with edit capabilities and guest-specific information',
      'Implemented eye-catching features including a live countdown timer and visual story timeline',
      'Delivered a modern, intuitive UI accessible to all tech levels in mind',
    ],
    url: 'https://www.forevercharred.com',
    tools: ['Next.js', 'TypeScript', 'React', 'Supabase', 'Tailwind CSS'],
    image: ['/project/wedding1.JPG'],
  },
]
