import { FiSend, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";
import Button from "./Button";

/** Bandeau « Travaillons ensemble » (dégradé bleu → violet). */
export default function CtaBand() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-10 text-white shadow-brand sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-white/10" />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-brand">
              <FiSend size={26} />
            </span>
            <div className="flex-1">
              <h2 className="!text-white text-2xl font-extrabold sm:text-3xl">Travaillons ensemble</h2>
              <p className="mt-1 text-white/85">
                Je suis disponible pour des missions freelance. Parlons de votre projet !
              </p>
            </div>
            <Button to="/contact" variant="white">
              Me recruter <FiArrowRight />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
