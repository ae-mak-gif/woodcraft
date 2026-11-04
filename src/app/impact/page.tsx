import Image from "next/image";
import { gallery } from "@/data/site";

const principles = [
  ["01", "Choose with care", "Responsible material choices begin with transparency. We aim to make sourcing information clear as our material standards and supplier relationships are confirmed."],
  ["02", "Make to keep", "A well-considered piece should serve beyond a season. We value durability, timeless proportions and the possibility of care and repair."],
  ["03", "Waste less", "Thoughtful planning and efficient use of material matter. Our production practices and measurable commitments will be published as they are verified."]
];

export default function ImpactPage() {
  return <main className="pt-40">
    <section className="bg-[#211B16] text-[#F0EEE7] py-24 md:py-36"><div className="container-wide"><p className="eyebrow text-[#B49A76] mb-8">A longer view / 01</p><h1 className="display text-7xl md:text-[10rem] max-w-5xl">Built to<br/>last.</h1><p className="text-sm leading-8 text-white/60 max-w-lg mt-10">We believe the most meaningful form of sustainability is creating things worth keeping. Longevity begins with the decisions made before a piece takes shape.</p></div></section>
    <section className="section-pad"><div className="container-wide grid md:grid-cols-2 gap-16 items-center"><div className="relative aspect-[4/5]"><Image src={gallery[2]} alt="Natural materials and considered furniture in a warm interior" fill className="object-cover"/></div><div><p className="eyebrow text-[#8E795C] mb-7">Our point of view / 02</p><h2 className="display text-6xl md:text-7xl">A piece should outlive a passing trend.</h2><p className="text-sm leading-8 text-[#6E685F] mt-8">WoodCraft's impact commitments are being developed around responsible sourcing, durability, repair and considered production. We will share specific materials, certifications and measurable outcomes only when they can be substantiated.</p></div></div></section>
    <section className="bg-[#E7E2D8] section-pad"><div className="container-wide"><p className="eyebrow text-[#8E795C] mb-6">Principles in progress / 03</p><h2 className="display text-6xl md:text-8xl mb-16">Intent, made tangible.</h2><div className="grid md:grid-cols-3 gap-10">{principles.map(([n,t,b])=><article key={n} className="border-t border-[#AAA397] pt-7"><p className="eyebrow text-[#9B805A] mb-8">{n}</p><h3 className="display text-4xl mb-5">{t}</h3><p className="text-sm text-[#6E685F] leading-7">{b}</p></article>)}</div></div></section>
  </main>;
}