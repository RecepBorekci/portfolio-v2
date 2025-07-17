import { Experience } from "../types/portfolio";

interface ExperiencePageHeaderProps {
  experience: Experience;
}

const ExperiencePageHeader = ({ experience }: ExperiencePageHeaderProps) => (
  <div className="grid grid-cols-[auto_1fr] items-center gap-6">
    <img
      src={experience.logo}
      alt={experience.logoAlt}
      className="w-30 h-30 object-cover rounded-2xl border border-white/20 me-4 lg:me-10"
    />
    <div className="flex flex-col justify-center gap-1">
      <h1 className="text-2xl md:text-3xl font-bold">{experience.company}</h1>
      <h2 className="text-xl md:text-2xl font-semibold">
        {experience.position}
      </h2>
      <p className="text-md md:text-lg text-gray-400">
        From: {experience.startDate} <br />
        To: {experience.endDate}
      </p>
    </div>
  </div>
);

export default ExperiencePageHeader;
