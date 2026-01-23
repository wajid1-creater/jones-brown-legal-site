"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setTimeout(() => setAnimate(false), 1500);
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-cover bg-center w-full h-[30vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh]"
      style={{ backgroundImage: "url('/assets/image -copy.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - fixed in place */}
      <div
        ref={heroRef}
        className={`absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 text-white w-full ${animate ? "blink-once" : ""}`}
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight md:leading-[1.1]">
          Jones & Brown Legal
        </h1>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 mt-4 md:mt-6">
          {/* Left text */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold max-w-full md:max-w-xl">
            Deep expertise, decisive courtroom presence
          </p>

          {/* Right text */}
          <p className="text-sm sm:text-base md:text-lg max-w-full md:max-w-md mt-2 md:mt-0">
            We’ve been serving the Los Angeles area <br />
            with expert legal counsel since 1976.
          </p>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .blink-once {
          animation: blinkFade 1.5s ease-in-out;
        }
        @keyframes blinkFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
