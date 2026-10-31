export const profile = {
  name: "Md Khademul Islam",
  role: "Front-End Developer",
  experience: "4+ years",
  tagline:
    "4+ years of experience building modern web applications with React, Next.js and TypeScript.",
  availability: "Available for Collaboration",
  email: "rkhademul19@gmail.com",
  github: "https://github.com/rkhademul8",
  linkedin: "https://linkedin.com/in/rkhademul",
};

export const about =
  "Front-End Engineer with 4+ years of experience building responsive web applications using React.js, Next.js, TypeScript, and modern UI libraries. Experienced in developing travel booking and e-commerce platforms, integrating REST APIs, and building reusable, high-performance interfaces.";

/** Small highlight cards next to the About text. Edit or remove freely. */
export const highlights = [
  { icon: "calendar", value: "4+", label: "Years Experience" },
  { icon: "code", value: "20+", label: "Projects / Features" },
  { icon: "react", value: "React &", label: "Next.js" },
  { icon: "zap", value: "API", label: "Integration" },
] as const;

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "React Query",
  "Context API",
  "REST APIs",
  "Fetch",
  "Axios",
  "Git",
  "Bitbucket",
  "Jest",
  "React Testing Library",
  "Python",
  "Django",
  "Node.js",
  "MySQL",
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Front-End Developer",
    company: "Tour Mart Limited",
    location: "Dhaka, Bangladesh",
    period: "August 2024 – Present",
    points: [
      "Travel booking platforms, flight search and booking, travel API integration",
      "Reservation management and agent portal development",
      "1688 product API integration, e-commerce product search and listing",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Fly Far International",
    location: "Dhaka, Bangladesh",
    period: "May 2022 – August 2024",
    points: [
      "Tour management systems, flight, hotel and tour booking, customer management",
      "Responsive B2C interfaces using React.js, Next.js and TypeScript",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Kodeeo Limited",
    location: "Dhaka, Bangladesh",
    period: "February 2021 – May 2021",
    points: [
      "Hotel reservation system, booking and billing, customer management",
      "Dashboard and database work using Django, Python and MySQL",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution:
    "International University of Business Agriculture and Technology (IUBAT)",
  cgpa: "3.30 / 4.00",
  period: "2017 – 2021",
};

export const projects = [
  {
    name: "Hajee Air Agent Portal",
    description: "Flight booking and agent management platform.",
    url: "https://agent.hajeeair.com",
    icon: "plane",
  },
  {
    name: "DeshMart",
    description:
      "E-commerce platform with product API integration and product synchronization.",
    url: "https://deshmart.com",
    icon: "cart",
  },
  {
    name: "QodeMart",
    description: "Web platform for an IT services company.",
    url: "https://qodemart.com",
    icon: "laptop",
  },
  {
    name: "Tour Mart Agent Portal",
    description: "Travel booking and management platform.",
    url: "https://agent.tourmart.net",
    icon: "briefcase",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
