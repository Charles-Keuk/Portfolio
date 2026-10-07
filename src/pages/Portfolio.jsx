import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import CtaBand from "../components/CtaBand";
import { projectCategories, projects } from "../data/content";

export default function Portfolio() {
  const [active, setActive] = useState("Tous");
  const list = useMemo(
    () => (active === "Tous" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        crumb="Portfolio"
        title="Mes"
        highlight="réalisations"
        text="Une sélection de projets web, mobiles et back-end sur lesquels j'ai travaillé."
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
          {projectCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === c ? "text-white" : "border border-line bg-card text-fg hover:border-brand hover:text-brand"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-brand"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CtaBand />
    </>
  );
}
