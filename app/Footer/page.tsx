"use client";

import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  bgImage?: string;
};

export default function Footer({
  bgImage = "/assets/image copy 1.png", // 🔹 DEFAULT (HOME PAGE)
}: FooterProps) {
  return (
    <footer className="bg-[#F7f4EB] text-[#0D1F08]">

      {/* TOP IMAGE */}
      <div className="relative w-full h-[50vh] md:h-[90vh]">
        <Image
          src={bgImage}
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <Image
              src="/assets/Group 1.svg"
              alt="Logo"
              width={70}
              height={70}
              className="mb-6 ml-10"
            />
            <p className="text-lg max-w-md mt-20 ml-10">
              Deep expertise, decisive courtroom presence
            </p>
          </div>

          <h3 className="text-3xl md:text-5xl font-semibold">
            Jones & Brown Legal
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm mt-20">
          <div>
            <p>hello@figma.com</p>
            <p>(555) 123-4567</p>
          </div>

          <div>
            <p>123 Candyland Lane</p>
              <p>Suite 123</p>
            <p>Los Angeles, CA</p>
          </div>

          <div className="flex flex-col gap-1">
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
        <div className="mt-16 text-sm">
          <p>
            Jones & Brown Legal <br />
            © 2025 All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
