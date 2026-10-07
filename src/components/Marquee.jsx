import { marqueeItems } from "../data/content";

/** Bandeau défilant violet sous le hero. */
export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden bg-brand-gradient py-4 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${k}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-lg font-semibold sm:text-xl">{item}</span>
                <span className="text-lg opacity-80">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
