import { ProfileData } from "../types/portfolio";
import { LANGUAGE_STYLES } from "../constants/languageStyles";

export const profilePageData: ProfileData = {
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
      bg: LANGUAGE_STYLES.TURKISH,
    },
    {
      label: "English — Fluent (C2)",
      bg: LANGUAGE_STYLES.ENGLISH,
    },
    {
      label: "Japanese — Beginner",
      bg: LANGUAGE_STYLES.JAPANESE,
    },
  ],
  hobbies: [
    { emoji: "🎌", label: "Anime & Manga" },
    { emoji: "🚴‍♂️", label: "Biking" },
    { emoji: "🎮", label: "Games & Tech Projects" },
  ],
};
