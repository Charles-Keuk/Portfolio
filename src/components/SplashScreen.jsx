import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/content";

const DURATION = 3000; // durée d'affichage en ms
const STORAGE_KEY = "splash-seen";

const letters = profile.name.toUpperCase().split("");

// Particules décoratives (positions fixes, pas de hasard → rendu stable)
const dots = Array.from({ length: 18 }, (_, i) => ({
  x: (i * 37) % 100,
  y: (i * 53) % 100,
  size: 4 + (i % 4) * 3,
  duration: 3 + (i % 5) * 0.7,
  delay: (i % 7) * 0.25,
}));

/**
 * Écran d'accueil : logo animé pendant 3 s, puis le rideau se lève.
 * Affiché une fois par session (rechargement dans un nouvel onglet = revu).
 */
export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const close = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* stockage indisponible */
    }
  };

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // pas de scroll pendant l'intro
    const timer = setTimeout(close, DURATION);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previous;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label="Chargement du portfolio"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bg"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Halos de couleur */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-2/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />

          {/* Particules */}
          {dots.map((d, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-brand-gradient"
              style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0], y: [0, -30, -60] }}
              transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeOut" }}
            />
          ))}

          {/* Logo */}
          <div className="relative grid h-44 w-44 place-items-center sm:h-56 sm:w-56">
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border-2 border-brand/40"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.5], opacity: [0.7, 0] }}
                transition={{ duration: 2, delay: 0.5 + i * 0.8, repeat: Infinity, ease: "easeOut" }}
              />
            ))}
            <motion.span
              className="absolute inset-2 rounded-full border-2 border-dashed border-brand-2/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/logo.png"
              alt={`Logo ${profile.name}`}
              className="relative w-4/5 drop-shadow-[0_18px_30px_rgba(60,40,200,0.4)]"
              initial={{ scale: 0.2, opacity: 0, rotate: -25 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.1 }}
            />
          </div>

          {/* Nom */}
          <h1 className="mt-8 flex font-display text-4xl font-extrabold tracking-[0.2em] text-fg sm:text-5xl">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-gradient"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            {profile.role}
          </motion.p>

          {/* Barre de progression synchronisée sur les 3 secondes */}
          <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-line sm:w-64">
            <motion.div
              className="h-full rounded-full bg-brand-gradient"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
            />
          </div>

          <button
            onClick={close}
            className="absolute bottom-6 right-6 rounded-full border border-line bg-card px-4 py-2 text-xs font-semibold text-muted transition hover:border-brand hover:text-brand"
          >
            Passer
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
