"use client";

import { useEffect, useState, type CSSProperties } from "react";

export const INTRO_KEY = "teinturerie-des-jacobins-intro";
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

// Cintre (crochet + corps) et chemise, viewBox 120 × 104. Les épaules de la chemise suivent la pente du cintre.
const HANGER = "M53.5 13a6.5 6.5 0 1 1 6.5 6.5V26L13.2 52.4a1.2 1.2 0 0 0 .6 2.2h92.4a1.2 1.2 0 0 0 .6-2.2L60 26";
const SHIRT = "M45.5 35 30 43.8 21.5 61l9.3 3.6 2.7-5.4V98h53V59.2l2.7 5.4 9.3-3.6L90 43.8 74.5 35C70 39.5 65 41.5 60 41.5S50 39.5 45.5 35Z";

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond blanc, un cintre se dessine au trait bleu nuit, une chemise s'y pose en fondu,
 * « TEINTURERIE DES JACOBINS » apparaît, puis fondu sur le hero.
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout). Bouton « Passer ».
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <svg viewBox="0 0 120 104" className="h-28 w-auto overflow-visible sm:h-32" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path className="intro-draw" pathLength={1} d={HANGER} stroke="currentColor" strokeWidth="1.6" />
        <g className="intro-shirt" stroke="currentColor" strokeWidth="1.2">
          <path d={SHIRT} fill="var(--color-paper)" />
          <path d="M45.5 35 60 50.5 74.5 35M60 50.5V98" />
          <path d="M63.5 58h.01M63.5 68h.01M63.5 78h.01M63.5 88h.01" strokeWidth="2" />
          <path d="M33.5 59.2V52M86.5 59.2V52" opacity=".5" />
        </g>
      </svg>
      <p className="intro-fade mt-8 ps-[0.2em] font-[family-name:var(--font-cormorant)] text-[1.45rem] leading-none tracking-[0.2em] sm:text-[1.85rem]" style={at(0.62)} translate="no" aria-hidden="true">
        TEINTURERIE DES JACOBINS
      </p>
      <p className="intro-fade mt-4 ps-[0.34em] text-[0.6875rem] tracking-[0.34em] text-muted uppercase" style={at(0.76)} translate="no" aria-hidden="true">
        Pressing · Amiens
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(INTRO_KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute end-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
