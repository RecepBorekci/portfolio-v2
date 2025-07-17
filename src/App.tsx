import { useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoMenu from "./components/InfoMenu";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SeasonPage from "./pages/SeasonPage";
import StatsPage from "./pages/StatsPage";
import TeamPage from "./pages/TeamPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import ExperienceNotFoundPage from "./pages/ExperienceNotFoundPage";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <div>
      <img
        src="/images/Stadium.jpg"
        alt="stadium"
        className={`absolute top-0 left-0 w-full h-full object-cover xl:object-top z-0 transition-all duration-500 ${
          isMainPage ? "" : "blur-md brightness-50"
        }`}
      />
      {/* InfoMenu */}
      <InfoMenu />

      <div
        className={`min-h-screen z-10 relative ${
          !isMainPage ? "bg-black/30" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/season" element={<SeasonPage />} />
          <Route path="/season/:slug" element={<ExperienceDetailPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route
            path="/experience-not-found"
            element={<ExperienceNotFoundPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
