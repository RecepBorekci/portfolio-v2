import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";

interface InfoButtonProps {
  icon: IconType;
  label: string;
  path: string;
}

export default function InfoButton({
  icon: Icon,
  label,
  path,
}: InfoButtonProps) {
  return (
    <NavLink
      to={path}
      end
      aria-label={label + " Button"}
      className={({ isActive }) => {
        // Base styles for the button
        const base =
          "flex items-center gap-2 justify-center " +
          "lg:flex-col xl:flex-row " +
          "border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 " +
          "px-4 py-2 " +
          "text-[3.5vw] lg:text-[1.2vw] xl:text-[0.9vw] " +
          "min-w-[80px] lg:min-w-[6vw] xl:min-w-[6vw] " +
          "min-h-[40px] lg:min-h-[8vw] xl:min-h-[3vw] ";

        // Color styles for active/inactive
        const color = isActive
          ? "bg-white/30 text-yellow-300"
          : "bg-white/10 hover:bg-white/20 text-white";

        return base + color;
      }}
    >
      <Icon />
      <span className="font-bold tracking-wide">{label}</span>
    </NavLink>
  );
}
