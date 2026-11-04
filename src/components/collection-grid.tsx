import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/site";

export function CollectionGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14">
      {collections.map((item) => (
        <Link href={item.slug === "bespoke" ? "/bespoke" : `/collections/${item.slug}`} key={item.number} className="group">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D3C8]">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <span className="absolute top-5 left-5 text-white text-[10px] tracking-[.18em]">{item.number} / 06</span>
            <span className="absolute bottom-5 right-5 bg-[#F0EEE7] rounded-full p-3"><ArrowUpRight size={16}/></span>
          </div>
          <div className="flex justify-between items-baseline pt-5">
            <h3 className="display text-4xl">{item.title}</h3>
            <span className="eyebrow text-[#8B8174]">Explore</span>
          </div>
          <p className="text-xs text-[#746D63] mt-2">{item.subtitle}</p>
        </Link>
      ))}
    </div>
  );
}