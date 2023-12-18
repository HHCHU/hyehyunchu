import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"

import GithubIcon from "../components/Icon/GithubIcon"
import InstagramIcon from "../components/Icon/InstagramIcon"
import LinkedInIcon from "../components/Icon/LinkedInIcon"
import heroImage from "../images/header-background.webp"
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg"
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg"
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg"
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg"
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg"
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg"
// import porfolioImage7 from "../images/portfolio/portfolio-7.jpg"
// import porfolioImage8 from "../images/portfolio/portfolio-8.jpg"
// import porfolioImage9 from "../images/portfolio/portfolio-9.jpg"
// import porfolioImage10 from "../images/portfolio/portfolio-10.jpg"
// import porfolioImage11 from "../images/portfolio/portfolio-11.jpg"
import profilepic from "../images/profilepic.png"
import testimonialImage from "../images/testimonial.webp"
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef"

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hyehyun Chu Protfolio Site",
  description: "Hyehyun Chu's Protfolio Site made in December 2023",
}

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const

export type SectionId = (typeof SectionId)[keyof typeof SectionId]

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Hyehyun Chu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Seoul National University College of Liberal Studies Student{" "}
        <strong className="text-stone-100">aiming HCI Researcher</strong>,
        currently majoring in{" "}
        <strong className="text-stone-100">
          Computer Science, Information Science and Culture
        </strong>
        ,
      </p>
    </>
  ),
  actions: [
    {
      href: "/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
}

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I enjoy the collaborative process with people and believe that we can create better outcomes through working together.
  While working as a startup PM, I successfully planned app services and features, and further experienced operations and marketing.
  During my internship as a front-end developer at Samsung Electronics, I experienced the agile development process.
  Apart from that, I have experience in planning, designing, and front-end development in various projects.`,
  aboutItems: [
    { label: "Location", text: "Seoul, South Korea", Icon: MapIcon },
    { label: "Age", text: "24", Icon: CalendarIcon },
    { label: "Nationality", text: "Korean", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Band Music, Digital Drawing, HCI Research, Web Development",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Seoul National University",
      Icon: AcademicCapIcon,
    },
    // {
    //   label: "Employment",
    //   text: "Instant Domains, inc.",
    //   Icon: BuildingOffice2Icon,
    // },
  ],
}

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "Korean",
        level: 10,
      },
      {
        name: "English",
        level: 8,
      },
      {
        name: "Japanese",
        level: 4,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 8,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "Next.js",
        level: 6,
      },
    ],
  },
  {
    name: "Programming languages",
    skills: [
      {
        name: "Python",
        level: 8,
      },
      {
        name: "Java",
        level: 7,
      },
      {
        name: "javascript",
        level: 6,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "Android Studio",
        level: 5,
      },
      {
        name: "Kotlin",
        level: 4,
      },
    ],
  },
]

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "NooN for Fashion",
    description:
      "Won the silver medal at a hackathon organized by KAIST SPARCS\nParticipated in planning, design, and development",
    url: "https://www.instagram.com/p/Co3sORnP_Nj/?igshid=ZWQ3ODFjY2VlOQ%3D%3D5&img_index=5",
    image: porfolioImage1,
  },
  {
    title: "Pick Up Bob",
    description:
      "Won the second place at a JUNCTION ASIS hackathon CNT track\nParticipated in planning, design, and development",
    url: "https://youtu.be/f-WwRaa4TQA?t=35584",
    image: porfolioImage2,
  },
  {
    title: "Analyzing Speaker Personas in K-Pop Love Songs: Leveraging GPT",
    description:
      "Presented through the Visualization course in Information Science and Culture at Seoul National University, Spring 2023.\nParticipated in project planning and development.",
    url: "https://hhchu.github.io/Visualization/",
    image: porfolioImage3,
  },
  {
    title:
      "EmoBridge: Design of a Collaborative Note-taking System to Improve Communication between Students with Disabilities and Peer Notetaker",
    description:
      "Presented through the Introduction to HCI course in Information Science and Culture at Seoul National University. Further developed and wrote a thesis, which was accepted by HCIK. Continuing to work towards CHI LBW and ASSETS.\nParticipated in project planning, user research, design, development, and thesis writing.",
    url: "https://emobridge.vercel.app/",
    image: porfolioImage4,
  },
  {
    title: "Aat JongGang",
    description:
      "Presented through the Introduction to Information-Culture Technology course in Information Science and Culture at Seoul National University, Fall 2022.\nParticipated in game planning, design, development.",
    url: "https://hhchu.github.io/AatJongGang/",
    image: porfolioImage5,
  },
  {
    title: "Information Science and Culture Archiving Site",
    description:
      "Team Lead for the development of Information Science and Culture assignment archiving site, Spring 2023",
    url: "https://www.ischive.com/",
    image: porfolioImage6,
  },
]

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "March 2019 - August 2024",
    location: "Seoul National University",
    title: "Barchelor's degree in College of Liberal Studies",
    content: (
      <p>
        Studied 'Computer Science Engineering' and 'Information Science and
        Culture' in Seoul National University
        <br />
        2020-1, 2020-2 - SNU College of Liberal Studies Student Council
        <br />
        2023-1 - Vice-Representative of Information Science and Culture, Seoul
        National University
        <br />
        2023-2 - Representative of Information Science and Culture, Seoul
        National University
      </p>
    ),
  },
  {
    date: "January 2022 - May 2022",
    location: "Nanyang Technological University Singapore",
    title: "Exchange Student in Computer Science",
    content: (
      <p>
        Went to Nanyang Technological University as an exchange student in
        Computer Science
        <br />
        Studied 'Artificial Intelligence', 'Introduction to Databases', 'Linear
        Algebra for Computing', and 'Programming for Interaction'
      </p>
    ),
  },
  // {
  //   date: "March 2018 - Feburary 2019",
  //   location: "Korea University",
  //   title: "Barchelor's degree in Architecture",
  //   content: (
  //     <p>
  //       Enrolled in Korea University's architecture program to study architectural design and construction
  //       2018-2 - Member of KROO, Korea University Design Society
  //     </p>
  //   ),
  // },
]

export const experience: TimelineItem[] = [
  {
    date: "July 2023 - August 2023",
    location: "Samsung Electronics, Suwon",
    title: "Frontend Developer ",
    content: (
      <p>
        Developed a internal service that increased productivity of company
        employees
        <br />
        Planned new UX/UI based on the incoming POV and collaborated with
        backend developers to design an efficient API communication structure.
        <br />
        Participated in In-house service planning, FE development (React, JS)
      </p>
    ),
  },
  {
    date: "June 2021 - December 2021",
    location: "AIMED, Seoul",
    title: "Project Manager",
    content: (
      <p>
        Collaborated with the development team to ensure tasks were completed on
        time and met quality standards
        <br />
        Analyzed project data and created reports to present to senior
        management, resulting in improved decision-making
        <br />
        Participated in Service Planning, UX Research, QA, Marketing
      </p>
    ),
  },
]

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Samsung Electronics Mentor - Kumar",
      text: "I had a great time as Hyehyun's mentor and I feel grateful to get a chance to interact with one of the brightest futures of Korea. I wish Hyehyun to loads of luck for her future and hope to see her at Samsung in the days to come",
    },
    {
      name: "Aimed Manager - Shin",
      text: "Hyehyun Chu's major is computer science, so she showed good achievements in communication with developers and feature planning. In feature planning, she had a good understanding of how to write a plan so that developers could understand it well, and in communication with developers, she showed high communication skills based on her basic understanding of development.",
    },
  ],
}

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch with me.",
  description:
    "For collaboration and suggestions, please send me a LinkedIn message or mail.",
  items: [
    {
      type: ContactType.Email,
      text: "ded06031@snu.ac.kr",
      href: "mailto:ded06031@snu.ac.kr",
    },
    {
      type: ContactType.Location,
      text: "Seoul, South Korea",
      href: "https://www.google.ca/maps/place/%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90+%EA%B4%80%EC%95%85%EC%BA%A0%ED%8D%BC%EC%8A%A4/data=!3m1!4b1!4m6!3m5!1s0x357c9fe8a0a1e2a5:0xa1e2eebc04f0c5e7!8m2!3d37.4593505!4d126.9511364!16zL20vMDFidnc1?entry=ttu",
    },
    {
      type: ContactType.Instagram,
      text: "@vermillion_sol",
      href: "https://www.instagram.com/vermillion_sol/",
    },
    {
      type: ContactType.Github,
      text: "HHCHU",
      href: "https://github.com/HHCHU",
    },
  ],
}

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/HHCHU" },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/hyehyunchu/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/vermilion_sol/",
  },
]
