import { StatCategory } from '../types/portfolio';

export const statsPageData: StatCategory[] = [
  {
    id: 0,
    name: 'Frontend',
    value: 85,
    substats: [
      { id: 0, label: 'React.js', value: 97 },
      { id: 1, label: 'TypeScript', value: 84 },
      { id: 2, label: 'Responsive Design', value: 88 },
      { id: 3, label: 'Next.js', value: 72 },
      { id: 4, label: 'Component Architecture', value: 85 },
    ],
  },
  {
    id: 1,
    name: 'Backend',
    value: 79,
    substats: [
      { id: 0, label: 'RESTful API Design', value: 85 },
      { id: 1, label: 'Relational Databases', value: 78 },
      { id: 2, label: 'Java (Basics)', value: 81 },
      { id: 3, label: 'Software Design Principles', value: 71 },
    ],
  },
  {
    id: 2,
    name: 'AI / LLM',
    value: 83,
    substats: [
      { id: 0, label: 'LLMs (OpenAI, Anthropic)', value: 92 },
      { id: 1, label: 'LangChain / Prompting', value: 68 },
      { id: 2, label: 'Natural Language Processing', value: 74 },
      { id: 3, label: 'scikit-learn / Classic ML', value: 94 },
      { id: 4, label: 'HuggingFace', value: 80 },
      { id: 5, label: 'Data Preprocessing', value: 89 },
    ],
  },
  {
    id: 3,
    name: 'Databases',
    value: 81,
    substats: [
      { id: 0, label: 'PostgreSQL / MySQL', value: 89 },
      { id: 1, label: 'Views & Joins', value: 95 },
      { id: 2, label: 'Stored Procedures', value: 72 },
      { id: 3, label: 'Data Integrity & Constraints', value: 87 },
      { id: 4, label: 'Query Optimization', value: 67 },
      { id: 5, label: 'Data Modeling & Normalization', value: 74 },
    ],
  },
  {
    id: 4,
    name: 'DevOps',
    value: 74,
    substats: [
      { id: 0, label: 'Docker', value: 74 },
      { id: 1, label: 'CI/CD (GitHub Actions)', value: 84 },
      { id: 2, label: 'AWS', value: 42 },
      { id: 3, label: 'Git & GitHub', value: 94 },
    ],
  },
  {
    id: 5,
    name: 'Soft Skills',
    value: 90,
    substats: [
      { id: 0, label: 'Communication', value: 82 },
      { id: 1, label: 'Teamwork', value: 85 },
      { id: 2, label: 'Work Ethic', value: 97 },
      { id: 3, label: 'Adaptability', value: 90 },
      { id: 4, label: 'Problem-Solving', value: 98 },
    ],
  },
];
