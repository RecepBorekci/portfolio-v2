import { Link } from "react-router-dom";
import { Experience } from "../types/portfolio";

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
          alt={`${experience.company} logo`}
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
            <span
              key={tag}
              className="bg-yellow-400/20 text-yellow-300 px-2 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/season/${experience.company
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="w-fit inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium rounded-md text-yellow-300 bg-white/5 hover:bg-white/15 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 transition-all duration-200 ease-in-out"
          aria-label={`View more about ${experience.company}`}
        >
          View More →
        </Link>
      </div>
    </div>
  );
}

export default ExperienceCard;
