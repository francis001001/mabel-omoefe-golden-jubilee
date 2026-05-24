import Polaroid from "./Polaroid";
import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

const details = [
  {
    title: "The Date",
    main: "Saturday\n20 June 2026",
    sub: "A Saturday of joy, song, and gold.",
    span: false,
  },
  {
    title: "The Time",
    main: "12:00 Noon",
    italicMain: "till mama calls",
    sub: "Come early. Stay late. Dance longer.",
    span: false,
  },
  {
    title: "The Venue",
    main: "Glorious Joy & Amis Event Centre",
    sub: "Opposite Bodouin Hotel & Suites, Ugbolokposo, Warri, Delta State.",
    span: true,
  },
];

export default function Details() {
  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] max-w-[1200px] mx-auto relative">
        <Polaroid
          src="/images/13.jpeg"
          placeholder="img 7"
          className="hidden md:block absolute top-[8%] right-[4vw] w-[130px] h-[160px] rotate-[7deg] z-[2]"
        />
        <Polaroid
          src="/images/14.jpeg"
          placeholder="img 8"
          caption="queen"
          className="hidden md:block absolute bottom-[10%] left-[3vw] w-[120px] h-[150px] -rotate-[6deg] z-[2]"
        />

        <div className="text-center">
          <SectionMark>Event Details</SectionMark>
          <h2 className="font-italiana text-[clamp(2rem,5vw,3.5rem)] text-ink tracking-[0.08em] mt-4">
            The Affair
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-16 mt-16 max-w-[800px] mx-auto">
          {details.map((d) => (
            <div
              key={d.title}
              className={`border-t border-gold/25 pt-8 relative ${
                d.span ? "md:col-span-2" : ""
              }`}
            >
              <span className="absolute top-[-1px] left-0 w-[60px] h-0.5 bg-gold" />
              <span className="font-italiana text-2xl text-gold mb-3 block">✦</span>
              <div className="font-inter text-[0.7rem] tracking-[0.4em] uppercase text-gold-deep mb-4">
                {d.title}
              </div>
              <div className="font-italiana text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-tight mb-2 tracking-[0.02em] whitespace-pre-line">
                {d.main}
                {d.italicMain && (
                  <>
                    <br />
                    <em className="font-cormorant italic text-xl">
                      {d.italicMain}
                    </em>
                  </>
                )}
              </div>
              <div className="font-cormorant italic text-lg text-ink-soft leading-[1.5]">
                {d.sub}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}