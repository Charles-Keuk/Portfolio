import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks, profile, services } from "../data/content";

const socials = [
  { href: profile.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: profile.socials.github, icon: FaGithub, label: "GitHub" },
  { href: profile.socials.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
];

const colTitle = "font-display text-sm font-bold uppercase tracking-wider text-fg";
const linkCls = "text-sm transition hover:text-brand";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Je construis des solutions digitales qui aident les entreprises à grandir plus vite et plus intelligemment.
          </p>
          <div className="mt-5 flex gap-2">
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
          </div>
        </div>

        <div>
          <h3 className={colTitle}>Liens rapides</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/services" className={linkCls}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <FiMail className="mt-0.5 shrink-0 text-brand" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-brand">
                {profile.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FiPhone className="mt-0.5 shrink-0 text-brand" />
              <span>{profile.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FiMapPin className="mt-0.5 shrink-0 text-brand" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs">
        © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
