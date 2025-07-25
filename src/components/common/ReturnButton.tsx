import { useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface ReturnButtonProps {
  to: string;
}

function pathToPageName(path: string): string {
  const pathMap: Record<string, string> = {
    '/season': 'Season page',
    '/home': 'Home page',
    '/about': 'About page',
  };
  return pathMap[path] || 'page';
}

export default function ReturnButton({ to }: ReturnButtonProps) {
  const pageName = useMemo(() => pathToPageName(to), [to]);

  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-yellow-300 shadow-md transition-colors hover:bg-white/20 hover:text-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none md:px-6 md:py-3"
      aria-label={`Return to ${pageName}`}
    >
      <FaArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
      <span className="text-sm font-medium md:text-base">Return</span>
    </Link>
  );
}
