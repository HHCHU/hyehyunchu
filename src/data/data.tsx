import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
// import porfolioImage9 from "../images/portfolio/portfolio-9.jpg"
// import porfolioImage10 from "../images/portfolio/portfolio-10.jpg"
// import porfolioImage11 from "../images/portfolio/portfolio-11.jpg"
import profilepic from "../images/profilepic.png";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  NewsItem,
  PortfolioItem,
  Publication,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hyehyun Chu - HCI Researcher",
  description:
    "Hyehyun Chu is a Master's student in Human-Computer Interaction at KAIST KIXLAB, researching accessibility, human-AI interaction, and computer-supported collaborative learning.",
};

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
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Hyehyun Chu`,
  description: (
    <>
      <p className="prose-sm text-black sm:prose-base lg:prose-lg">
        I'm a second-year Master's student in the{" "}
        <a
          href="https://cs.kaist.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          School of Computing
        </a>{" "}
        at{" "}
        <a
          href="https://www.kaist.ac.kr/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          KAIST
        </a>
        <br />I work together with Professor{" "}
        <a
          href="https://juhokim.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Juho Kim
        </a>{" "}
        at{" "}
        <a
          href="https://www.kixlab.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          KIXLAB
        </a>
        .
        <br />
        I am fundamentally interested in helping people become proficient with
        technology.
        <br />
        To achieve this, I believe that accessibility and learning in technology
        are crucial.
        <br />
        Therefore, I aim to research in the fields of{" "}
        <strong className="text-black">
          Accessibility, Human-AI interaction,
        </strong>{" "}
        and{" "}
        <strong className="text-black">
          Computer-Supported Collaborative Learning
        </strong>
        .
      </p>
    </>
  ),
  actions: [
    {
      href: "/CV_2025_06.pdf",
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
};

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
    { label: "Location", text: "Daejeon, South Korea", Icon: MapIcon },
    { label: "Nationality", text: "Korean", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Band Music, Digital Drawing, HCI Research, Web Development",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "KAIST, Seoul National University",
      Icon: AcademicCapIcon,
    },
    // {
    //   label: "Employment",
    //   text: "Instant Domains, inc.",
    //   Icon: BuildingOffice2Icon,
    // },
  ],
};

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
];

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
    title: "Analyzing Speaker Personas in K-Pop Love Songs: Leveraging GPT",
    description:
      "Presented through the Visualization course in Information Science and Culture at Seoul National University, Spring 2023.\nParticipated in project planning and development.",
    url: "https://hhchu.github.io/Visualization/",
    image: porfolioImage3,
  },
  {
    title: "Pick Up Bob",
    description:
      "Won the second place at a JUNCTION ASIA hackathon CNT track\nParticipated in planning, design, and development",
    url: "https://youtu.be/f-WwRaa4TQA?t=35584",
    image: porfolioImage2,
  },
  {
    title:
      "EmoBridge: Design of a Collaborative Note-taking System to Improve Communication between Students with Disabilities and Peer Notetaker",
    description:
      "✨ Won Best Paper Award at HCIK ✨\nPresented through the Introduction to HCI course in Information Science and Culture at Seoul National University. Further developed and wrote a thesis, which was accepted by HCIK. Continuing to work towards ASSETS.\nParticipated in project planning, user research, design, development, and thesis writing.",
    // url: "https://emobridge-ver1.vercel.app/feedbacker",
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11714774",
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
  {
    title:
      "Calendy: Time Management Application powered by Caledar and AI Manager",
    description:
      "Presented through the Principles and Practices of Software course Development in Computer Science and Engineering at Seoul National University, Fall 2023\nSelected as Hall of Fame Project\nParticipated in frontend design, development, LLM fintuning, and user study.",
    url: "https://hcs.snu.ac.kr/courses/Software-Development",
    image: porfolioImage7,
  },
  {
    title: "Turtle's Snack Time",
    description:
      "Presented through the Serious Games course in Information Science and Culture at Seoul National University, Fall 2023\nParticipated in design.",
    url: "https://joonpart.itch.io/turtles-snacktime",
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "September 2024 - Present",
    location: "KAIST",
    title: "Master's candidate in School of Computing",
    content: (
      <p>
        Studying Human-Computer Interaction at KIXLAB
        <br />I research in the fields of Accessibility, Human-AI interaction,
        and automated UX/UI design
      </p>
    ),
  },
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
];

export const experience: TimelineItem[] = [
  {
    date: "July 2024 - August 2024",
    location: "KAIST, Daejeon",
    title: "KIXLab Undergraduate Intern",
    content: (
      <p>
        Worked as an undergraduate intern at the KIXLAB.
        <br />
        Participated in the development and design of a project for automative
        UI generation based on user's LLM usage.
      </p>
    ),
  },
  {
    date: "February 2024 - June 2024",
    location: "Seoul National University, Seoul",
    title: "HCI+d Lab Undergraduate Research Intern",
    content: (
      <p>
        Currently participating an undergraduate research assistant at the HCI+D
        lab of Seoul National University.
        <br />
        Actively involved in the development and design of a project website for
        a research study on Large Language Models (LLMs), which is a
        collaboration with CMU.
      </p>
    ),
  },
  {
    date: "July 2023 - August 2023",
    location: "Samsung Electronics, Suwon",
    title: "Frontend Developer",
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
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: "Samsung Electronics Mentor - Kumar",
    //   text: "I had a great time as Hyehyun's mentor and I feel grateful to get a chance to interact with one of the brightest futures of Korea. I wish Hyehyun to loads of luck for her future and hope to see her at Samsung in the days to come",
    // },
    // {
    //   name: "Aimed Manager - Shin",
    //   text: "Hyehyun Chu's major is computer science, so she showed good achievements in communication with developers and feature planning. In feature planning, she had a good understanding of how to write a plan so that developers could understand it well, and in communication with developers, she showed high communication skills based on her basic understanding of development.",
    // },
  ],
};

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
      text: "hyenchu@kaist.ac.kr",
      href: "mailto:hyenchu@kaist.ac.kr",
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
};

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
];

/**
 * Publications section
 */
export const publications: Publication[] = [
  {
    title:
      "NoRe: Augmenting Journaling Experience with Generative AI for Music Creation",
    authors:
      "Joonyoung Park*, Hyewon Cho*, Hyehyun Chu*, Yeeun Lee, and Hajin Lim",
    venue: "DIS 2025 Technical Papers",
    link: "https://arxiv.org/abs/2506.01395",
    note: "* indicates equal contribution",
  },
  {
    title:
      "Visual Embedding of Screen Sequences for User-Flow Search in Example-driven Communication",
    authors: "Daeheon Jeong*, Hyehyun Chu*",
    venue: "CHI 2025 Extended Abstracts (Late Breaking Work)",
    link: "https://dl.acm.org/doi/full/10.1145/3706599.3720050",
    note: "* indicates equal contribution",
  },
  {
    title:
      "NoRe: Augmenting Journaling Experience with Generative AI for Music Creation",
    authors:
      "Joonyoung Park*, Yeeun Lee*, Hyewon Cho*, Hyehyun Chu*, Jiin Cheon*, Jinsu Eun, and Hajin Lim",
    venue: "HCI Korea 2025",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12131623",
    note: "* indicates equal contribution",
  },
  {
    title:
      "EmoBridge: Bridging the Communication Gap between Students with Disabilities and Peer Note-Takers Utilizing Emojis and Real-Time Sharing",
    authors:
      "Hyungwoo Song*, Minjeong Shin*, Hyehyun Chu*, Jiin Hong*, Jaechan Lee, Jinsu Eun, and Hajin Lim",
    venue: "ASSETS 2024 Technical Papers",
    link: "https://dl.acm.org/doi/abs/10.1145/3663548.3675629",
    note: "* indicates equal contribution",
  },
  {
    title:
      "EmoBridge: Design of a Collaborative Note-taking System to Improve Communication between Students with Disabilities and Peer Notetaker",
    authors:
      "Hyungwoo Song*, Minjeong Shin*, Hyehyun Chu*, Jiin Hong*, Jaechan Lee, Jinsu Eun, and Hajin Lim",
    venue: "HCI Korea 2024",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11714774",
    note: "* indicates equal contribution",
  },
];

/**
 * News section
 */
export const news: NewsItem[] = [
  {
    date: "2025.11",
    title: "🙋  Finding New Collaborators",
    description:
      "I'm finding new collaborators for my research. If you are interested in collaborating with me, please check out the internship call (Project #3) from Professor Juho Kim.",
    link: "https://juhokim.com/2026-winter-internship-call.html",
  },
  {
    date: "2025.07",
    title: "🇵🇹  Attending DIS 2025 in Madeira",
    description:
      "Excited to present our work on 'NoRe: Augmenting Journaling Experience with Generative AI for Music Creation' at DIS 2025 in Madeira, Portugal. Looking forward to connecting with the HCI community!",
    link: "#",
  },
  {
    date: "2025.04",
    title: "🇯🇵  Attending CHI 2025 in Yokohama",
    description:
      "Thrilled to attend CHI 2025 in Yokohama, Japan! Will be presenting our poster on 'Visual Embedding of Screen Sequences for User-Flow Search in Example-driven Communication' and engaging with the global HCI research community.",
    link: "#",
  },
  {
    date: "2025.04",
    title: "🎉  Paper accepted to DIS 2025",
    description:
      "Our paper 'NoRe: Augmenting Journaling Experience with Generative AI for Music Creation' has been accepted to DIS 2025 Technical Papers! This work explores how generative AI can enhance personal journaling through music creation.",
    link: "#",
  },
  {
    date: "2025.02",
    title: "📝  CHI 2025 LBW Reviewer",
    description:
      "Proud to serve as a reviewer for CHI 2025 Late Breaking Work. It's a great opportunity to contribute to the peer review process and stay updated with the latest HCI research.",
    link: "#",
  },
  {
    date: "2025.02",
    title: "🎉  Paper accepted to CHI 2025",
    description:
      "Delighted to share that our poster 'Visual Embedding of Screen Sequences for User-Flow Search in Example-driven Communication' has been accepted to CHI 2025 Extended Abstracts! This work addresses the challenge of finding relevant UI examples for effective communication.",
    link: "#",
  },
  {
    date: "2024.09",
    title: "🎓  Started Master's Program at KAIST KIXLAB",
    description:
      "Excited to begin my Master's journey in Human-Computer Interaction at KAIST KIXLAB! Working with Prof. Juho Kim on accessibility and human-AI interaction research. Looking forward to contributing to the HCI community.",
    link: "#",
  },
  {
    date: "2024.07",
    title: "✨  Research Intern at KAIST KIXLAB",
    description:
      "Had an amazing experience as a research intern at KIXLAB, working on automated UI generation projects based on user's LLM usage patterns. Gained valuable insights into human-AI interaction research.",
    link: "#",
  },
  {
    date: "2024.02",
    title: "✨  Research Intern at SNU HCI+D Lab",
    description:
      "Joined the HCI+D Lab at Seoul National University as a research intern, collaborating on a fascinating project about LLM-generated digital doppelgängers in partnership with CMU. Great learning experience in cross-institutional research.",
    link: "#",
  },
  {
    date: "2024.01",
    title: "🏆  HCIK Best Paper Award",
    description:
      "Honored to receive the Best Paper Award at HCI Korea 2024 for our work 'EmoBridge: Design of a Collaborative Note-taking System to Improve Communication between Students with Disabilities and Peer Notetaker'! This recognition motivates us to continue working on accessibility research.",
    link: "#",
  },
];
