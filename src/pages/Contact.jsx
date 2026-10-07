import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiLoader,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const infos = [
  { icon: FiMail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Localisation", value: profile.location },
];

const socials = [
  { href: profile.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: profile.socials.github, icon: FaGithub, label: "GitHub" },
  { href: profile.socials.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
];

const fieldCls =
  "w-full rounded-xl border bg-bg px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-fg">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-rose-500">{error}</span>}
    </label>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (values.name.trim().length < 2) e.name = "Indiquez votre nom.";
    if (!EMAIL_RE.test(values.email.trim())) e.email = "Adresse e-mail invalide.";
    if (values.subject.trim().length < 3) e.subject = "Indiquez un sujet.";
    if (values.message.trim().length < 10) e.message = "Votre message est trop court (10 caractères minimum).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Champ piège anti-spam : un humain ne le remplit jamais
    if (formRef.current?.website?.value) {
      setStatus("success");
      return;
    }
    if (!validate()) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(
        "L'envoi d'e-mails n'est pas encore configuré (identifiants EmailJS manquants dans le fichier .env)."
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          reply_to: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          to_name: profile.name,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS :", err);
      setStatus("error");
      setErrorMsg(
        `L'envoi a échoué. Réessayez, ou écrivez-moi directement à ${profile.email}.`
      );
    }
  };

  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Entrons en"
        highlight="contact"
        text="Un projet, une question ou une opportunité ? Écrivez-moi, je réponds rapidement."
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {infos.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition hover:border-brand hover:shadow-brand">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="break-words font-semibold text-fg hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-fg">{value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-semibold text-fg">Retrouvez-moi aussi sur</p>
              <div className="mt-3 flex gap-2">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-fg transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rounded-3xl border border-line bg-card p-6 shadow-brand sm:p-8">
            <h2 className="text-2xl font-extrabold">Envoyez-moi un message</h2>

            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-12 text-center"
                  role="status"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <FiCheckCircle size={32} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">Message envoyé !</h3>
                  <p className="mt-2 max-w-xs text-sm">
                    Merci de m'avoir écrit. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-brand hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" error={errors.name}>
                      <input
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        autoComplete="name"
                        placeholder="Votre nom"
                        className={`${fieldCls} ${errors.name ? "border-rose-400" : "border-line"}`}
                      />
                    </Field>
                    <Field label="Adresse e-mail" error={errors.email}>
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        autoComplete="email"
                        placeholder="vous@exemple.com"
                        className={`${fieldCls} ${errors.email ? "border-rose-400" : "border-line"}`}
                      />
                    </Field>
                  </div>

                  <Field label="Sujet" error={errors.subject}>
                    <input
                      name="subject"
                      value={values.subject}
                      onChange={onChange}
                      placeholder="Ex. Création d'une application mobile"
                      className={`${fieldCls} ${errors.subject ? "border-rose-400" : "border-line"}`}
                    />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Décrivez votre projet…"
                      className={`${fieldCls} resize-y ${errors.message ? "border-rose-400" : "border-line"}`}
                    />
                  </Field>

                  {/* Champ piège (invisible) */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="flex items-start gap-2.5 rounded-xl border border-rose-400/40 bg-rose-500/10 p-3.5 text-sm text-rose-600 dark:text-rose-300"
                    >
                      <FiAlertCircle className="mt-0.5 shrink-0" /> {errorMsg}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <FiLoader className="animate-spin" /> Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer le message <FiSend />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </>
  );
}
