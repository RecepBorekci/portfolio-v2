import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaUsers,
  FaHome,
} from "react-icons/fa";

export const portfolioData = {
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
};

export default portfolioData;
