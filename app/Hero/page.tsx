// app/hero/page.tsx
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
      className="relative min-h-[80vh] bg-cover bg-center flex items-end md:items-center"
      style={{ backgroundImage: "url('/assets/image copy.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        ref={heroRef}
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white w-full 
        mb-16 md:mb-0 ${animate ? "blink-once" : ""}`}
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wide mt-20">
          Jones & Brown Legal
        </h1>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row w-full gap-6 md:items-end">

          {/* Left text */}
          <p className="text-lg sm:text-xl md:text-3xl font-extrabold max-w-xl mt-30">
            Deep expertise, decisive courtroom presence
          </p>

          <div className="flex-1" />

          {/* Right text */}
          <p className="text-sm sm:text-base max-w-md">
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
