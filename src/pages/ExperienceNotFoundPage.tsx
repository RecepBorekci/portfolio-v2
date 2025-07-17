import { Link } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

function ExperienceNotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-white">
      <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 shadow-2xl border border-yellow-400/10 rounded-xl w-full container mx-auto p-10 max-w-2xl">
        <div className="flex w-full mb-8">
          <ReturnButton to="/season" />
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

export default ExperienceNotFoundPage;
