import { Experience } from '@customTypes/portfolio';
import ViewMoreLink from '@components/common/ViewMoreLink';
import TagPill from '@components/common/TagPill';
import { motion } from 'motion/react';
import { experienceCardAnimations } from '@animation/seasonPage';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={experienceCardAnimations.initial}
      whileInView={experienceCardAnimations.whileInView(index)}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={experienceCardAnimations.hover}
      transition={experienceCardAnimations.transition}
      className="grid min-h-[220px] grid-cols-1 items-center gap-4 rounded-3xl border border-transparent bg-blue-900/45 p-4 shadow-lg sm:grid-cols-2 md:gap-0 lg:min-h-[240px] xl:min-h-[280px]"
    >
      {/* Logo - Top on mobile, Left on desktop */}
      <div className="flex items-center justify-center p-4">
        <img
          src={experience.logo}
          className="h-50 max-h-[100px] w-50 max-w-[160px] object-cover sm:max-h-[125px] sm:max-w-[200px] lg:max-h-[120px] lg:max-w-[120px] xl:max-h-[160px] xl:max-w-[160px]"
          alt={experience.logoAlt}
        />
      </div>

      {/* Info - Bottom on mobile, Right on desktop */}
      <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
        <p className="text-center text-xl font-bold text-white sm:text-start">
          {experience.position}
        </p>
        <p className="text-lg text-gray-200">{experience.company}</p>
        <p className="text-sm text-gray-400">
          {experience.startDate} → {experience.endDate}
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-2 sm:justify-start">
          {experience.tags.map(tag => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <ViewMoreLink slug={experience.slug} ariaLabel={experience.ariaLabel} />
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
