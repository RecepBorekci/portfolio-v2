import { Experience } from "../types/portfolio";
import ViewMoreLink from "./ViewMoreLink";
import TagPill from "./TagPill";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-blue-900/45 rounded-3xl p-4 shadow-lg grid grid-cols-2 items-center min-h-[220px] lg:min-h-[240px] xl:min-h-[280px] hover:scale-[1.01] hover:shadow-2xl">
      {/* Left - Logo */}
      <div className="flex items-center justify-center">
        <img
          src={experience.logo}
          className="h-50 max-h-[100px] md:max-h-[120px] xl:max-h-[160px] w-50 max-w-[160px] md:max-w-[120px] xl:max-w-[160px] object-cover"
          alt={experience.logoAlt}
        />
      </div>

      {/* Right - Info */}
      <div className="flex flex-col justify-center gap-2">
        <p className="font-bold text-xl text-white">{experience.position}</p>
        <p className="text-lg text-gray-200">{experience.company}</p>
        <p className="text-sm text-gray-400">
          {experience.startDate} → {experience.endDate}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {experience.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <ViewMoreLink slug={experience.slug} ariaLabel={experience.ariaLabel} />
      </div>
    </div>
  );
}

export default ExperienceCard;
