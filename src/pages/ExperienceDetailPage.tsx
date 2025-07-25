import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { seasonPageData } from '@data/experiences';
import { Experience } from '@customTypes/portfolio';
import ExperiencePageHeader from '@components/pages/experience/ExperiencePageHeader';
import ExperiencePageDescription from '@components/pages/experience/ExperiencePageDescription';
import ExperiencePageLearned from '@components/pages/experience/ExperiencePageLearned';
import ExperiencePageTags from '@components/pages/experience/ExperiencePageTags';
import ReturnButton from '@components/common/ReturnButton';
import { experienceDetailAnimations } from '@animation/experienceDetailPage';

type Params = {
  slug: string;
};

function ExperienceDetailPage() {
  const { slug } = useParams<Params>();
  const seasonData: Experience[] = seasonPageData;

  const experience: Experience | undefined = seasonData.find(
    exp => exp.slug === slug
  );

  if (!experience) {
    return <Navigate to="/experience-not-found" replace />;
  }

  return (
    <motion.div
      className="flex min-h-screen w-full items-center justify-center px-4 py-12 text-white"
      {...experienceDetailAnimations.container}
    >
      <div className="container mx-auto w-full rounded-xl border border-yellow-400/10 bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 p-10 shadow-2xl">
        <motion.div
          className="mx-auto mb-8 flex w-full max-w-[1280px]"
          {...experienceDetailAnimations.returnButton}
        >
          <ReturnButton to="/season" />
        </motion.div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 lg:gap-10">
          <motion.div {...experienceDetailAnimations.header}>
            <ExperiencePageHeader experience={experience} />
          </motion.div>
          <motion.hr
            className="border-2 border-white md:border-3"
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
