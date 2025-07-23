import { Stat } from '../types/portfolio';

export const playerCardData: {
  name: string;
  profileImage: string;
  position: string;
  countryFlag: {
    src: string;
    alt: string;
  };
  teamLogo: {
    src: string;
    alt: string;
  };
  stats: Stat[];
} = {
  name: 'Recep Börekci',
  profileImage: '/images/profile.png',
  position: 'CAM',
  countryFlag: {
    src: '/images/Flag_of_Turkey.svg.webp',
    alt: 'Flag of Turkey',
  },
  teamLogo: {
    src: '/images/AGU.jpg',
    alt: 'AGU team logo',
  },
  stats: [
    {
      id: 0,
      label: 'Python',
      points: 90,
      tooltip:
        'Confident in backend scripting, automation, data analysis, and API development',
    },
    {
      id: 1,
      label: 'ReactJS',
      points: 88,
      tooltip:
        'Skilled in component-based design, hooks, state management, and responsive UI',
    },
    {
      id: 2,
      label: 'ML/AI',
      points: 87,
      tooltip:
        'Proficient in LLMs, scikit-learn, NLP, model evaluation, and ML pipelines',
    },
    {
      id: 3,
      label: 'Databases',
      points: 94,
      tooltip:
        'Advanced in writing queries, views, joins, optimization, and MySQL/PostgreSQL',
    },
    {
      id: 4,
      label: 'DevOps',
      points: 82,
      tooltip:
        'Hands-on with Docker, CI/CD, cloud deployment (AWS), and containerized APIs',
    },
    {
      id: 5,
      label: 'Soft Skills',
      points: 84,
      tooltip:
        'Clear communicator, strong team player, adaptable, and proactive problem-solver',
    },
  ],
};
