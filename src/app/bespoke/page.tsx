"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export default function BespokePage() {
  const [form, setForm] = useState({ name: "", email: "", piece: "Dining table", details: "", location: "" });
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "Hello WoodCraft, I would like to discuss a bespoke commission.",
      `Name: ${form.name}`, `Email: ${form.email}`, `Piece: ${form.piece}`,
      `Location: ${form.location}`, `Project details: ${form.details}`
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <main className="pt-40">
      <section className="bg-[#211B16] text-[#F0EEE7] py-24 md:py-36">
        <div className="container-wide"><p className="eyebrow text-[#B49A76] mb-8">Bespoke commissions / 01</p><h1 className="display text-7xl md:text-[10rem] max-w-5xl">Made around<br/>your idea.</h1><p className="text-sm text-white/60 leading-8 max-w-lg mt-10">A personal process, shaped by conversation. Share what you are imagining — from a single statement piece to a considered set for a space.</p></div>
      </section>
      <section className="section-pad">
        <div className="container-wide grid md:grid-cols-12 gap-14">
          <div className="md:col-span-4"><p className="eyebrow text-[#8E795C] mb-6">Start a conversation</p><h2 className="display text-5xl md:text-6xl">Tell us what you have in mind.</h2><p className="text-sm leading-7 text-[#6E685F] mt-7">The details can evolve. A rough idea, a reference image or a description of your space is a good place to begin.</p><p className="text-xs text-[#8A8175] mt-8">We will use your details only to respond to this enquiry.</p></div>
          <form onSubmit={submit} className="md:col-span-7 md:col-start-6 space-y-7">
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="text-xs tracking-wide">Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="block w-full bg-transparent border-b border-[#AAA397] py-4 outline-none focus:border-[#9B805A] mt-2" placeholder="Name"/></label>
              <label className="text-xs tracking-wide">Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="block w-full bg-transparent border-b border-[#AAA397] py-4 outline-none focus:border-[#9B805A] mt-2" placeholder="you@example.com"/></label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="text-xs tracking-wide">What are you imagining?<select value={form.piece} onChange={e=>setForm({...form,piece:e.target.value})} className="block w-full bg-transparent border-b border-[#AAA397] py-4 outline-none mt-2"><option>Dining table</option><option>Living room furniture</option><option>Bedroom furniture</option><option>Office furniture</option><option>Outdoor furniture</option><option>Other / multiple pieces</option></select></label>
              <label className="text-xs tracking-wide">Where are you based?<input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="block w-full bg-transparent border-b border-[#AAA397] py-4 outline-none mt-2" placeholder="City and country"/></label>
            </div>
            <label className="text-xs tracking-wide block">Tell us a little about the project<textarea required rows={5} value={form.details} onChange={e=>setForm({...form,details:e.target.value})} className="block w-full bg-transparent border-b border-[#AAA397] py-4 outline-none focus:border-[#9B805A] mt-2 resize-y" placeholder="Dimensions, materials, style, intended space, timing or anything else you would like us to know..."/></label>
            <button type="submit" className="inline-flex items-center gap-4 bg-[#211B16] text-[#F0EEE7] px-7 py-5 text-[10px] tracking-[.16em] uppercase hover:bg-[#9B805A] transition-colors">Send via WhatsApp <ArrowUpRight size={15}/></button>
            {sent && <p className="text-xs text-[#6D765D] flex items-center gap-2"><Check size={14}/> WhatsApp has been opened with your enquiry. Please send the message there to complete submission.</p>}
            <p className="text-[10px] text-[#8A8175]">This form prepares a WhatsApp message; it does not submit or store your details on this website.</p>
          </form>
        </div>
      </section>
      <section className="bg-[#E7E2D8] py-12"><div className="container-wide flex flex-col md:flex-row justify-between gap-5 text-xs text-[#6E685F]"><span>Prefer a direct conversation?</span><a href={whatsappLink("Hello WoodCraft, I would like to discuss a bespoke commission.")} target="_blank" rel="noreferrer" className="underline underline-offset-4">WhatsApp {site.whatsappDisplay} ↗</a></div></section>
    </main>
  );
}