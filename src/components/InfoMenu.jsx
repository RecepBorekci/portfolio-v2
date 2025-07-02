import InfoButton from "./InfoButton";
import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaUsers,
  FaHome,
} from "react-icons/fa";

export default function InfoMenu() {
  const buttonData = [
    { id: 0, icon: <FaHome />, label: "Main", path: "/" },
    { id: 1, icon: <FaUser />, label: "Profile", path: "/profile" },
    { id: 2, icon: <FaCalendarAlt />, label: "Season", path: "/season" },
    { id: 3, icon: <FaChartBar />, label: "Stats", path: "/stats" },
    { id: 4, icon: <FaUsers />, label: "Team", path: "/team" },
  ];

  return (
    <>
      {/* Left side of screen (xl only) */}
      <div className="hidden xl:flex xl:flex-col fixed left-4 top-1/2 -translate-y-1/2 gap-4 z-50">
        {buttonData.map((button) => (
          <InfoButton
            key={button.id}
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
            key={button.id}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>
    </>
  );
}
