import Image from "next/image";
import Polaroid, { Placeholder } from "./Polaroid";

export default function Hero() {
  return (
    <section className="min-h-screen py-[4vh] px-[6vw] grid md:grid-cols-2 grid-cols-1 items-center gap-16 relative overflow-hidden">
      {/* Decorative frame */}
      <div className="absolute inset-[3vh_3vw] border border-gold/25 pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-[3vh] left-[3vw] w-10 h-10 border-2 border-gold border-r-0 border-b-0 z-3" />
      <div className="absolute top-[3vh] right-[3vw] w-10 h-10 border-2 border-gold border-l-0 border-b-0 z-3" />
      <div className="absolute bottom-[3vh] left-[3vw] w-10 h-10 border-2 border-gold border-r-0 border-t-0 z-3" />
      <div className="absolute bottom-[3vh] right-[3vw] w-10 h-10 border-2 border-gold border-l-0 border-t-0 z-3" />

      {/* Floating polaroid top-left (hidden on mobile) */}
      <Polaroid
        src="/images/1.jpeg"
        placeholder="img 2"
        caption="always smiling"
        className="hidden md:block absolute top-[8%] left-[3%] w-32.5 h-[160px] -rotate-[8deg]"
      />

      {/* Left text block */}
      <div className="md:pl-8 md:text-left text-center md:order-1 order-2 animate-fade-up">
        <div className="font-inter text-[0.7rem] tracking-[0.5em] uppercase text-gold-deep mb-8 flex items-center gap-4 md:justify-start justify-center">
          <span className="w-10 h-px bg-gold" />
          Save The Date
        </div>

        <div className="font-italiana text-[clamp(7rem,16vw,14rem)] leading-[0.85] gold-gradient-text -tracking-[0.05em] mb-2 relative inline-block">
          50
          <span className="absolute bottom-[0.2em] left-0 w-1/2 h-px bg-gradient-to-r from-gold to-transparent" />
        </div>

        <div className="font-cormorant italic font-light text-[clamp(1.2rem,2vw,1.6rem)] text-ink-soft mt-6 mb-1">
          Mrs. Ohwodiame
        </div>

        <h1 className="font-italiana text-[clamp(1.8rem,4vw,3rem)] text-ink tracking-[0.08em] leading-tight mb-6">
          MABEL
          <br />
          OMOEFE
        </h1>

        <div className="font-inter text-[0.65rem] tracking-[0.4em] uppercase text-gold-deep inline-flex items-center gap-4 md:justify-start justify-center">
          <span className="text-gold text-[0.55rem]">◆</span>
          A Golden Jubilee · Warri 2026
          <span className="text-gold text-[0.55rem]">◆</span>
        </div>
      </div>

      {/* Hero portrait */}
      <div className="flex justify-center items-center p-8 md:order-2 order-1">
        <div className="relative w-[min(420px,90%)] aspect-[3/4] -rotate-2">
          {/* Double gold border */}
          <div className="absolute -inset-[15px] border border-gold pointer-events-none" />
          <div className="absolute -inset-[25px] border border-gold/25 pointer-events-none" />

          {/* Portrait — swap for next/image when ready */}
          <div className="w-full h-full" style={{ filter: "sepia(0.08) saturate(0.95)" }}>
            {/* <Placeholder text="img 1 (hero portrait)" /> */}
            
              <Image src="/images/3.jpeg" alt="Mabel" sizes="100%" fill className="object-cover" priority />
           
          </div>
        </div>
      </div>

      {/* Floating polaroid bottom-right (hidden on mobile) */}
      <Polaroid
        src="/images/2.jpeg"
        placeholder="img 3"
        caption="our mama"
        className="hidden md:block absolute bottom-[10%] right-[5%] w-[140px] h-[170px] rotate-[6deg]"
      />
    </section>
  );
}