import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ServiceRow({ service, index = 0, compact = false }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to="/services"
        className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition duration-300 hover:translate-x-1 hover:border-brand hover:shadow-brand"
      >
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand-gradient group-hover:text-white">
          <Icon size={24} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold">{service.title}</h3>
          {!compact && <p className="mt-0.5 text-sm leading-snug">{service.text}</p>}
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
          <FiArrowRight />
        </span>
      </Link>
    </motion.div>
  );
}
