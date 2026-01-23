// app/about/page.tsx
"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#FBF6EE] text-[#0D1F08] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans mb-12 md:mb-16 max-w-4xl">
          Welcome to Jones & Brown Legal
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 font-sans">

          {/* Left */}
          <p className="md:w-1/2 text-base md:text-lg leading-relaxed">
            Jones & Brown Legal has been a pillar of the Los Angeles legal
            community, providing expert legal counsel across a wide spectrum of
            practice areas. We are more than just attorneys—we are trusted
            advisors, dedicated advocates, and strategic partners committed to
            achieving the best possible outcomes for our clients.
          </p>

          {/* Right */}
          <p className="md:w-1/2 text-base md:text-lg leading-relaxed">
            We combine decades of experience with a deep understanding of the complexities of California law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.
          </p>

        </div>

        {/* Button */}
        <div className="mt-14 md:mt-16 text-center md:text-left">
          <Link
            href="/schedule-consult"
            className="inline-block rounded-full bg-[#31120F] text-white 
            px-8 py-3.5 text-base md:text-lg font-sans
             transition"
          >
            Schedule a Consult
          </Link>
        </div>

      </div>
    </section>
  );
}
