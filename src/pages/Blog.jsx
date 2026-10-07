import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { posts } from "../data/content";

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const categories = useMemo(() => ["Tous", ...new Set(posts.map((p) => p.category))], []);
  const [active, setActive] = useState("Tous");
  const list = active === "Tous" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        crumb="Blog"
        title="Mon"
        highlight="blog"
        text="Retours d'expérience, tutoriels et réflexions sur le développement pour le marché africain."
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                active === c
                  ? "bg-brand-gradient text-white shadow-brand"
                  : "border border-line bg-card text-fg hover:border-brand hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-line bg-card transition duration-300 hover:-translate-y-1.5 hover:shadow-brand"
            >
              <Link to={`/blog/${p.slug}`} className="block">
                <div className={`relative aspect-[16/8] bg-gradient-to-br ${p.gradient}`}>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand">
                    {p.category}
                  </span>
                  <span className="absolute -bottom-6 -right-2 font-display text-8xl font-extrabold text-white/20">
                    {"</>"}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar /> {formatDate(p.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiClock /> {p.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Lire l'article <FiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
