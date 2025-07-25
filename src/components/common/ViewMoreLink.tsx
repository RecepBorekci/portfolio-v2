import { Link } from 'react-router-dom';

interface ViewMoreLinkProps {
  slug: string;
  ariaLabel: string;
}

export default function ViewMoreLink({ slug, ariaLabel }: ViewMoreLinkProps) {
  return (
    <Link
      to={`/season/${slug}`}
      className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-yellow-300 transition-all duration-200 ease-in-out hover:bg-white/15 hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400/80 focus:outline-none"
      aria-label={ariaLabel}
    >
      View More →
    </Link>
  );
}
