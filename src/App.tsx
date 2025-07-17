import { Routes, Route, useLocation } from "react-router-dom";
import InfoMenu from "./components/InfoMenu";
import BackgroundImage from "./components/BackgroundImage";
import { routes } from "./routes";
import clsx from "clsx";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div>
      <BackgroundImage isMainPage={isMainPage} />
      {/* InfoMenu */}
      <InfoMenu />

      <div
        className={clsx(
          "min-h-screen z-10 relative",
          !isMainPage ? "bg-black/30" : ""
        )}
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
