import { motion } from "framer-motion";
import { FiHome, FiBarChart2, FiFolder, FiMessageSquare, FiUsers, FiSettings } from "react-icons/fi";

const sideIcons = [FiHome, FiBarChart2, FiFolder, FiMessageSquare, FiUsers, FiSettings];

const rows = [
  { name: "OptimRoute CM", pct: 82 },
  { name: "Plateforme notifs", pct: 64 },
  { name: "VORA", pct: 91 },
];

/** Maquette de tablette avec un mini tableau de bord animé (illustration décorative). */
export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md px-3 sm:px-0" aria-hidden="true">
      <div className="absolute -inset-3 rounded-[3rem] bg-brand-gradient opacity-20 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2rem] border-[6px] border-slate-900 bg-card p-3 shadow-brand dark:border-slate-700"
      >
        <div className="flex gap-3">
          <div className="hidden flex-col items-center gap-3 rounded-xl bg-surface px-2 py-3 sm:flex">
            {sideIcons.map((Icon, i) => (
              <span
                key={i}
                className={`grid h-7 w-7 place-items-center rounded-lg ${
                  i === 0 ? "bg-brand-gradient text-white" : "text-muted"
                }`}
              >
                <Icon size={13} />
              </span>
            ))}
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <div>
              <p className="font-display text-sm font-bold text-fg">Bonjour, Charles 👋</p>
              <p className="text-[10px]">Voici l'activité de vos projets</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-line p-2.5">
                <p className="text-[9px] uppercase tracking-wide">Revenus</p>
                <p className="font-display text-sm font-extrabold text-fg">1 245 000 F</p>
              </div>
              <div className="rounded-xl border border-line p-2.5">
                <p className="text-[9px] uppercase tracking-wide">Livraisons</p>
                <p className="font-display text-sm font-extrabold text-fg">853</p>
              </div>
            </div>

            <div className="rounded-xl border border-line p-2.5">
              <svg viewBox="0 0 300 100" className="h-24 w-full">
                <defs>
                  <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C30,70 40,50 70,55 S110,85 140,60 S190,20 220,35 S270,15 300,10 L300,100 L0,100 Z"
                  fill="url(#area)"
                />
                <motion.path
                  d="M0,80 C30,70 40,50 70,55 S110,85 140,60 S190,20 220,35 S270,15 300,10"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                />
              </svg>
            </div>

            <div className="space-y-2 rounded-xl border border-line p-2.5">
              {rows.map((r, i) => (
                <div key={r.name}>
                  <div className="flex justify-between text-[9px]">
                    <span className="font-semibold text-fg">{r.name}</span>
                    <span>{r.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface">
                    <motion.div
                      className="h-full rounded-full bg-brand-gradient"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
