import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Moch Zein Fahmi Salas",
  title: "Hi!, I'm Zein",
  description:
    "I am a passionate Full Stack Developer with expertise in Laravel, JavaScript, React.js, and Next.js. I enjoy tackling complex problems and continuously learning new technologies to apply in my projects. With a collaborative mindset and a drive for growth, I strive to deliver innovative and efficient solutions. Let's connect and create exceptional digital experiences together!",
  resumeLink: "assets/pdf/CV-MZein.pdf",
};

export const openSource = {
  githubUserName: "ZennFs",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:zein.salas30@gmail.com",
  linkedin: "https://www.linkedin.com/in/moch-zein-fahmi-salas/",
  github: "https://github.com/ZennFs",
  instagram: "https://www.instagram.com/zennnfs_",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Laravel Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Php",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Laravel",
          iconifyTag: "vscode-icons:file-type-blade",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Tailwindcss",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "Mysql",
          iconifyTag: "logos:mysql-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        // {
        //   skillName: "Docker",
        //   iconifyTag: "logos:docker-icon",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Politeknik NSC Surabaya",
    subHeader: "Associate Degree in Computer Technology",
    duration: "September 2022 - Now",
    desc: "I'm currently studying at Politeknik NSC Surabaya, majoring in Computer Technology. I'm in my 6rd semester and I'm looking forward to graduating soon.",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Programmer | Staff of ICT Division",
    company: "Politeknik NSC Surabaya",
    companyLogo: "/img/icons/common/NSC_PNG.png",
    date: "Mei 2023 - Febuary 2025",
    desc: "I specialize in developing backend solutions for various web applications and APIs tailored to campus needs. My experience includes working with:",
    descBullets: [
      "SIMUTU (Sistem Penjaminan Mutu) An internal quality assurance system designed to streamline and enhance the campus’s quality management processes.",
      "SIMASET (Sistem Manajemen Aset) A comprehensive asset management system that helps track, manage, and optimize campus assets effectively.",
      "SINORA (Sistem Notulen Rapat) A meeting minutes system that simplifies and organizes the recording and tracking of meeting outcomes across the campus.",
    ],
  },
  {
    role: "Laboran Computer",
    company: "Politeknik NSC Surabaya",
    companyLogo: "/img/icons/common/NSC_PNG.png",
    date: "Feb 2024 - Feb 2025",
    desc: "Collaborated with a dedicated team to plan and execute the installation and setup of a state-of-the-art computer laboratory at Politeknik NSC Surabaya. ",
    descBullets: [
      "Oversaw the end-to-end process, including hardware setup, networking configuration, and software installation to ensure peak performance and reliability.",
      "Managed cable organization, optimized network connectivity, and ensured system security for a seamless user experience. ",
      "Additionally, performed rigorous testing and troubleshooting to ensure system stability and readiness for academic use, supporting both faculty and students in their educational pursuits.",
    ],
  },
  // {
  //   role: "Full Stack Developer",
  //   company: "ZRTechnologies",
  //   companyLogo: "/img/icons/common/zrtech.jpeg",
  //   date: "Aug 2022 - Jun 2023",
  //   desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  // },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

export const projects: ProjectType[] = [
  {
    name: "Zen Portofolio v1",
    desc: "My Portofolio website, showcasing my skills, projects, and experiences. Built with Next.js, Tailwind CSS, and Framer Motion for animations. Hosted on Vercel.",
    github: "https://github.com/ZennFs/Portofolio-zen",
    link: "https://portofolio-zenn.vercel.app/",
  },
  {
    name: "Sistem Penjaminan Mutu",
    desc: "A web-based quality assurance system (Sistem Penjaminan Mutu) focused on managing and streamlining institutional quality standards. Features include document management, audit tracking, and comprehensive reporting through an efficient admin panel.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Sistem Informasi Notulen Rapat",
    desc: "A meeting minutes management system (Sistem Notulen Rapat) that streamlines meeting documentation, including proposal submissions, approvals, scheduling, minutes, photos, and web-based invitations, all managed through a responsive admin panel.",
    github: "https://github.com/ZennFs/",
  },
  {
    name: "Sistem Informasi Maanajemen Aset",
    desc: "An asset management system designed to handle asset inventory, procurement, allocation, maintenance, and decommissioning. The system streamlines asset tracking and lifecycle management through a robust admin panel.",
    github: "https://github.com/ZennFs",
  },
  {
    name: "E-Commerce",
    desc: "A dynamic e-commerce platform enabling users to browse, search, and purchase products seamlessly. Features include product management, shopping cart, secure checkout, and order tracking.",
    github: "https://github.com/ZennFs",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Mohamad Akhsan Rofiqi S.Kom",
    role: "ICT Department Head of Politeknik NSC Surabaya",
    feedback:
      "He's consistently delivers high-quality solutions with excellent problem-solving skills. His expertise and clear communication made complex projects run smoothly.",
  },
  {
    name: "Deva Pratama Kurniawan",
    role: "Head of Computer Laboratory of Politeknik NSC Surabaya",
    feedback:
      "He's showed great technical skills and attention to detail. His work significantly improved our computer lab’s workflow and system efficiency.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Moch Zein Fahmi Salas - Portfolio",
  description: greetings.description,
  author: "Moch Zein Fahmi Salas",
  image: "https://avatars.githubusercontent.com/u/34308969?v=4",
  url: "https://portofolio-zenn.vercel.app",
  keywords: [
    "zennfs",
    "Zein Salas",
    "@zennnfs_",
    "zennnfs",
    "Portfolio",
    "Zenn Portfolio ",
    "MOCH ZEIN FAHMI SALAS Portfolio",
  ],
};
