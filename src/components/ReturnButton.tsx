import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ReturnButtonProps {
  to: string;
}

export default function ReturnButton({ to }: ReturnButtonProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md px-4 py-2 md:px-6 md:py-3 text-yellow-300 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      aria-label={`Return to ${to}`}
    >
      <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
      <span className="text-sm md:text-base font-medium">Return</span>
    </Link>
  );
}
