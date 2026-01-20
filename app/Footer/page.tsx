// app/footer/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7f4EB] text-[#0D1F08]">

      {/* TOP IMAGE */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="/assets/image copy 1.png"
          alt="Footer Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">

          {/* LEFT */}
          <div>
            <Image
              src="/assets/Group 1.svg"
              alt="Jones & Brown Logo"
              width={70}
              height={70}
              className="mb-6 "
            />
            <p className="text-lg max-w-md font-sans mt-15">
              Deep expertise, decisive courtroom presence
            </p>
          </div>

          {/* RIGHT TITLE */}
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-sans font-semibold">
            Jones & Brown Legal
          </h3>
        </div>

        {/* INFO ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

          {/* EMAIL + PHONE */}
          <div className="space-y-0.5">
            <p>hello@figma.com</p>
            <p>(555) 123-4567</p>
          </div>

          {/* LOCATION */}
          <div className="space-y-0.5 ">
            <p>123 Candyland Lane</p>
            <p>Suite 123</p>
            <p>Los Angeles, CA 94117</p>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-1">
            <Link href="#" className="hover:underline">Instagram</Link>
            <Link href="#" className="hover:underline">facebook</Link>
            <Link href="#" className="hover:underline">LinkedIn</Link>
            <Link href="#" className="hover:underline">Bluesky</Link>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 text-sm font-sans">
          <p>
            Jones & Brown Legal <br />
            © 2025 All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
