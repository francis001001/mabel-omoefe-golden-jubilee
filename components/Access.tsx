import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

const policies = [
  { heading: "Entry", text: "Strictly by invitation" },
  { heading: "Children", text: "No children, please" },
];

export default function Access() {
  return (
    <Reveal>
      <section className="py-[10vh] px-[6vw] text-center max-w-[1000px] mx-auto">
        <SectionMark>Access Policy</SectionMark>
        <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ink tracking-[0.02em] mt-4">
          Kindly Note
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {policies.map((p) => (
            <div
              key={p.heading}
              className="py-10 px-8 border border-gold/25 bg-ivory/60 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:-translate-y-1"
            >
              <div className="font-cormorant text-4xl text-gold mb-4">✶</div>
              <div className="font-cormorant text-xs tracking-[0.3em] uppercase text-gold-deep mb-4 font-medium">
                {p.heading}
              </div>
              <p className="font-cormorant text-xl md:text-2xl text-ink leading-[1.5]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}