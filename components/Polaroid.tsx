import Image from "next/image";

type PolaroidProps = {
  src?: string;
  alt?: string;
  caption?: string;
  placeholder?: string;
  className?: string;
};

export default function Polaroid({
  src,
  alt = "Mabel",
  caption,
  placeholder,
  className = "",
}: PolaroidProps) {
  return (
    <div
      className={`bg-white pt-3 px-3 pb-9 shadow-[0_12px_30px_-8px_rgba(26,20,16,0.25),0_2px_6px_rgba(26,20,16,0.1)] transition-transform duration-500 hover:rotate-0! hover:scale-105 hover:z-10 relative ${className}`}
    >
      <Pin />
      <div className="relative w-full h-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="200px"
          />
        ) : (
          <Placeholder text={placeholder} />
        )}
      </div>
      {caption && (
        <div className="absolute bottom-2 left-0 right-0 text-center font-cormorant text-base text-ink-soft">
          {caption}
        </div>
      )}
    </div>
  );
}

export function Pin() {
  return (
    <div
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-2"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, #d4ad62, #8a6420)",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.3)",
      }}
    />
  );
}

export function Placeholder({ text }: { text?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-gold-deep font-cormorant italic text-sm text-center p-2 bg-linear-to-br from-ivory-warm to-ivory-deep">
      <span className="text-gold text-xl mb-1">✦</span>
      {text}
    </div>
  );
}