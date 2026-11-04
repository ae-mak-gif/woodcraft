"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#191A16] text-[#F0EEE7] pt-20 pb-8">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 pb-20">
          <div>
            <p className="eyebrow text-[#B49A76] mb-7">The next chapter begins here</p>
            <h2 className="display text-6xl md:text-8xl max-w-xl">Make room for something lasting.</h2>
          </div>
          <div className="md:justify-self-end md:self-end">
            <p className="text-white/60 text-sm max-w-sm leading-7 mb-8">Tell us what you have in mind. Whether you are choosing a piece or imagining something from the beginning, we would love to hear from you.</p>
            <a className="text-link text-white" href={whatsappLink("Hello WoodCraft, I would like to make an enquiry.")} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="rule !bg-white/20"/>
        <div className="grid md:grid-cols-3 gap-8 py-8 text-xs text-white/55">
          <div><span className="font-serif text-3xl text-white tracking-tight">woodcraft.</span><p className="mt-3">{site.location}</p></div>
          <div className="flex flex-col gap-3"><Link href="/#collections">Collections</Link><Link href="/bespoke">Bespoke commissions</Link><Link href="/impact">Our impact</Link></div>
          <div className="md:text-right"><p>WhatsApp {site.whatsappDisplay}</p><p className="mt-2">© {new Date().getFullYear()} WoodCraft. All rights reserved.</p></div>
        </div>
      </div>
    </footer>
  );
}