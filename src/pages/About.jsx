import { FiDownload } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { AboutVisual, StatsRow } from "../components/AboutBits";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";
import { about, profile, skillGroups, timeline } from "../data/content";

export default function About() {
  return (
    <>
      <PageHeader
        crumb="À propos"
        title="À propos de"
        highlight="moi"
        text="Développeur passionné, étudiant en génie logiciel, je transforme des idées en produits concrets."
      />

      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <AboutVisual />
        <div>
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Développeur, designer et <span className="text-gradient">résolveur de problèmes</span>
            </h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>
          <StatsRow className="mt-8" />
          <Reveal className="mt-8">
            <Button href={profile.cvUrl} download>
              <FiDownload /> Télécharger mon CV
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Compétences */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Compétences" text="Les technologies et outils que j'utilise au quotidien.">
            Ma <span className="text-gradient">boîte à outils</span>
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g, i) => {
              const GroupIcon = g.icon;
              return (
                <Reveal key={g.title} delay={i * 0.07} className="rounded-2xl border border-line bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white">
                      <GroupIcon size={20} />
                    </span>
                    <h3 className="text-lg font-bold">{g.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {g.items.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                      >
                        <Icon className="text-brand" /> {name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="Parcours">
          Mon <span className="text-gradient">parcours</span>
        </SectionHeading>
        <ol className="relative mx-auto mt-12 max-w-2xl border-l-2 border-line pl-8">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 0.1} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-bg bg-brand-gradient ring-2 ring-brand" />
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">{t.place}</p>
              <h3 className="mt-1 text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
