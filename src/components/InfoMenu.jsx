import InfoButton from "./InfoButton";
import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaUsers,
  FaTrophy,
  FaFlag,
  FaHome,
} from "react-icons/fa";

export default function InfoMenu() {
  const buttonData = [
    { icon: <FaHome />, label: "Main", path: "/" },
    { icon: <FaUser />, label: "Profile", path: "/profile" },
    { icon: <FaCalendarAlt />, label: "Season", path: "/season" },
    { icon: <FaChartBar />, label: "Stats", path: "/stats" },
    { icon: <FaUsers />, label: "Team", path: "/team" },
  ];

  return (
    <>
      {/* Left side of screen (xl only) */}
      <div className="hidden xl:flex xl:flex-col fixed left-4 top-1/2 -translate-y-1/2 gap-4 z-50">
        {buttonData.map((button, idx) => (
          <InfoButton
            key={idx}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>

      {/* Bottom center for lg only */}
      <div className="hidden lg:flex xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 gap-2 z-50">
        {buttonData.map((button, idx) => (
          <InfoButton
            key={idx}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>
    </>
  );
}
