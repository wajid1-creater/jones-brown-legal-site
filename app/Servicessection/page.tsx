import Header from "../Header/page";
import Footer from "../Footer/page";
import Image from "next/image";

export default function ServicesSectionPage() {
  return (
    <>
      <Header />

      {/* =========================
          HERO / EXPERIENCE SECTION
      ========================== */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center">
        <Image
          src="/assets/image-5.png"
          alt="Experience Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 " />

       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white w-full">
  <h2
  className="
    absolute
    top-[60px] sm:top-[100px] md:top-[180px]
    text-xl sm:text-2xl md:text-3xl
    font-sans leading-snug max-w-3xl
  "
>
  At Jones & Brown Legal, We are committed to experienced service
  and successful outcomes with:
</h2>
</div>

      </section>

      {/* =========================
          STATS SECTION
      ========================== */}
      <section className="bg-[#F7F4EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-4">

          <div>
            <p className="text-5xl md:text-7xl font-sans mb-4">30+</p>
            <p className="text-base md:text-lg">Years of Experience</p>
          </div>

          <div>
            <p className="text-5xl md:text-7xl font-sans mb-4">98%</p>
            <p className="text-base md:text-lg">Success Rate in Court</p>
          </div>

          <div>
            <p className="text-5xl md:text-7xl font-sans mb-4">120+</p>
            <p className="text-base md:text-lg">Attorneys at Hand</p>
          </div>

        </div>
      </section>

      {/* =========================
          SERVICES DETAILS
      ========================== */}
      <section className="bg-[#0D1F08] py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

   <h2
  className="
     sm:text-8xl md:text-4xl
    font-sans leading-snug
     md:text-left
    relative
    -translate-y-8
  "
>
  Navigating Complex Legal Landscapes? <br />
  We Can Help.
</h2>



          {[
            {
              heading: "Business and Corporate Law",
              items: [
                "Business formation (LLCs, corporations, partnerships)",
                "Contract drafting and review",
                "Mergers and acquisitions",
                "Intellectual property protection",
                "Employment law and workplace policies",
                "Corporate governance",
                "Shareholder and partnership disputes",
              ],
            },
            {
              heading: "Litigation and Dispute Resolution",
              items: [
                "Civil litigation",
                "Commercial litigation",
                "Arbitration and mediation",
                "Class action lawsuits",
                "Personal injury claims",
                "Product liability cases",
              ],
            },
            {
              heading: "Family Law",
              items: [
                "Divorce and separation",
                "Child custody and support",
                "Prenuptial and postnuptial agreements",
                "Adoption and surrogacy",
                "Domestic violence protection",
              ],
            },
            {
              heading: "Criminal Defense",
              items: [
                "DUI and traffic offenses",
                "White-collar crime defense",
                "Drug charges",
                "Assault and battery cases",
                "Expungements and record sealing",
              ],
            },
            {
              heading: "Real Estate Law",
              items: [
                "Property transactions",
                "Zoning and land use",
                "Landlord-tenant disputes",
                "Real estate development",
                "Foreclosure defense",
              ],
            },
            {
              heading: "Immigration Law",
              items: [
                "Visa applications",
                "Green cards and citizenship",
                "Deportation defense",
                "Employment-based immigration",
              ],
            },
          ].map((service, i) => (
            <div key={i} className="space-y-6">

              <div className="h-px bg-white/40 w-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <h3 className="text-xl md:text-2xl font-sans ">
                  {service.heading}
                </h3>

                <ul className="space-y-2 text-base md:text-lg opacity-90">
                  {service.items.map((item, j) => (
                    <li key={j}> {item}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

          <div className="h-px bg-white/60 w-full" />
        </div>
      </section>

      <Footer bgImage="/assets/image copy 7.png" />
    </>
  );
}
