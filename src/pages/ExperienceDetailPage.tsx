import { useParams, Navigate } from "react-router-dom";
import { portfolioData } from "../data/portfolio";
import { Experience } from "../types/portfolio";
import ExperiencePageHeader from "../components/ExperiencePageHeader";
import ExperiencePageDescription from "../components/ExperiencePageDescription";
import ExperiencePageLearned from "../components/ExperiencePageLearned";
import ExperiencePageTags from "../components/ExperiencePageTags";
import ReturnButton from "../components/ReturnButton";

type Params = {
  slug: string;
};

function ExperienceDetailPage() {
  const { slug } = useParams<Params>();
  const seasonData = portfolioData.seasonPageData;

  const experience: Experience | undefined = seasonData.find(
    (exp) => exp.slug === slug
  );

  if (!experience) {
    return <Navigate to="/experience-not-found" replace />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10">
        <div className="flex w-full max-w-[1280px] mx-auto mb-8">
          <ReturnButton to="/season" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 max-w-[1280px] mx-auto">
          <ExperiencePageHeader experience={experience} />
          <hr className="border-white border-2 md:border-3" />
        </div>
        <ExperiencePageDescription description={experience.description} />
        <ExperiencePageLearned whatILearned={experience.whatILearned} />
        <ExperiencePageTags tags={experience.tags} />
      </div>
    </div>
  );
}

export default ExperienceDetailPage;
