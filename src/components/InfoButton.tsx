import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import clsx from "clsx";

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
  const getButtonClasses = (isActive: boolean) => {
    return clsx(
      "flex items-center gap-2 justify-center",
      "lg:flex-col xl:flex-row",
      "border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300",
      "px-4 py-2",
      "text-[3.5vw] lg:text-[1.2vw] xl:text-[0.9vw]",
      "min-w-[80px] lg:min-w-[10vw] xl:min-w-[6vw]",
      "min-h-[40px] lg:min-h-[8vw] xl:min-h-[4vw]",
      {
        "bg-white/30 text-yellow-300": isActive,
        "bg-white/10 hover:bg-white/20 text-white": !isActive,
      }
    );
  };

  return (
    <NavLink
      to={path}
      end
      aria-label={label + " Button"}
      className={({ isActive }) => getButtonClasses(isActive)}
    >
      <Icon />
      <span className="font-bold tracking-wide">{label}</span>
    </NavLink>
  );
}
