/** En-tête de page intérieure (À propos, Services, …). */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function PageHeader({ title, highlight, text, crumb }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-brand-2/20 blur-3xl" />
      <div className="container-x relative py-14 text-center sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="mb-4 flex items-center justify-center gap-1 text-xs font-medium">
            <Link to="/" className="hover:text-brand">
              Accueil
            </Link>
            <FiChevronRight />
            <span className="text-brand">{crumb}</span>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          {text && <p className="mx-auto mt-4 max-w-2xl leading-relaxed">{text}</p>}
        </motion.div>
      </div>
    </section>
  );
}
