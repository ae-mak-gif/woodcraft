import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/site";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() { return collections.filter(c=>c.slug!=="bespoke").map(c=>({slug:c.slug})); }
export default async function CollectionPage({ params }: { params: Promise<{slug:string}> }) {
  const {slug}=await params;
  const item=collections.find(c=>c.slug===slug && c.slug!=="bespoke");
  if(!item) notFound();
  return <main className="pt-40">
    <section className="bg-[#211B16] text-[#F0EEE7] py-20"><div className="container-wide"><p className="eyebrow text-[#B49A76] mb-8">The collection / {item.number}</p><h1 className="display text-7xl md:text-[9rem]">{item.title}.</h1><p className="text-sm text-white/60 mt-8">{item.subtitle}</p></div></section>
    <section className="section-pad"><div className="container-wide grid md:grid-cols-2 gap-14 items-center"><div className="relative aspect-[4/5]"><Image src={item.image} alt={item.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/></div><div><p className="eyebrow text-[#8E795C] mb-6">Considered forms</p><h2 className="display text-5xl md:text-6xl">A collection to make your own.</h2><p className="text-sm leading-8 text-[#6E685F] mt-8">Explore ideas and references from the {item.title.toLowerCase()} collection. Final designs, materials, dimensions, finishes, availability and pricing are confirmed individually — we do not list unverified stock.</p><a href={whatsappLink(`Hello WoodCraft, I am interested in the ${item.title} collection. Please share more information.`)} target="_blank" rel="noreferrer" className="text-link mt-9">Enquire about this collection <ArrowUpRight size={14}/></a><p className="text-[10px] text-[#8A8175] mt-8">Photography is illustrative and is not a representation of confirmed WoodCraft inventory.</p><Link href="/#collections" className="block text-xs underline underline-offset-4 mt-12">Back to all collections</Link></div></div></section>
  </main>;
}