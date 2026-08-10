interface BadgeProps { text: string; variant?: "gold" | "navy" | "soft"; className?: string; }
const v = { gold: "bg-accent/10 text-accent border-accent/20", navy: "bg-primary/5 text-primary border-primary/10", soft: "bg-soft text-primary border-border" };
export default function Badge({ text, variant = "gold", className = "" }: BadgeProps) {
  return <span className={`inline-block text-[10px] tracking-[0.15em] font-semibold uppercase px-3 py-1.5 rounded-full border ${v[variant]} ${className}`}>{text}</span>;
}
