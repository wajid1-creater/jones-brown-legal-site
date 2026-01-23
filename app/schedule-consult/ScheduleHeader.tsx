// app/schedule-consult/ScheduleHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ScheduleHeader() {
  return (
    <header className="bg-[#1f0808] text-white px-4 sm:px-8 md:px-16 py-4 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/assets/logo-.svg"
            alt="Logo"
            width={50}
            height={40}
          />
        </Link>

        {/* NAV ITEMS */}
        <nav className="flex flex-wrap gap-6 text-sm sm:text-base md:text-lg font-sans">
          <Link href="/Servicessection" className="">
            Services
          </Link>
          <Link href="/schedule-consult" >
            Schedule Consult
          </Link>
        </nav>

      </div>
    </header>
  );
}
