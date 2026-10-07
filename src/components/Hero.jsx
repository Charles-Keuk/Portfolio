import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin, FiZap, FiLayers, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import { profile } from "../data/content";

const socials = [
  { href: profile.socials.github, icon: FaGithub, label: "GitHub" },
  { href: profile.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: profile.socials.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Float({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
      transition={{
        opacity: { delay: 0.6 + delay, duration: 0.4 },
        scale: { delay: 0.6 + delay, duration: 0.4 },
        y: { delay: 1 + delay, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const picture = profile.photo || "/logo.png";
  const isLogo = !profile.photo;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-2/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />

      <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand"
          >
            <FiZap className="text-amber-400" /> Bienvenue sur mon portfolio
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Je suis {profile.name}
            <br />
            Développeur <span className="text-gradient whitespace-nowrap">Full-Stack</span>
            <br />
            Basé à <span className="text-gradient">{profile.city}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/portfolio">
              Voir mes projets <FiArrowRight />
            </Button>
            <Button href={profile.cvUrl} download variant="outline">
              <FiDownload /> Mon CV
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-fg transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <Icon size={16} />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm">
              <FiMapPin className="text-brand" /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Visuel : forme organique + logo/photo + badges flottants */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-md"
        >
          <div className="absolute inset-[6%] animate-blob bg-brand-gradient opacity-90 shadow-brand" />
          <div className="absolute inset-[6%] animate-blob bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_55%)]" />
          <img
            src={picture}
            alt={isLogo ? `Logo ${profile.name}` : profile.name}
            className={
              isLogo
                ? "absolute inset-0 m-auto w-[85%] drop-shadow-[0_20px_30px_rgba(30,20,120,0.35)]"
                : "absolute inset-x-0 bottom-0 mx-auto h-[95%] object-contain"
            }
          />

          <Float className="right-0 top-[38%] sm:-right-2">
            <span className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white shadow-xl sm:text-sm">
              Full-Stack Developer
            </span>
          </Float>
          <Float className="bottom-[18%] left-0 sm:-left-4" delay={0.3}>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold text-fg shadow-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-brand" /> UI/UX Designer
            </span>
          </Float>
          <Float className="bottom-[6%] right-[8%]" delay={0.6}>
            <span className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/60 px-4 py-2.5 text-xs font-semibold text-brand shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white sm:text-sm">
              <FiCheckCircle /> Problem Solver
            </span>
          </Float>
          <Float className="left-[8%] top-[6%]" delay={0.9}>
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card text-brand shadow-xl">
              <FiLayers size={20} />
            </span>
          </Float>
        </motion.div>
      </div>
    </section>
  );
}
