import { Experience } from '../types/portfolio';

interface ExperiencePageHeaderProps {
  experience: Experience;
}

const ExperiencePageHeader = ({ experience }: ExperiencePageHeaderProps) => (
  <div className="grid grid-cols-[auto_1fr] items-center gap-6">
    <img
      src={experience.logo}
      alt={experience.logoAlt}
      className="me-4 h-30 w-30 rounded-2xl border border-white/20 object-cover lg:me-10"
    />
    <div className="flex flex-col justify-center gap-1">
      <h1 className="text-2xl font-bold md:text-3xl">{experience.company}</h1>
      <h2 className="text-xl font-semibold md:text-2xl">
        {experience.position}
      </h2>
      <p className="text-md text-gray-400 md:text-lg">
        From: {experience.startDate} <br />
        To: {experience.endDate}
      </p>
    </div>
  </div>
);

export default ExperiencePageHeader;
