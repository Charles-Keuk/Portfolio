import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import SectionHeading from "../components/SectionHeading";
import ServiceRow from "../components/ServiceRow";
import DashboardMockup from "../components/DashboardMockup";
import ProjectCard from "../components/ProjectCard";
import { AboutVisual, StatsRow } from "../components/AboutBits";
import CtaBand from "../components/CtaBand";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { about, projects, services, testimonials } from "../data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="Mes services">
          Des solutions pour <span className="text-gradient">vos projets</span>
        </SectionHeading>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            {services.slice(0, 4).map((s, i) => (
              <ServiceRow key={s.title} service={s} index={i} />
            ))}
            <Reveal className="pt-2">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                Tous les services <FiArrowRight />
              </Link>
            </Reveal>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* Projets */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Mon portfolio">
            Mes derniers projets <span className="text-gradient">en ligne</span>
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button to="/portfolio" variant="outline">
              Voir tous les projets <FiArrowRight />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* À propos */}
      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <AboutVisual />
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="h-1 w-1 rounded-full bg-brand" /> À propos de moi
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Qui se cache derrière <span className="text-gradient">tout ce travail ?</span>
            </h2>
            <p className="mt-4 leading-relaxed">{about.paragraphs[0]}</p>
          </Reveal>
          <StatsRow className="mt-8" />
          <Reveal className="mt-8">
            <Button to="/a-propos">
              En savoir plus <FiArrowRight />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Témoignages (affichés seulement s'il y en a) */}
      {testimonials.length > 0 && (
        <section className="bg-surface py-20">
          <div className="container-x">
            <SectionHeading eyebrow="Témoignages">
              Ce que disent <span className="text-gradient">mes clients</span>
            </SectionHeading>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08} className="rounded-2xl border border-line bg-card p-6">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <FiStar key={k} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">« {t.text} »</p>
                  <p className="mt-4 font-semibold text-fg">{t.name}</p>
                  <p className="text-xs">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
