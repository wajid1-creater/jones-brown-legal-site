// app/header/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0D1F08] text-white px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo-1 copy.svg"
            alt="Jones & Brown Legal"
            width="50"
            height="40"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/services">Services</Link>
          <Link href="/consultation">Schedule a Consult</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-6 text-lg">
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/consultation" onClick={() => setOpen(false)}>
            Schedule a Consult
          </Link>
        </div>
      )}
    </header>
  );
}
