// app/services-preview/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesPreview() {
  return (
    <section className="relative bg-[#0D1F08] text-white pb-32">

      {/* TOP IMAGE */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/assets/image copy 4.png"
          alt="Legal Services"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 ">
        <div className="bg-[#0D1F08] p-8 md:p-16">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 items-start">

            {/* LEFT TAG */}
            <div>
              <span className="block text-1xl tracking-widest font-bold opacity-80 ">
                WHAT WE OFFER
              </span>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <div className="space-y-3">
                {[
                  "Business formation",
                  "Contract drafting",
                  "Mergers & Acquisitions",
                  "Property Protection",
                  "Employment law",
                  "Corporate Governance",
                  "Shareholder Disputes",
                ].map((item) => (
                  <h3
                    key={item}
                    className="text-2xl sm:text-3xl md:text-5xl font-extrabold"
                  >
                    {item}
                  </h3>
                ))}

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#868866]">
                  +More
                </h3>
              </div>

              {/* BUTTON */}
              <Link
                href="/Servicessection"
                className="inline-block mt-10 border border-white px-7 py-2.5 
                text-sm md:text-lg rounded-full bg-white text-black font-sans
                hover:bg-transparent hover:text-white transition"
              >
                Services
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
