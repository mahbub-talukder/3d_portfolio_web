import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "DevOps Expert CI/CD",
    icon: mobile,
  },
  {
    title: "MEAN Stack",
    icon: backend,
  },
  {
    title: "Networking Professional",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer (DevOps)",
    company_name: "Stardust Telecom Ltd (Confidence Group of Company) ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2021 to Present (3 years)",
    points: [
      "Developed core ISP Business Management Software (MIME Connect) using Django, VueJS, and Odoo, incorporating ISP, IPTV, IPTSP, Kothon (VoIP Talking App), and Towkai (Video Streaming App) functionalities.",
      "Developed  CRM system for Inventory, Sales, and Procurement Management with Odoo.",
      "Designed and optimized RESTful APIs in Django for seamless data exchange.",
      "Designed and implemented RADIUS for Retail ISP operations.",
      "Worked with MikroTik, Juniper for ISP retail and reseller business automation.",
      "Utilized skills in Powershell and LDAP   to  develop the Email Escalation Software  for real-time email tracking and management alerts.",
      "Developed Windows Pop UP Notification Software that show popup to employee Desktop Screen at the scheduled time, and many more.",
      "Collaborated with Business Analysts and stakeholders to gather requirements, provide technical insights, presented technical proposals to non-technical stakeholders in a clear and understandable manner, and ensure alignment between software and business objectives.",
      "Resolving  complex tech problem  &  enforced coding standards, and significantly reducing code defects and improving code maintainability.",
      "Engaged in Agile development methodologies, participating in sprint planning, daily stand-up meetings, and  lead collaborative development",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Green Delta Insurance Company Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " Sep 2020 to July 2021 (1 years)",
    points: [
      "Utilized expertise in Angular, JavaScript, and NodeJS to write code for the projects. ensuring robust development.",
      "Revamped and enhanced existing Core Insurance Software with the goal of improving functionality, usability flexibility, and modern UI visuals.",
      "Illustrated complete prototype design of the Core Insurance Software using Figma.",
      "Illustrated complete prototype design of the Core Insurance Software using Figma.",
      "Conducted existing code reviews, performed testing, effectively debugged issues, and promptly corrected and gave support to any identified problems.",
      "Collaborated closely with in-house web developers to craft sleek and innovative UI designs and establish effective data logic.",
      "Collaborated with cross-functional teams to translate business requirements into timely technical solutions.",
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "IntoiiT Bangladesh Ltd.",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2019 to Sep 2020 (1 years)",
    points: [
      "Managing all aspects of projects, initial requirement gathering from clients, planning, developing, and testing. and guided team members accordingly.",
      "GDAMS Software: Designed and developed the GDAMS (Approval Management System) using Angular and JavaScript.",
      "Hostel Management System Software: Created the Student Hostel Management System with Angular and JavaScript.",
      "Third-Party Integration: Seamlessly integrated external tools/API into web development projects.like bKash payment API, SSLCOMMERZ payment gateway etc",
      "RESTful APIs : Built robust RESTful APIs with Laravel.",
      "Data Entry Supervision: Guided and supervised data entry teams to ensure accurate and efficient data input.",
      "Software Architecture Design: Designed software architecture, SRS, ERD, Mock design, and prepared related documents.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
