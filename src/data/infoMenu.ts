import { FaUser, FaCalendarAlt, FaChartBar, FaHome } from "react-icons/fa";

import { InfoMenuItem } from "../types/portfolio";

export const infoMenuData: {
  buttonData: InfoMenuItem[];
} = {
  buttonData: [
    { id: 0, icon: FaHome, label: "Main", path: "/" },
    { id: 1, icon: FaUser, label: "Profile", path: "/profile" },
    { id: 2, icon: FaCalendarAlt, label: "Season", path: "/season" },
    { id: 3, icon: FaChartBar, label: "Stats", path: "/stats" },
  ],
};
