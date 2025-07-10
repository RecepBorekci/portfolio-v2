import { Link, useParams } from "react-router-dom";
import { portfolioData } from "../data/portfolio";
import { Experience } from "../types/portfolio";
import { FaArrowLeft } from "react-icons/fa6";

type Params = {
  slug: string;
};

function ExperienceDetailPage() {
  const { slug } = useParams<Params>();
  const seasonData = portfolioData.seasonPageData;

  const experience: Experience | undefined = seasonData.find(
    (exp) => exp.company.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!experience) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
        <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10 max-w-2xl">
          <div className="flex w-full mb-8">
            <Link
              to="/season"
              className="inline-flex items-center gap-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md px-4 py-2 md:px-6 md:py-3 text-yellow-200 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Return to Season"
            >
              <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-medium">Return</span>
            </Link>
          </div>

          <div className="text-center py-12">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
                Experience Not Found
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
                The experience you're looking for doesn't exist or may have been
                moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/season"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                View All Experiences
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TypeScript now knows experience is not undefined after the null check
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10">
        <div className="flex w-full max-w-[1280px] mx-auto mb-8">
          <Link
            to="/season"
            className="inline-flex items-center gap-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md px-4 py-2 md:px-6 md:py-3 text-yellow-300 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Return to Season"
          >
            <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-medium">Return</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-[auto_1fr] items-center gap-6">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-30 h-30 object-contain rounded-2xl border border-white/20 me-4 lg:me-10"
            />
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-2xl md:text-3xl font-bold">
                {experience.company}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold">
                {experience.position}
              </h2>
              <p className="text-md md:text-lg text-gray-400">
                From: {experience.startDate} <br />
                To: {experience.endDate}
              </p>
            </div>
          </div>

          <hr className="border-white border-2 md:border-3" />
        </div>
        <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
          <h1 className="text-xl md:text-2xl font-bold">Description</h1>
          <p className="text-md md:text-lg">{experience.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
          <h1 className="text-xl md:text-2xl font-bold">What I Learned</h1>
          <ul className="list-disc pl-6 text-md md:text-lg">
            {experience.whatILearned.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2 max-w-[1280px] mx-auto mt-6 sm:mt-8 xl:mt-10">
          <h1 className="text-xl md:text-2xl font-bold">Tags</h1>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="bg-yellow-400/20 text-yellow-300 px-2 py-1 text-xs md:text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetailPage;
