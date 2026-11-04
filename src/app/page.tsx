import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CollectionGrid } from "@/components/collection-grid";
import { values, gallery } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[760px] h-[100svh] max-h-[1100px] bg-[#211B16] text-[#F0EEE7] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90" alt="Sunlit architectural interior with natural timber and sculptural furniture" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17140f]/75 via-[#17140f]/25 to-transparent"/>
        <div className="container-wide relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <p className="eyebrow text-[#D2B991] mb-7">A considered approach to living</p>
          <h1 className="display text-[clamp(4.7rem,11vw,10.5rem)] max-w-5xl">A story<br/>carved in wood.</h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-sm leading-7 text-white/75 max-w-sm">Furniture shaped by nature. Refined by craft. Made to last. Discover a collection of considered forms and pieces made around the way you live.</p>
            <a href="#collections" className="text-link text-white w-fit">Discover WoodCraft <ArrowDown size={14}/></a>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 hidden md:block text-[9px] text-white/60 tracking-[.22em] [writing-mode:vertical-rl]">WOODCRAFT — FURNITURE HOUSE</div>
      </section>

      <section id="intro" className="section-pad">
        <div className="container-wide grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3"><p className="eyebrow text-[#8E795C]">An introduction / 001</p></div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="display text-5xl md:text-7xl leading-[.98]">Not simply furniture. A quieter expression of <span className="italic text-[#9B805A]">character.</span></h2>
            <p className="mt-9 text-sm leading-8 text-[#6E685F] max-w-xl">WoodCraft brings together considered design, the natural character of wood and the enduring value of making well. Explore finished collections or work with us to shape a piece that is entirely your own.</p>
            <Link href="/bespoke" className="text-link mt-8">Discover bespoke <ArrowUpRight size={14}/></Link>
          </div>
        </div>
      </section>

      <section id="collections" className="bg-[#E7E2D8] section-pad">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
            <div><p className="eyebrow text-[#8E795C] mb-5">The collection / 002</p><h2 className="display text-6xl md:text-8xl">Made for living.</h2></div>
            <p className="text-sm text-[#6E685F] leading-7 max-w-xs">A family of forms for the spaces we gather in, retreat to and make our own.</p>
          </div>
          <CollectionGrid/>
          <p className="text-[10px] text-[#82796D] mt-12">Images are illustrative placeholders and do not represent confirmed WoodCraft stock.</p>
        </div>
      </section>

      <section id="philosophy" className="section-pad bg-[#211B16] text-[#F0EEE7]">
        <div className="container-wide">
          <div className="grid md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-3"><p className="eyebrow text-[#B49A76]">Our philosophy / 003</p></div>
            <div className="md:col-span-8 md:col-start-5"><h2 className="display text-6xl md:text-8xl">The value is in how it is made.</h2><p className="text-sm text-white/55 leading-7 max-w-lg mt-8">Good furniture does not need to announce itself. It reveals its quality through material, proportion, detail and the years it remains part of a home.</p></div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-20">
            {values.map(v => <div key={v.n} className="border-t border-white/20 py-8 grid grid-cols-[60px_1fr] gap-5"><span className="eyebrow text-[#B49A76]">{v.n}</span><div><h3 className="display text-4xl mb-4">{v.title}</h3><p className="text-sm text-white/55 leading-7 max-w-md">{v.body}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="story" className="section-pad">
        <div className="container-wide grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] bg-[#D9D3C8]">
            <Image src={gallery[1]} alt="Thoughtfully composed interior with warm natural materials" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/>
            <span className="absolute bottom-5 left-5 text-[9px] tracking-[.2em] text-white uppercase">Material · Form · Feeling</span>
          </div>
          <div className="md:pl-10">
            <p className="eyebrow text-[#8E795C] mb-7">The WoodCraft story / 004</p>
            <h2 className="display text-6xl md:text-8xl">Rooted in material. Guided by purpose.</h2>
            <p className="text-sm leading-8 text-[#6E685F] mt-8 max-w-lg">Our story is still being written — in the materials we choose, the ideas we explore and the pieces we create. We believe the best work begins with listening: to the material, to the space and to the person who will live with it.</p>
            <p className="text-xs text-[#8A8175] mt-5">Company history and workshop details will be added once confirmed.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {gallery.map((src, i) => <div key={src} className="relative aspect-[4/5] md:aspect-[.92] overflow-hidden bg-[#D9D3C8]"><Image src={src} alt={["Natural timber and warm contemporary interior","Calm bedroom furniture inspiration","Sculptural dining furniture inspiration"][i]} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105"/><span className="absolute bottom-5 left-5 text-white eyebrow">WoodCraft / 00{i+5}</span></div>)}
      </section>

      <section className="section-pad bg-[#B49A76]">
        <div className="container-wide grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8"><p className="eyebrow text-[#3D3328] mb-6">Made around you / 005</p><h2 className="display text-6xl md:text-9xl text-[#211B16]">Your vision.<br/>Our craft.</h2></div>
          <div className="md:col-span-4"><p className="text-sm leading-7 text-[#40372D] mb-8">Some ideas do not fit a catalogue. Tell us about the space, the feeling and the piece you have in mind. Let us begin there.</p><Link href="/bespoke" className="text-link text-[#211B16]">Begin a commission <ArrowUpRight size={14}/></Link></div>
        </div>
      </section>
    </main>
  );
}