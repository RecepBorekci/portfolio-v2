import { NavLink, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useMemo } from "react";

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
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === path;
  }, [location.pathname, path]);

  const buttonClasses = useMemo(
    () =>
      clsx(
        "flex items-center gap-2 justify-center",
        "lg:flex-col xl:flex-row",
        "border border-white/20 rounded-md",
        "px-4 py-2",
        "text-[3.5vw] lg:text-[1.2vw] xl:text-[0.9vw]",
        "min-w-[80px] lg:min-w-[10vw] xl:min-w-[6vw]",
        "min-h-[40px] lg:min-h-[8vw] xl:min-h-[4vw]",
        "w-full h-full",
        "transition-colors duration-200",
        {
          "text-yellow-300": isActive,
          "text-white": !isActive,
        }
      ),
    [isActive]
  );

  const motionVariants = useMemo(
    () => ({
      hover: {
        scale: 1.05,
        backgroundColor: isActive
          ? "rgba(255,255,255,0.35)"
          : "rgba(255,255,255,0.2)",
      },
      tap: {
        scale: 0.95,
      },
    }),
    [isActive]
  );

  return (
    <motion.div
      variants={motionVariants}
      whileHover="hover"
      whileTap="tap"
      whileFocus="focus"
      className="w-full h-full"
    >
      <NavLink
        to={path}
        end
        aria-label={label + " Button"}
        className={buttonClasses}
        style={{
          backgroundColor: isActive
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0.1)",
        }}
      >
        <Icon />
        <span className="font-bold tracking-wide">{label}</span>
      </NavLink>
    </motion.div>
  );
}
