import React, { useState, useEffect } from 'react';

const AnimatedText = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const texts = ['Software Engineer', 'Web Developer'];
  const speed = 100; // 0.1 seconds per character

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isForward) {
        if (currentIndex < texts[currentTextIndex].length) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsForward(true);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isForward, texts, speed]);

  return (
    <h1 style={{ height: '1em' }}>
      {texts[currentTextIndex].substring(0, currentIndex)}
    </h1>
  );
});

export default AnimatedText;
