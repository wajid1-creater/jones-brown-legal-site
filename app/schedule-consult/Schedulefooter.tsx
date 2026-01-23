"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScheduleFooter() {
  return (
    <footer className="bg-[#f7F4EB] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">

        {/* TOP SECTION: Logo + Company */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">

          {/* Logo + description */}
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/Group 1.svg"
              alt="Logo"
              width={56}
              height={56}
            />
            <p className="text-sm sm:text-base md:text-lg">
              Deep expertise, decisive courtroom presence
            </p>
          </div>

          {/* Company Name */}
          <h3 className="text-xl sm:text-2xl md:text-5xl font-semibold">
            Jones & Brown Legal
          </h3>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-12 text-sm">

          {/* Contact */}
          <div className="space-y-1">
            <p>hello@figma.com</p>
            <p>(555) 123-4567</p>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p>123 Candyland Lane</p>
            <p>Suite 123</p>
            <p>Los Angeles, CA</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-1">
            <Link href="#" className="hover:underline">Facebook</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
            <Link href="#" className="hover:underline">LinkedIn</Link>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 md:mt-12 text-xs sm:text-sm">
          <p>
            Jones & Brown Legal <br />
            © 2025 All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
