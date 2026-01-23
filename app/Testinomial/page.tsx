"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    text: `“Jones & Brown Legal handled my estate planning with such care and professionalism.
They listened to.
I now have complete peace of mind knowing my family's future is secure.”`,
    author: "— David L., Business Owner",
  },
  {
    text: `“The team was extremely responsive and professional.
They guided me through every legal step with clarity and confidence.
I highly recommend Jones & Brown Legal.”`,
    author: "— Sarah M., Entrepreneur",
  },
  {
    text: `“Outstanding legal service with attention to detail.
Their expertise helped us resolve complex issues efficiently.”`,
    author: "— Michael R., CEO",
  },
  {
    text: `“Professional, reliable, and client-focused.
Jones & Brown Legal exceeded our expectations.”`,
    author: "— Emily K., Director",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
          Hear From Our Clients
        </h2>

        {/* DESCRIPTION */}
        <p className="text-black text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We believe that our clients' experiences speak volumes <br />
          about the quality of our legal services. Here's what some of <br />
          them have to say:
        </p>

        {/* CARD (FIXED SIZE) */}
        <div className="bg-[#f6f6f6] max-w-md sm:max-w-lg mx-auto p-6 sm:p-8 rounded-xl shadow min-h-[300px] flex flex-col justify-between">

          {/* TEXT */}
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            {testimonials[index].text}
          </p>

          {/* AUTHOR */}
          <p className="text-black font-semibold mt-6">
            {testimonials[index].author}
          </p>

          {/* CONTROLS */}
          <div className="flex items-center justify-center gap-5 mt-6">

            {/* LEFT ARROW */}
            <button
  onClick={prevSlide}
  aria-label="Previous testimonial"
  className="hover:scale-105 transition  "
>
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"   // 👈 yahin se line patli / moti
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
</button>

            {/* DOTS */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-black" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>

            {/* RIGHT ARROW */}
           <button
  onClick={nextSlide}
  aria-label="Next testimonial"
  className="hover:scale-105 transition"
>
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"   // 👈 line thickness control
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
</button>

          </div>
        </div>

        {/* BOTTOM TEXT */}
        <p className="text-black text-base sm:text-lg mt-12 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let us help you navigate your legal journey with confidence and peace of
          mind. Contact Jones & Brown Legal today.
        </p>

        {/* BUTTON */}
        <Link
          href="/schedule-consult"
          className="inline-block bg-[#31120f] text-white px-7 py-3 rounded-full text-base sm:text-lg transition hover:bg-black"
        >
          Schedule a Consult
        </Link>

      </div>
    </section>
  );
}
