import { Link } from 'react-router-dom';
import ReturnButton from '@components/common/ReturnButton';

function ExperienceNotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-12 text-white">
      <div className="container mx-auto w-full max-w-2xl rounded-xl border border-yellow-400/10 bg-gradient-to-br from-black/60 via-gray-900/60 to-yellow-900/30 p-10 shadow-2xl">
        <div className="mb-8 flex w-full">
          <ReturnButton to="/season" />
        </div>

        <div className="py-12 text-center">
          <div className="mb-6">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20">
              <span className="text-4xl">🔍</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-red-400 md:text-4xl">
              Experience Not Found
            </h1>
            <p className="mx-auto mb-8 max-w-md text-lg text-gray-300">
              The experience you're looking for doesn't exist or may have been
              moved.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/season"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              View All Experiences
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
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
