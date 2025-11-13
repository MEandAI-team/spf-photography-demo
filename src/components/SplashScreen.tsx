import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    // Start fade-out after 3 seconds
    const fadeOutTimer = setTimeout(() => {
      setAnimationClass('fade-out');
    }, 6000);

    // Remove the component from the DOM after the fade-out animation completes (2s)
    const visibilityTimer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 3000ms (visible) + 2000ms (fade-out)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`splash-screen ${animationClass}`}>
      <ImageWithFallback src="/images/splash.png" alt="Splash Screen" className="w-full h-auto" />
    </div>
  );
};

export default SplashScreen;