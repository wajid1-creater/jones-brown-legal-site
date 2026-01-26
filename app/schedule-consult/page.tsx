// app/schedule-consult/page.tsx

import ScheduleHeader from "./ScheduleHeader";
import ScheduleFooter from "./Schedulefooter"
import Image from "next/image";
import Link from "next/link";

export default function ScheduleConsultPage() {
  return (
    <>
      {/* HEADER */}
      <ScheduleHeader />

      {/* HERO SECTION */}
      <section className="relative w-full h-[30vh] md:h-[75vh] lg:h-[85vh]">
        {/* Background Image */}
        <Image
          src="/assets/image-legal.png"
          alt="Consultation"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Bottom-left Heading */}
        <div className="absolute bottom-10 left-4 md:left-16 max-w-md">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans text-white leading-tight">
            Let us help you
          </h1>
        </div>
      </section>

      {/* STEPS SECTION */}
     <section className="bg-[#1f0808] text-white px-4 py-16 sm:py-20 md:py-28">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="mb-12 sm:mb-16 md:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold leading-snug">
        Ready to Take the Next Step?
        <br />
        Let’s Discuss
      </h2>
    </div>

    {/* STEPS */}
    {[
      {
        num: "1",
        title: "Free consultation",
        desc:
          "Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.",
      },
      {
        num: "2",
        title: "Personalized Case Evaluation",
        desc:
          "If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.",
      },
      {
        num: "3",
        title: "Formal Engagement & Representation",
        desc:
          "Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.",
      },
    ].map((step) => (
      <div
        key={step.num}
        className="border-t border-white/20 py-10 sm:py-14 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 sm:gap-10 md:gap-16 items-start">

          {/* NUMBER */}
          <div className="
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            font-sans opacity-70 leading-none
          ">
            {step.num}.
          </div>

          {/* CONTENT */}
          <div className="max-w-2xl">
            <h3 className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mb-3">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed opacity-80">
              {step.desc}
            </p>
          </div>

        </div>
      </div>
    ))}

    {/* CTA */}
    <div className="
      border-t border-white/20
      pt-10 sm:pt-14 md:pt-20
      flex flex-col md:flex-row
      items-start md:items-center
      gap-4
    ">
      <h3 className="text-base sm:text-lg md:text-2xl font-semibold">
        Discover how we can help
      </h3>

      <Link
        href="/schedule-consult"
        className="
          md:ml-auto
          bg-white text-black
          px-6 py-3
          rounded-full
          text-sm sm:text-base
          transition-all
          hover:bg-[#11BAB2] hover:text-white
        "
      >
        Schedule a Consult
      </Link>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <ScheduleFooter/>
    </>
  );
}
