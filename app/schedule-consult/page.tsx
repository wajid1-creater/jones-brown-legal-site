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
      <section className="bg-[#1f0808] text-white px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-sans font-semibold leading-tight">
              Ready to Take the Next Step?
              <br />
              Let’s Discuss
            </h2>
          </div>

          {/* STEPS */}
          {[
            {
              num: "1",
              title: "Free Consultation",
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
            <div key={step.num} className="border-t border-white/20 py-16">
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-16">
                {/* NUMBER */}
                <div className="text-6xl md:text-7xl lg:text-8xl font-sans opacity-60 leading-none">
                  {step.num}.
                </div>

                {/* CONTENT */}
                <div className="max-w-2xl">
                  <h3 className="text-sm uppercase tracking-wide opacity-80 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed opacity-80">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
         <div className="border-t border-white/20 pt-12 sm:pt-16 md:pt-20 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
  {/* Heading */}
  <h3 className="text-center sm:text-left text-lg sm:text-xl md:text-2xl font-bold leading-snug">
    Discover how we can help
  </h3>

  {/* Button */}
  <Link
    href="/schedule-consult"
    className="mt-4 sm:mt-0 bg-white text-black px-2 py-3 rounded-full text-sm sm:text-base md:text-base font-sans transition-all hover:bg-[#11BAB2] hover:text-white sm:ml-auto "
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
