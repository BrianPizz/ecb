'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollBlurProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollBlur({ children, className = '' }: ScrollBlurProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`${isVisible ? 'focus-section' : 'blur-section'} ${className}`}
    >
      {children}
    </div>
  );
}
