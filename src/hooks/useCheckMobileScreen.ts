import { useEffect, useState } from 'react';

const useCheckMobileScreen = () => {
  const isClient = typeof window !== 'undefined';
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useCheckMobileScreen;
