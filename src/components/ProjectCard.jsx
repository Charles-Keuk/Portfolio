import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";

/** Vignette générée en CSS (remplacez par une capture : ajoutez `image: "/projets/x.png"` au projet). */
function Thumb({ project }) {
  const Icon = project.icon;
  if (project.image) {
    return <img src={project.image} alt={project.title} className="h-full w-full object-cover" />;
  }
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      <div className="absolute inset-x-5 top-5 rounded-lg bg-white/90 p-3 shadow-lg dark:bg-slate-900/80">
        <div className="mb-2 flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-3/4 rounded bg-slate-300 dark:bg-slate-600" />
          <div className="h-1.5 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-end gap-1 pt-1">
            {[40, 65, 30, 80, 55, 90].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h * 0.3}px` }}
                className="w-full rounded-sm bg-gradient-to-t from-violet-600 to-blue-500"
              />
            ))}
          </div>
        </div>
      </div>
      <Icon className="absolute -bottom-4 -right-3 text-white/25" size={110} />
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-brand"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition duration-500 group-hover:scale-105">
          <Thumb project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">{project.category}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <FiArrowRight className="-rotate-45 transition group-hover:rotate-0" />
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
              {t}
            </span>
          ))}
        </div>

        {(project.demo || project.code) && (
          <div className="mt-4 flex gap-4 border-t border-line pt-4 text-sm font-semibold">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                Démo <FiArrowUpRight />
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-fg hover:text-brand">
                <FiGithub /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
