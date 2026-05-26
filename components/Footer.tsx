export default function Footer() {
  return (
    <footer className="py-16 px-[6vw] pb-12 text-center bg-ink text-ivory relative">
      <div className="font-italiana text-5xl gold-gradient-text-footer mb-4">
        M · 50
      </div>
      <p className="font-cormorant italic text-xl text-ivory/70 max-w-[500px] mx-auto mb-8 leading-[1.6]">
        &ldquo;Grey hair is a crown of glory; it is gained by a righteous life.&rdquo; — Proverbs 16:31
      </p>
      <div className="font-inter text-[0.65rem] tracking-[0.4em] uppercase text-gold/70">
        Mabel @ 50 · 25 Years of Marriage · Warri · June 2026
      </div>
      <div className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-ivory/30 mt-6">
        Created with love by{" "}
        <a
          href="https://www.softtechedgeltd.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory/50 hover:text-gold/70 transition-colors"
        >
          Soft Tech Edge Limited
        </a>
      </div>
    </footer>
  );
}