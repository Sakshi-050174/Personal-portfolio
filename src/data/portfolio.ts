import {
  Layers3,
  Palette,
  Users,
  Sparkles,
} from "lucide-react";

export const highlights = [
  {
    title: "Scalable Architecture",
    description:
      "Designing maintainable, performant, and enterprise-ready frontend systems.",
    icon: Layers3,
  },
  {
    title: "Design Systems",
    description:
      "Building reusable, accessible, and consistent UI foundations.",
    icon: Palette,
  },
  {
    title: "Technical Leadership",
    description:
      "Mentoring engineers and driving collaboration and engineering excellence.",
    icon: Users,
  },
  {
    title: "AI-Powered Products",
    description:
      "Creating intelligent digital experiences using modern AI capabilities.",
    icon: Sparkles,
  },
]

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Angular", "TypeScript", "Next.js", "Stencil"],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress", "Playwright"],
  },
  {
    title: "Backend & Database",
    items: ["Supabase (PostgreSQL)"],
  },
  {
    title: "Architecture",
    items: ["Micro Frontends", "Design Systems", "Performance"],
  },
  {
    title: "AI & Tools",
    items: ["OpenAI", "Git", "CI/CD", "AWS"],
  },
];

export const experiences = [
  {
    company: 'Ultimate Kronos Group',
    role: 'Lead Software Engineer',
    period: 'Feb 2024 - Apr 2025',
    points: [
      'Led frontend architecture using Angular and StencilJS',
      'Built scalable micro-frontend architecture',
      'Mentored engineers and led Agile ceremonies',
    ],
  },
  {
    company: 'TAAZAA Tech Pvt. Ltd.',
    role: 'Senior Software Developer',
    period: 'Jul 2023 - Jan 2024',
    points: [
      'Developed TOBI NEMT application in Angular',
      'Implemented Cypress E2E testing',
      'Created reusable UI components',
    ],
  },
  {
    company: 'Sirion Labs Pvt. Ltd.',
    role: 'Senior Software Developer',
    period: 'Jan 2023 - Jun 2023',
    points: [
      'Worked on AngularJS and ReactJS applications',
      'Led sprint deliveries and code reviews',
    ],
  },
]

export const personalProjects = [
  {
    title: "Tic-Tac-AI",
    tech: ["React", "TypeScript", "SCSS"],
    status: "Completed",
    image: "/projects/tic-tac-ai.png",
    github: "tic-tac-ai",
    demo: "https://tic-tac-ai-three.vercel.app/",
    description:
      "Classic Tic-Tac-Toe game powered by the Minimax AI algorithm with multiple difficulty levels and a polished UI.",
  },
  {
    title: "ConverseX",
    tech: ["React", "TypeScript", "SCSS", "Vite", "Supabase"],
    status: "In Progress",
    image: "/projects/conversex.png",
    github: "conversex",
    demo: "https://conversex-dusky.vercel.app/",
    description:
      "AI-ready real-time chat application with authentication, responsive messaging UI, reusable components, and scalable architecture.",
  },
  {
    title: "TaskFlow",
    tech: ["React", "TypeScript", "SCSS", "Vite"],
    status: "In Progress",
    image: "/projects/taskflow.png",
    github: "taskflow",
    demo: "https://taskflow-seven-snowy.vercel.app",
    description:
      "Modern task and project management application featuring dashboards, Kanban boards, task tracking, and team collaboration.",
  },
  // {
  //   title: "Real Estate CRM",
  //   tech: [
  //     "React",
  //     "TypeScript",
  //     "SCSS",
  //     "Vite"
  //   ],
  //   status: "In Progress",
  //   image: "/projects/real-estate-crm.png",
  //   github: "real-estate-crm",
  //   demo: "https://real-estate-crm.vercel.app",
  //   description:
  //     "Modern real estate lead management platform designed for brokers and sales teams. Features lead tracking, pipeline management, customer insights, responsive dashboards, and an intuitive user experience.",
  // },
  {
    title: "Aurelia Platform",
    tech: [
      "Angular 21",
      "TypeScript",
      "SCSS",
      "Angular Signals",
      "ECharts",
    ],
    status: "In Progress",
    image: "/projects/aurelia-platform.png",
    github: "aurelia-platform",
    demo: "",
    description:
      "Enterprise operations platform built with Angular 21 showcasing scalable architecture, reusable UI components, dashboards, advanced data tables, and modern frontend engineering practices.",
  },
  


];

export const professionalProjects = [
  {
    company: "Ultimate Kronos Group",
    title: "Workforce Management Notification System",
    tech: ["StencilJS", "Angular", "Micro Frontends"],
    description:
      "Developed enterprise notification features using a scalable micro-frontend architecture and reusable design system components.",
  },
  {
    company: "TAAZAA Tech Pvt. Ltd.",
    title: "TOBI NEMT Platform",
    tech: ["Angular", "Cypress", "SCSS"],
    description:
      "Built healthcare transportation workflows, reusable UI components, and end-to-end test automation.",
  },
  {
    company: "Sirion Labs Pvt. Ltd.",
    title: "Contract Management Dashboard",
    tech: ["React", "SCSS", "FusionCharts", "jQuery"],
    description:
      "Developed analytics dashboards with interactive visualizations for enterprise contract lifecycle management.",
  },
  {
    company: "Sirion Labs Pvt. Ltd.",
    title: "Contract Management Admin",
    tech: ["Angular", "Angular Material", "FusionCharts", "GoJS"],
    description:
      "Built administrative modules for contract management with workflow automation and enterprise analytics.",
  },
];
