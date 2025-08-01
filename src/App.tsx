import { Routes, Route, useLocation } from 'react-router-dom';
import InfoMenu from '@components/pages/main/InfoMenu';
import AnimatedRouteWrapper from '@components/layout/AnimatedRouteWrapper';
import BackgroundMotionWrapper from '@components/layout/BackgroundMotionWrapper';
import { routes } from './routes';
import { useRef, useState, useEffect } from 'react';
import { routeIndexMap } from '@animation/common';

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === './';
  const [direction, setDirection] = useState<number>(0);
  const prevLocationRef = useRef<string>('./');

  // Calculate direction based on route changes
  useEffect(() => {
    const currentPath = location.pathname;

    const prevPath = prevLocationRef.current;

    // Get route indices for direction calculation
    const getCurrentRouteIndex = (path: string): number => {
      // Handle dynamic routes like /season/:slug
      if (path.startsWith('/season/') && path !== '/season') {
        return routeIndexMap['/season/:slug'];
      }
      return routeIndexMap[path] ?? 0;
    };

    const currentIndex = getCurrentRouteIndex(currentPath);
    const prevIndex = getCurrentRouteIndex(prevPath);

    // Calculate direction: positive if moving forward, negative if moving backward
    const newDirection =
      currentIndex > prevIndex ? 1 : currentIndex < prevIndex ? -1 : 0;

    // Update previous location reference BEFORE setting direction
    prevLocationRef.current = currentPath;

    setDirection(newDirection);
  }, [location.pathname]);

  return (
    <div className="relative z-10 min-h-screen">
      {/* Animated background image with blur/brightness */}
      <BackgroundMotionWrapper isMainPage={isMainPage} />

      {/* InfoMenu */}
      <InfoMenu />

      <AnimatedRouteWrapper direction={direction}>
        <Routes location={location}>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatedRouteWrapper>
    </div>
  );
}

export default App;
