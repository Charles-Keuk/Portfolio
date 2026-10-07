import { motion } from "framer-motion";
import { about, profile } from "../data/content";
import Reveal from "./Reveal";

/** Bloc avec le visuel (photo ou logo) + pastilles flottantes. Utilisé sur Accueil et À propos. */
export function AboutVisual() {
  const picture = profile.photo || "/logo.png";
  const isLogo = !profile.photo;
  return (
    <Reveal className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-[8%] animate-blob bg-brand-gradient shadow-brand" />
      <img
        src={picture}
        alt={`${profile.name}`}
        className={
          isLogo
            ? "absolute inset-0 m-auto w-[74%] drop-shadow-[0_20px_30px_rgba(30,20,120,0.35)]"
            : "absolute inset-x-0 bottom-0 mx-auto h-[95%] object-contain"
        }
      />
      {["Dashboard", "Wireframe", "Web Designer", "UI/UX Design"].map((label, i) => (
        <motion.span
          key={label}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className={`absolute rounded-xl border border-line bg-card px-3 py-2 text-xs font-semibold text-fg shadow-lg ${
            [
              "left-0 top-[26%]",
              "right-0 top-[18%]",
              "left-[2%] bottom-[16%]",
              "right-[2%] bottom-[8%]",
            ][i]
          }`}
        >
          {label}
        </motion.span>
      ))}
    </Reveal>
  );
}

export function StatsRow({ className = "" }) {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {about.stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <p className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
