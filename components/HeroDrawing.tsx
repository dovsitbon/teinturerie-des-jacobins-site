/**
 * Hero sans photo : grand cintre et chemise au trait fin, sur bleu nuit, côté droit (au-dessus du texte sur mobile).
 * Remplacé automatiquement par la photo dès que data/photos.json → hero est renseigné.
 */
export function HeroDrawing() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <svg viewBox="0 0 120 112" className="absolute top-[6%] end-[-18%] h-[58%] w-auto text-sky/30 sm:end-[-6%] lg:text-sky/45 lg:top-1/2 lg:end-[6%] lg:h-[82%] lg:-translate-y-1/2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M53.5 13a6.5 6.5 0 1 1 6.5 6.5V26L13.2 52.4a1.2 1.2 0 0 0 .6 2.2h92.4a1.2 1.2 0 0 0 .6-2.2L60 26" stroke="currentColor" strokeWidth="0.45" />
        <g stroke="currentColor" strokeWidth="0.35">
          <path d="M45.5 35 30 43.8 21.5 61l9.3 3.6 2.7-5.4V98h53V59.2l2.7 5.4 9.3-3.6L90 43.8 74.5 35C70 39.5 65 41.5 60 41.5S50 39.5 45.5 35Z" fill="var(--color-ink)" />
          <path d="M45.5 35 60 50.5 74.5 35M60 50.5V98M33.5 59.2V52M86.5 59.2V52" />
          <path d="M63.5 58h.01M63.5 68h.01M63.5 78h.01M63.5 88h.01" strokeWidth="1" />
        </g>
        <path d="M60 104c-1.8 2.6-3 4.2-3 5.6a3 3 0 0 0 6 0c0-1.4-1.2-3-3-5.6Z" stroke="var(--color-brass)" strokeWidth="0.45" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,var(--color-ink)_35%,transparent)] lg:hidden" />
    </div>
  );
}
