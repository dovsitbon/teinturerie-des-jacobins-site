// Icônes au trait fin, dessinées pour le site (1,25 px, bouts arrondis).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.9A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);
export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} rtl:-scale-x-100`} {...base}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);
export const CloseIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const PinIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const CameraIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.2l1.5-2h5.6l1.5 2h2.2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
    <circle cx="12" cy="12.8" r="3.4" />
  </svg>
);
export const ClockIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

/** Étiquette de pressing, avec son œillet et sa ficelle. */
export const TagIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M10.5 4H19a1 1 0 0 1 1 1v8.5a1 1 0 0 1-.3.7l-6.8 6.8a1 1 0 0 1-1.4 0l-7.5-7.5a1 1 0 0 1 0-1.4l6.8-6.8a1 1 0 0 1 .7-.3Z" />
    <circle cx="16" cy="8" r="1.4" />
    <path d="M16 6.6C15 3 12 2 9.5 3" />
  </svg>
);
export const DropIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3.5c-3.2 4.6-5.5 7.9-5.5 10.9a5.5 5.5 0 0 0 11 0c0-3-2.3-6.3-5.5-10.9Z" />
    <path d="M9.4 14.6a2.7 2.7 0 0 0 2.4 2.6" />
  </svg>
);
export const MapIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3.5 6.5 9 4.5l6 2 5.5-2v13l-5.5 2-6-2-5.5 2Z" />
    <path d="M9 4.5v13M15 6.5v13" />
  </svg>
);

// Vêtements (trait fin, viewBox 24), pour les tuiles et les emplacements photo.
export const HangerIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M10.2 6.2a1.8 1.8 0 1 1 1.8 1.8v1.6" />
    <path d="M12 9.6 2.8 15.6a.6.6 0 0 0 .3 1.1h17.8a.6.6 0 0 0 .3-1.1Z" />
  </svg>
);
export const ShirtIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3.5 4 5.8 2.5 10.5l3 1 .8-1.8V20.5h11.4V9.7l.8 1.8 3-1L20 5.8 15 3.5" />
    <path d="M9 3.5 12 7l3-3.5M12 7v13.5" />
    <path d="M12.9 10.2h.01M12.9 13.4h.01M12.9 16.6h.01" strokeWidth="1.6" />
  </svg>
);
export const SuitIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M8.6 3.5 4.2 5.4 3 20.5h7.8L12 13l1.2 7.5H21L19.8 5.4l-4.4-1.9" />
    <path d="M8.6 3.5 12 13l3.4-9.5M8.6 3.5 7.4 8.4l1.9 1-1 1.2M15.4 3.5l1.2 4.9-1.9 1 1 1.2" />
    <path d="M10.8 3.5h2.4L12 5.6Z" />
  </svg>
);
export const CoatIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3 4.6 5 3.5 21h7l1.5-.8 1.5.8h7L19.4 5 15 3" />
    <path d="M9 3l3 5.5L15 3M12 8.5v11.7M9 3 8 8l2.2 1.6M15 3l1 5-2.2 1.6" />
    <path d="M13.3 12h.01M13.3 15.5h.01M6.2 14.5h2.6M15.2 14.5h2.6" strokeWidth="1.4" />
  </svg>
);
export const DressIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9.4 3v3.4L8 10.2l-4.2 10.3h16.4L16 10.2l-1.4-3.8V3" />
    <path d="M9.4 6.4c1.6 1 3.6 1 5.2 0M8 10.2h8" />
    <path d="M10 13.5 8.4 20.5M14 13.5l1.6 7" opacity=".6" />
  </svg>
);
export const LeatherIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M8.5 3.5 4 5.5 2.6 15.5l2.6.6L6 11v8.5h12V11l.8 5.1 2.6-.6L20 5.5l-4.5-2" />
    <path d="M8.5 3.5 10.5 7l-2.4 2M15.5 3.5 13.5 7l2.4 2M12 7.5v12" />
    <path d="M12 7.5l-1.2 1M8 15.5h2.4" />
  </svg>
);
export const DuvetIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3.5 8.5c0-1.7 1.3-3 3-3h11c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3h-11a3 3 0 0 1-3-3Z" />
    <path d="M3.5 12c2.8 1.2 5.6 1.2 8.5 0s5.7-1.2 8.5 0M7 5.5v13M17 5.5v13" opacity=".7" />
  </svg>
);

/** Filet laiton fin, pour ponctuer les titres de section. */
export const Stitch = ({ className = "h-2 w-16" }: P) => (
  <svg viewBox="0 0 64 8" className={className} fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true" preserveAspectRatio="none">
    <path d="M0 4h64" />
  </svg>
);
