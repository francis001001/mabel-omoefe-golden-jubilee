import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

export default function TwoJubilees() {
  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] text-center max-w-[1000px] mx-auto relative">
        <SectionMark>A Double Celebration</SectionMark>

        <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ink tracking-[0.02em] mt-4 mb-4">
          Two Jubilees, One Day
        </h2>

        <p className="font-cormorant text-xl md:text-2xl text-ink max-w-[650px] mx-auto mb-16 leading-[1.6]">
          The same Saturday that marks fifty radiant years of life also marks
          twenty-five years of love — a silver anniversary woven into a golden
          celebration.
        </p>

        <div className="grid md:grid-cols-[1fr_auto_1fr] grid-cols-1 gap-8 md:gap-12 items-center">
          {/* GOLD — 50 */}
          <div className="flex flex-col items-center">
            <div className="font-cormorant text-[clamp(5rem,10vw,8rem)] leading-none gold-gradient-text">
              50
            </div>
            <div className="font-cormorant text-xs tracking-[0.3em] uppercase text-gold-deep mt-4 mb-2 font-medium">
              Golden Jubilee
            </div>
            <div className="font-cormorant italic text-xl text-ink-soft">
              Half a century of grace
            </div>
          </div>

          {/* Ampersand divider */}
          <div className="flex flex-col items-center justify-center">
            <div className="hidden md:block w-px h-20 bg-gold/30" />
            <div className="font-cormorant italic text-5xl text-gold my-3">&amp;</div>
            <div className="hidden md:block w-px h-20 bg-gold/30" />
          </div>

          {/* SILVER — 25 */}
          <div className="flex flex-col items-center">
            <div
              className="font-cormorant text-[clamp(5rem,10vw,8rem)] leading-none"
              style={{
                background:
                  "linear-gradient(180deg, #e8e4d8 0%, #b8b3a5 50%, #8a8478 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              25
            </div>
            <div className="font-cormorant text-xs tracking-[0.3em] uppercase text-ink-soft mt-4 mb-2 font-medium">
              Silver Anniversary
            </div>
            <div className="font-cormorant italic text-xl text-ink-soft">
              A quarter century of love
            </div>
          </div>
        </div>

        <div className="mt-16 font-cormorant italic text-xl text-gold-deep">
          With Mr. Ohwodiame Edirin · since 2001
        </div>
      </section>
    </Reveal>
  );
}