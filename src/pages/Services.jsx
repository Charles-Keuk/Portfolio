import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { process, services } from "../data/content";

export default function Services() {
  return (
    <>
      <PageHeader
        crumb="Services"
        title="Mes"
        highlight="services"
        text="De l'idée à la mise en ligne, je vous accompagne sur toute la chaîne : design, développement et déploiement."
      />

      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-brand"
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-gradient opacity-0 blur-2xl transition group-hover:opacity-30" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Méthode" text="Un processus simple et transparent, avec des points réguliers.">
            Comment je <span className="text-gradient">travaille</span>
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="relative rounded-2xl border border-line bg-card p-6">
                <span className="font-display text-5xl font-extrabold text-gradient opacity-90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
