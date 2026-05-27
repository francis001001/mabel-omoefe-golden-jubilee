import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

const contacts = [
  {
    role: "Husband",
    name: "Ohwodiame Edirin",
    phone: "0812 721 1990",
    tel: "+2348127211990",
  },
  {
    role: "Daughter",
    name: "Ohwodiame Deborah",
    phone: "0903 220 5019",
    tel: "+2349032205019",
  },
];

export default function Rsvp() {
  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] bg-emerald text-ivory text-center relative">
        <div className="absolute inset-[2vh_2vw] border border-gold-light/40 pointer-events-none" />

        <SectionMark variant="light">RSVP</SectionMark>
        <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ivory tracking-[0.02em] mt-4">
          Kindly Confirm
        </h2>

        <p className="font-cormorant text-xl md:text-2xl text-ivory/90 max-w-[650px] mx-auto mt-6 mb-16 leading-[1.6]">
          For enquiries or to confirm your attendance, please reach out:
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-[800px] mx-auto">
          {contacts.map((c) => (
            <div
              key={c.tel}
              className="py-10 px-8 border border-gold-light/30 transition-all duration-300 hover:border-gold-light hover:bg-gold-light/5 relative"
            >
              <span className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gold-light" />
              <div className="font-cormorant text-xs tracking-[0.3em] uppercase text-gold-light mb-3 font-medium">
                {c.role}
              </div>
              <div className="font-cormorant font-medium text-2xl md:text-3xl text-ivory mb-3 tracking-[0.02em]">
                {c.name}
              </div>
              <a
                href={`tel:${c.tel}`}
                className="font-cormorant font-medium text-2xl md:text-3xl text-gold-light tracking-[0.05em] inline-block py-2 px-4 border-b border-transparent hover:border-gold-light transition-colors"
              >
                {c.phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}