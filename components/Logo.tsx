/**
 * Logo typographique de la Teinturerie des Jacobins (pas de logo connu à ce jour) :
 * un cintre au trait fin bleu nuit, une goutte bleu ciel à l'intérieur, « TEINTURERIE DES JACOBINS » en capitales fines,
 * « Pressing · Amiens » en petit. Prend la couleur du texte (currentColor) ; la goutte reste bleu ciel, sauf `mono`.
 * Pour le remplacer : changer ce composant, public/logo.svg et app/icon.svg (même emblème).
 */
export const HOOK = "M21 9.5a3 3 0 1 1 3 3v3.5";
export const BODY = "M24 16 5.5 30.5a1 1 0 0 0 .6 1.8h35.8a1 1 0 0 0 .6-1.8Z";
export const DROP = "M24 19.5c-2 2.9-3.3 4.6-3.3 6.2a3.3 3.3 0 0 0 6.6 0c0-1.6-1.3-3.3-3.3-6.2Z";

export function Emblem({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={HOOK} />
      <path d={BODY} />
      <path d={DROP} stroke={mono ? "currentColor" : "var(--color-sky, #9CC3DA)"} />
    </svg>
  );
}

export function Logo({ className = "", title, mono = false, tagline = true }: { className?: string; title?: string; mono?: boolean; tagline?: boolean }) {
  return (
    <svg viewBox={tagline ? "0 0 400 96" : "0 0 400 74"} className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(178.4 0) scale(0.9)" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={HOOK} />
        <path d={BODY} />
        <path d={DROP} stroke={mono ? "currentColor" : "var(--color-sky, #9CC3DA)"} strokeWidth="1.8" />
      </g>
      <text x="200" y="66" textAnchor="middle" fill="currentColor" style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 21, letterSpacing: "0.16em" }}>
        TEINTURERIE DES JACOBINS
      </text>
      {tagline && (
        <text x="200" y="89" textAnchor="middle" fill="currentColor" opacity="0.75" style={{ fontFamily: "var(--font-jost), Jost, 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: 9.5, letterSpacing: "0.34em" }}>
          PRESSING · AMIENS
        </text>
      )}
    </svg>
  );
}
