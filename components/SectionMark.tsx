type Props = {
  children: React.ReactNode;
  variant?: "default" | "light";
};

export default function SectionMark({ children, variant = "default" }: Props) {
  const lineColor = variant === "light" ? "bg-gold-light" : "bg-gold";
  const textColor = variant === "light" ? "text-gold-light" : "text-gold-deep";

  return (
    <div
      className={`inline-flex items-center gap-4 font-inter text-xs tracking-[0.3em] uppercase mb-10 font-medium ${textColor}`}
    >
      <span className={`w-10 h-px ${lineColor}`} />
      {children}
      <span className={`w-10 h-px ${lineColor}`} />
    </div>
  );
}