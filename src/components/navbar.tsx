"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["The collections", "/#collections"],
  ["Our philosophy", "/#philosophy"],
  ["Our story", "/#story"],
  ["Bespoke", "/bespoke"],
  ["Impact", "/impact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute z-50 top-0 left-0 w-full text-white">
      <div className="container-wide flex items-center justify-between py-7 border-b border-white/25">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)} aria-label="WoodCraft home">
          <span className="font-serif text-[29px] tracking-[-.06em]">woodcraft<span className="text-[#B49A76]">.</span></span>
          <span className="text-[8px] tracking-[.28em] uppercase text-white/65 mt-1">Furniture house</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-[10px] uppercase tracking-[.16em] text-white/80 hover:text-white transition-colors">{label}</Link>)}
        </nav>
        <Link href="/bespoke" className="hidden lg:flex items-center gap-3 text-[10px] uppercase tracking-[.16em] border border-white/60 px-5 py-3 hover:bg-white hover:text-[#211B16] transition-colors">Start a commission <ArrowUpRight size={13}/></Link>
        <button className="lg:hidden p-2" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="lg:hidden bg-[#211B16] px-6 py-8 flex flex-col gap-6">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="display text-3xl">{label}</Link>)}<Link href="/bespoke" onClick={() => setOpen(false)} className="text-xs uppercase tracking-widest">Start a commission ↗</Link></nav>}
    </header>
  );
}