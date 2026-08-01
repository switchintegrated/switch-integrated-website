"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement || typeof IntersectionObserver === "undefined") {
      const fallbackTimer = window.setTimeout(() => {
        setIsVisible(true);
      }, 50);

      return () => window.clearTimeout(fallbackTimer);
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      return;
    }

    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, delay + 900);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          window.clearTimeout(fallbackTimer);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(currentElement);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`translate-y-0 opacity-100 transition-all duration-700 ease-out md:${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
