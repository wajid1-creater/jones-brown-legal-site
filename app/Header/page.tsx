// app/header/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0D1F08] text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link href="" className="flex items-center">
          <img
            src="/assets/logo-.svg"
            alt=""
            width={50}
            height={40}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link href="/Servicessection">Services</Link>
          <Link href="/consultation">Schedule a Consult</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}
