import { seasonPageData } from '@data/experiences';
import ExperienceCard from '@components/pages/experience/ExperienceCard';
import { Experience } from '@customTypes/portfolio';
import { motion } from 'motion/react';
import { seasonContainerAnimation } from '@animation/seasonPage';

function SeasonPage() {
  const experiences: Experience[] = seasonPageData;

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-12 text-white">
      <motion.div
        initial={seasonContainerAnimation.initial}
        animate={seasonContainerAnimation.animate}
        transition={seasonContainerAnimation.transition}
        className="container mx-auto w-full rounded-xl border border-yellow-400/10 bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 p-10 shadow-2xl"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SeasonPage;
