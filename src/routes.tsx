import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import SeasonPage from "./pages/SeasonPage";
import StatsPage from "./pages/StatsPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import ExperienceNotFoundPage from "./pages/ExperienceNotFoundPage";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/season",
    element: <SeasonPage />,
  },
  {
    path: "/season/:slug",
    element: <ExperienceDetailPage />,
  },
  {
    path: "/stats",
    element: <StatsPage />,
  },
  {
    path: "/experience-not-found",
    element: <ExperienceNotFoundPage />,
  },
];
