interface SectionHeadingProps {
  eyebrow?: string; title: string; subtitle?: string; centered?: boolean; className?: string;
}
export default function SectionHeading({ eyebrow, title, subtitle, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
