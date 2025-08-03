import { Experience } from '@customTypes/portfolio';

interface ExperiencePageHeaderProps {
  experience: Experience;
}

const ExperiencePageHeader = ({ experience }: ExperiencePageHeaderProps) => (
  <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[auto_1fr]">
    <img
      src={experience.logo}
      alt={experience.logoAlt}
      className="mx-auto h-30 w-30 rounded-2xl border border-white/20 object-cover sm:mx-0 sm:me-4 lg:me-10"
    />
    <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
      <h1 className="text-center text-2xl font-bold sm:text-start md:text-3xl">
        {experience.company}
      </h1>
      <h2 className="text-center text-xl font-semibold sm:text-start md:text-2xl">
        {experience.position}
      </h2>
      <p className="text-md text-center text-gray-400 sm:text-start md:text-lg">
        From: {experience.startDate} <br />
        To: {experience.endDate}
      </p>
    </div>
  </div>
);

export default ExperiencePageHeader;
