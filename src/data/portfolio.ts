import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaUsers,
  FaHome,
} from "react-icons/fa";

import {
  Stat,
  InfoMenuItem,
  ProfileData,
  Experience,
  StatCategory,
} from "../types/portfolio";

export const portfolioData: {
  playerCardData: { name: string; profileImage: string; stats: Stat[] };
  infoMenuData: { buttonData: InfoMenuItem[] };
  profilePageData: ProfileData;
  seasonPageData: Experience[];
  statsPageData: StatCategory[];
} = {
  playerCardData: {
    name: "Recep Börekci",
    profileImage: "/images/profile.jpg",
    stats: [
      {
        id: 0,
        label: "Python",
        points: 90,
        tooltip:
          "Confident in backend scripting, automation, data analysis, and API development",
      },
      {
        id: 1,
        label: "ReactJS",
        points: 88,
        tooltip:
          "Skilled in component-based design, hooks, state management, and responsive UI",
      },
      {
        id: 2,
        label: "ML/AI",
        points: 87,
        tooltip:
          "Proficient in LLMs, scikit-learn, NLP, model evaluation, and ML pipelines",
      },
      {
        id: 3,
        label: "Databases",
        points: 94,
        tooltip:
          "Advanced in writing queries, views, joins, optimization, and MySQL/PostgreSQL",
      },
      {
        id: 4,
        label: "DevOps",
        points: 82,
        tooltip:
          "Hands-on with Docker, CI/CD, cloud deployment (AWS), and containerized APIs",
      },
      {
        id: 5,
        label: "Soft Skills",
        points: 84,
        tooltip:
          "Clear communicator, strong team player, adaptable, and proactive problem-solver",
      },
    ],
  },

  infoMenuData: {
    buttonData: [
      { id: 0, icon: FaHome, label: "Main", path: "/" },
      { id: 1, icon: FaUser, label: "Profile", path: "/profile" },
      { id: 2, icon: FaCalendarAlt, label: "Season", path: "/season" },
      { id: 3, icon: FaChartBar, label: "Stats", path: "/stats" },
      { id: 4, icon: FaUsers, label: "Team", path: "/team" },
    ],
  },

  profilePageData: {
    name: "Recep Börekci",
    title: "LLM Developer / Frontend Developer",
    avatar: "/images/MyAvatar.png",
    description:
      "Recent Computer Science graduate with a strong passion for frontend and AI development. Experienced in building responsive, scalable React.js interfaces and production-ready LLM APIs. Interned in both startup and enterprise settings, contributing to fast, usable, and efficient systems across web and AI projects.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "OpenAI",
      "LangChain",
      "Python",
      "SQL",
      "Docker",
      "Git",
      "TensorFlow",
      "scikit-learn",
      "AWS",
    ],
    languages: [
      {
        label: "Turkish — Native",
        bg: "bg-blue-500/10 border border-blue-500/50",
      },
      {
        label: "English — Fluent (C2)",
        bg: "bg-indigo-500/10 border border-indigo-500/50",
      },
      {
        label: "Japanese — Beginner",
        bg: "bg-purple-500/10 border border-purple-500/50",
      },
    ],
    hobbies: [
      { icon: "🎌", label: "Anime & Manga" },
      { icon: "🚴‍♂️", label: "Biking" },
      { icon: "🎮", label: "Games & Tech Projects" },
    ],
  },
  seasonPageData: [
    {
      id: 0,
      company: "ButikO",
      position: "Junior Frontend Developer",
      startDate: "04/04/2023",
      endDate: "17/07/2024",
      description:
        "As a junior frontend developer, I built and maintained scalable React.js components for ButikO’s e-commerce platform, collaborating daily with a small agile team. I contributed to live feature development, bug fixing, and API integration to enhance user experience across the site.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVZz-k5CuFJs3CeoistlTayfD9p6u1eAXDdQ&s",
      tags: [
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "GitHub",
        "Teamwork",
        "Communication",
      ],
      whatILearned: [
        "Developed and maintained production-ready React.js components for a live e-commerce platform.",
        "Collaborated in a small agile team through daily Zoom stand-ups and shared Git workflows.",
        "Improved debugging and problem-solving skills by resolving frontend issues and performance bottlenecks.",
        "Worked closely with backend developers to integrate REST APIs, ensuring smooth UX and data flow.",
      ],
      slug: "butiko",
      logoAlt: "ButikO Logo",
      ariaLabel: "View more about ButikO",
    },
    {
      id: 1,
      company: "Orta Anadolu",
      position: "Frontend Intern",
      startDate: "03/07/2023",
      endDate: "28/07/2023",
      description:
        "During this short-term internship, I completed my first real-world React project: a responsive portfolio website, fully designed, coded, and deployed independently. The experience helped me put theory into practice and build production-level UI with reusable components.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKvBfJCLN-mAStMFOCyo_e2mhbvFu6Au17Rg&s",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Portfolio",
        "UI Components",
        "Responsive Design",
        "GitHub",
      ],
      whatILearned: [
        "Completed the Web Development Bootcamp by Angela Yu prior to the internship.",
        "Built my first portfolio project with React.js from scratch, deploying it live to production.",
        "Gained hands-on experience with component-based architecture and responsive UI design using Bootstrap and MUI.",
      ],
      slug: "orta-anadolu",
      logoAlt: "Orta Anadolu Logo",
      ariaLabel: "View more about Orta Anadolu",
    },
    {
      id: 2,
      company: "Turkcell",
      position: "System Admin Intern",
      startDate: "22/07/2024",
      endDate: "13/09/2024",
      description:
        "I gained hands-on experience with server infrastructure, virtual machines, and network security protocols, working directly under the mentorship of seasoned system administrators.",
      logo: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_DIKEY_ERKEK_LOGO.jpg",
      tags: [
        "Windows Server",
        "Computer Networks",
        "Active Directory",
        "VPN",
        "Firewall",
        "Hyper-V",
        "VMware",
        "System Administration",
      ],
      whatILearned: [
        "Configured Hyper-V virtual environments, RAID setups, and Active Directory under expert mentorship.",
        "Set up VPNs, NAT, and port forwarding while learning hands-on network security best practices.",
        "Used tools like HPE iLO, Smart Update Manager, and Nessus for server monitoring and patching.",
        "Practiced troubleshooting and diagnostics with Event Viewer, Performance Monitor, and Microsoft SQL Clustering.",
      ],
      slug: "turkcell",
      logoAlt: "Turkcell Logo",
      ariaLabel: "View more about Turkcell",
    },
    {
      id: 3,
      company: "Kaymet",
      position: "LLM Engineer Intern",
      startDate: "10/02/2025",
      endDate: "30/05/2025",
      description:
        "At Kaymet, I developed AI-powered backend services using OpenAI’s API, FastAPI, and SQL to support real-time financial analysis. My work included building a Text-to-SQL pipeline and an arbitrage pricing tool integrated into the company’s LLM system.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbiWGF20-bp2jgYj-J59ikJRCHddtrVjCE0g&s",
      tags: [
        "OpenAI",
        "LLMs",
        "LLM Tools",
        "Python",
        "SQL",
        "Docker",
        "Git",
        "AWS",
        "Teamwork",
        "Communication",
        "Daily Meetings",
      ],
      whatILearned: [
        "Engineered backend microservices using FastAPI and OpenAI’s API to deliver LLM-driven insights.",
        "Designed a full-stack Text-to-SQL pipeline with context-aware natural language queries and SQL execution.",
        "Built an arbitrage pricing engine using OpenAI function calling, real-time logic, and SQL views.",
        "Gained experience in Dockerized deployment and AWS-hosted infrastructure for LLM tooling.",
      ],
      slug: "kaymet",
      logoAlt: "Kaymet Logo",
      ariaLabel: "View more about Kaymet",
    },
  ],
  statsPageData: [
    {
      id: 0,
      name: "Frontend",
      value: 85,
      substats: [
        { id: 0, label: "React.js", value: 97 },
        { id: 1, label: "TypeScript", value: 84 },
        { id: 2, label: "Responsive Design", value: 88 },
        { id: 3, label: "Next.js", value: 72 },
        { id: 4, label: "Component Architecture", value: 85 },
      ],
    },
    {
      id: 1,
      name: "Backend",
      value: 79,
      substats: [
        { id: 0, label: "RESTful API Design", value: 85 },
        { id: 1, label: "Relational Databases", value: 78 },
        { id: 2, label: "Java (Basics)", value: 81 },
        { id: 3, label: "Software Design Principles", value: 71 },
      ],
    },
    {
      id: 2,
      name: "AI / LLM",
      value: 83,
      substats: [
        { id: 0, label: "LLMs (OpenAI, Anthropic)", value: 92 },
        { id: 1, label: "LangChain / Prompting", value: 68 },
        { id: 2, label: "Natural Language Processing", value: 74 },
        { id: 3, label: "scikit-learn / Classic ML", value: 94 },
        { id: 4, label: "HuggingFace", value: 80 },
        { id: 5, label: "Data Preprocessing", value: 89 },
      ],
    },
    {
      id: 3,
      name: "Databases",
      value: 81,
      substats: [
        { id: 0, label: "PostgreSQL / MySQL", value: 89 },
        { id: 1, label: "Views & Joins", value: 95 },
        { id: 2, label: "Stored Procedures", value: 72 },
        { id: 3, label: "Data Integrity & Constraints", value: 87 },
        { id: 4, label: "Query Optimization", value: 67 },
        { id: 5, label: "Data Modeling & Normalization", value: 74 },
      ],
    },
    {
      id: 4,
      name: "DevOps",
      value: 74,
      substats: [
        { id: 0, label: "Docker", value: 74 },
        { id: 1, label: "CI/CD (GitHub Actions)", value: 84 },
        { id: 2, label: "AWS", value: 42 },
        { id: 3, label: "Git & GitHub", value: 94 },
      ],
    },
    {
      id: 5,
      name: "Soft Skills",
      value: 90,
      substats: [
        { id: 0, label: "Communication", value: 82 },
        { id: 1, label: "Teamwork", value: 85 },
        { id: 2, label: "Work Ethic", value: 97 },
        { id: 3, label: "Adaptability", value: 90 },
        { id: 4, label: "Problem-Solving", value: 98 },
      ],
    },
  ],
};

export default portfolioData;
