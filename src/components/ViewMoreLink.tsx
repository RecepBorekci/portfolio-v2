import { Link } from "react-router-dom";

interface ViewMoreLinkProps {
  slug: string;
  ariaLabel: string;
}

export default function ViewMoreLink({ slug, ariaLabel }: ViewMoreLinkProps) {
  return (
    <Link
      to={`/season/${slug}`}
      className="w-fit inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium rounded-md text-yellow-300 bg-white/5 hover:bg-white/15 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/80 transition-all duration-200 ease-in-out"
      aria-label={ariaLabel}
    >
      View More →
    </Link>
  );
}
