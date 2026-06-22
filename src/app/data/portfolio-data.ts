// Edit this file to update your portfolio content.
// Everything on the page is driven from here — no need to touch component files
// for routine content changes.

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  fileName: string;
  label: string;
  items: string[];
}

export interface ProjectHighlight {
  text: string;
}

export interface Project {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export const PROFILE = {
  name: 'Karthick T',
  title: 'Angular Developer',
  tagline: 'I build Angular applications that hold up in production — not just in a demo.',
  email: 'karthickt0201@gmail.com',
  phone: '+91 82201 27752',
  linkedin: 'linkedin.com/in/karthick-t-085563236',
  linkedinUrl: 'https://www.linkedin.com/in/karthick-t-085563236',
  location: 'Bangalore, India',
  about:
    "I'm a frontend developer who likes shipping things that hold up outside a demo — slow connections, older devices, and real users who don't read instructions. Most of the last three years went into one product: an insurance eligibility platform now live across hospitals and insurers, refined through direct on-site work with the people actually using it every day.",
};

export const STATS: Stat[] = [
  { value: '3+', label: 'Years experience' },
  { value: '8+', label: 'Modules shipped' },
  { value: '3,000+', label: 'Users served' },
  { value: '50+', label: 'Team size' },
];

export const SKILLS: SkillGroup[] = [
  {
    fileName: 'frontend.ts',
    label: 'Frontend',
    items: [
      'Angular 14–18',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Angular Material',
      'Reactive Forms',
      'Angular CLI',
      'SCSS',
      'Bootstrap',
    ],
  },
  {
    fileName: 'core.ts',
    label: 'Core',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Java (basics)', 'MySQL'],
  },
  {
    fileName: 'tools.ts',
    label: 'Tools',
    items: ['Git', 'Bitbucket', 'VS Code', 'IntelliJ IDEA', 'DBeaver', 'Figma'],
  },
  {
    fileName: 'practice.ts',
    label: 'Practice',
    items: [
      'Agile methodology',
      'REST API integration',
      'Performance optimization',
      'Cross-team collaboration',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Qatar Health Insurance System (QHIS)',
    period: 'May 2023 – Present',
    summary:
      'A real-time eligibility platform: when a patient is admitted, hospital staff verify insurance coverage instantly instead of waiting on manual checks. Requests route automatically to the insurer, which responds with policy status and coverage limits.',
    highlights: [
      'Shipped 8+ Angular modules end-to-end, including eligibility checks, policy creation, and claims workflows',
      'In production for 3,000+ users across hospital and insurer portals',
      'Built within a 50-member cross-functional Agile team alongside backend, QA, and business analysts',
      'Spent 3 months on-site working directly with hospital admins and insurers to gather requirements and fix production issues in real time',
      'Designed reusable components — dynamic forms, data grids, policy status cards — cutting development time by ~30%',
    ],
    tech: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'REST API'],
  },
  {
    name: 'QCHIS — Quadracyte Health Insurance Project',
    period: '2023',
    summary:
      'Patient registration, insurance claims, and medical test management modules, with a focus on smooth, consistent UX across browsers and devices.',
    highlights: [
      'Built static and dynamic modules for registration, claims, and test management',
      'Reduced load times by 20% through lazy loading and optimized data handling',
      'Tuned animations and transitions for consistent cross-browser behavior',
    ],
    tech: ['Angular', 'SCSS', 'Responsive Design'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'IHX Cloud Private Limited',
    location: 'Kundhalahalli, Bangalore',
    period: 'May 2023 – Present',
    points: [
      'Own frontend delivery for two production healthcare-insurance platforms, from component design through deployment',
      'Worked on-site in the GCC region for 3 months — direct client collaboration, live issue resolution',
      'Mentor-free first Angular role: picked up component architecture, state handling, and API integration on the job',
    ],
  },
];

export const EDUCATION = {
  degree: 'B.Sc. Computer Science',
  school: 'Manonmaniam Sundaranar University, Nazareth Margoschis College',
  period: '2019 – 2022',
  detail: 'CGPA 90%',
};

export const CERTIFICATION = {
  name: 'Full Stack Web Development',
  issuer: 'Acme InfoTech',
  period: 'Nov 2019 – Apr 2020',
  detail: 'Angular, JavaScript, Node.js, and databases through hands-on projects',
};
