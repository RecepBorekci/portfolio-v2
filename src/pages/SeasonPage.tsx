import { seasonPageData } from "../data/experiences";
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from "../types/portfolio";
import { motion } from "motion/react";
import { seasonContainerAnimation } from "../animation/seasonPage";

function SeasonPage() {
  const experiences: Experience[] = seasonPageData;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <motion.div
        initial={seasonContainerAnimation.initial}
        animate={seasonContainerAnimation.animate}
        transition={seasonContainerAnimation.transition}
        className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1280px] mx-auto lg:gap-10">
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
