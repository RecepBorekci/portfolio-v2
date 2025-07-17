import { useMemo } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ReturnButtonProps {
  to: string;
}

function pathToPageName(path: string): string {
  const pathMap: Record<string, string> = {
    "/season": "Season page",
    "/home": "Home page",
    "/about": "About page",
  };
  return pathMap[path] || "page";
}

export default function ReturnButton({ to }: ReturnButtonProps) {
  const pageName = useMemo(() => pathToPageName(to), [to]);

  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md px-4 py-2 md:px-6 md:py-3 text-yellow-300 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      aria-label={`Return to ${pageName}`}
    >
      <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      <span className="text-sm md:text-base font-medium">Return</span>
    </Link>
  );
}
