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
} from "../types/portfolio";

export const portfolioData: {
  playerCardData: { stats: Stat[] };
  infoMenuData: { buttonData: InfoMenuItem[] };
  profilePageData: ProfileData;
  seasonPageData: Experience[];
} = {
  playerCardData: {
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
        label: "SQL",
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
        "I worked as a junior frontend developer at ButikO. I was responsible for the development of the company's website.",
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
    },
    {
      id: 1,
      company: "Orta Anadolu",
      position: "Frontend Intern",
      startDate: "03/07/2023",
      endDate: "28/07/2023",
      description:
        "I worked as a frontend intern at Orta Anadolu. I was responsible for the development of the company's website.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKvBfJCLN-mAStMFOCyo_e2mhbvFu6Au17Rg&s",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Portfolio",
        "UI Components",
        "Responsive Design",
        "GitHub",
      ],
    },
    {
      id: 2,
      company: "Turkcell",
      position: "System Admin Intern",
      startDate: "22/07/2024",
      endDate: "13/09/2024",
      description:
        "I worked as a system admin intern at Turkcell. I was responsible for the maintenance and support of the company's systems.",
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
    },
    {
      id: 3,
      company: "Kaymet",
      position: "LLM Engineer Intern",
      startDate: "10/02/2025",
      endDate: "30/05/2025",
      description:
        "I worked as a LLM engineer intern at Kaymet. I was responsible for the development of the company's website.",
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
    },
  ],
};

export default portfolioData;
