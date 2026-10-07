import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200";

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-brand hover:-translate-y-0.5 hover:brightness-110",
  outline: "border border-line bg-card text-fg hover:border-brand hover:text-brand",
  white: "bg-white text-brand hover:bg-white/90",
};

/** Bouton polymorphe : <Button to="/x"> (lien interne), href (externe) ou bouton. */
export default function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
