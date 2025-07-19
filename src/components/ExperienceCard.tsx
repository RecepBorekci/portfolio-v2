import { Experience } from "../types/portfolio";
import ViewMoreLink from "./ViewMoreLink";
import TagPill from "./TagPill";
import { motion } from "motion/react";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(234, 179, 8, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-blue-900/45 rounded-3xl p-4 shadow-lg grid grid-cols-2 items-center min-h-[220px] lg:min-h-[240px] xl:min-h-[280px] border border-transparent"
    >
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
    </motion.div>
  );
}

export default ExperienceCard;
