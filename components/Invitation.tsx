import Polaroid from "./Polaroid";
import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

export default function Invitation() {
  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] pb-[8vh] text-center max-w-[900px] mx-auto relative">
        {/* Side polaroids — hidden on mobile */}
        <Polaroid
          src="/images/4.jpeg"
          placeholder="img 4"
          className="hidden md:block absolute left-[2vw] top-[15%] w-[110px] h-[140px] -rotate-[7deg]"
        />
        <Polaroid
        src="/images/5.jpeg"
          placeholder="img 5"
          caption="forever young"
          className="hidden md:block absolute right-[2vw] bottom-[10%] w-[120px] h-[150px] rotate-[8deg]"
        />

        <SectionMark>The Invitation</SectionMark>

        <p className="font-cormorant text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.5] text-ink mb-8">
          You are warmly invited to the
          <br />
          most golden of celebrations —
        </p>

        <h2 className="font-cormorant font-medium text-[clamp(2.8rem,7vw,5rem)] text-ink tracking-[0.02em] my-6 relative inline-block">
          <span className="hidden md:block absolute top-1/2 -left-[110px] w-20 h-px bg-gold" />
          All White Party
          <span className="hidden md:block absolute top-1/2 -right-[110px] w-20 h-px bg-gold" />
        </h2>

        <p className="font-cormorant italic text-xl md:text-2xl text-gold-deep mb-4">
          in honour of half a century beautifully lived
        </p>
      </section>
    </Reveal>
  );
}