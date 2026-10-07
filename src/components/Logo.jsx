import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" aria-label={`${profile.name} — accueil`} className={`flex items-center gap-2.5 ${className}`}>
      <img src="/logo.png" alt="" className="h-10 w-10 object-contain drop-shadow-sm" />
      <span className="font-display text-xl font-extrabold tracking-tight text-fg">
        {profile.name.toUpperCase()}
      </span>
    </Link>
  );
}
