import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { seasonPageData } from "../data/experiences";
import { Experience } from "../types/portfolio";
import ExperiencePageHeader from "../components/ExperiencePageHeader";
import ExperiencePageDescription from "../components/ExperiencePageDescription";
import ExperiencePageLearned from "../components/ExperiencePageLearned";
import ExperiencePageTags from "../components/ExperiencePageTags";
import ReturnButton from "../components/ReturnButton";
import { experienceDetailAnimations } from "../animation";

type Params = {
  slug: string;
};

function ExperienceDetailPage() {
  const { slug } = useParams<Params>();
  const seasonData: Experience[] = seasonPageData;

  const experience: Experience | undefined = seasonData.find(
    (exp) => exp.slug === slug
  );

  if (!experience) {
    return <Navigate to="/experience-not-found" replace />;
  }

  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white"
      {...experienceDetailAnimations.container}
    >
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10">
        <motion.div
          className="flex w-full max-w-[1280px] mx-auto mb-8"
          {...experienceDetailAnimations.returnButton}
        >
          <ReturnButton to="/season" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:gap-10 max-w-[1280px] mx-auto">
          <motion.div {...experienceDetailAnimations.header}>
            <ExperiencePageHeader experience={experience} />
          </motion.div>
          <motion.hr
            className="border-white border-2 md:border-3"
            {...experienceDetailAnimations.divider}
          />
        </div>

        <motion.div {...experienceDetailAnimations.description}>
          <ExperiencePageDescription description={experience.description} />
        </motion.div>

        <motion.div {...experienceDetailAnimations.learned}>
          <ExperiencePageLearned whatILearned={experience.whatILearned} />
        </motion.div>

        <motion.div {...experienceDetailAnimations.tags}>
          <ExperiencePageTags tags={experience.tags} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ExperienceDetailPage;
