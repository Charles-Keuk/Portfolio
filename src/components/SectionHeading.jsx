import Reveal from "./Reveal";

/** Titre de section : petit libellé violet + titre (mettre le mot clé dans <span className="text-gradient">). */
export default function SectionHeading({ eyebrow, children, text, align = "center" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
          <span className="h-1 w-1 rounded-full bg-brand" />
          {eyebrow}
          <span className="h-1 w-1 rounded-full bg-brand" />
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{children}</h2>
      {text && <p className="mt-4 leading-relaxed">{text}</p>}
    </Reveal>
  );
}
