# Teinturerie des Jacobins

Site vitrine et demande de devis du pressing Teinturerie des Jacobins, 47 rue des Jacobins, Amiens. Next.js 16, Tailwind 4, Motion. Français (par défaut) et anglais, URLs `/fr` et `/en`.

## Modifier le contenu

- Textes : `locales/fr.json`, `locales/en.json` (relecture : `CONTENU.md`, régénéré par `npm run contenu`)
- Tarifs et délais : `data/tarifs.json` (prix `null` = « sur demande »)
- Horaires et fermetures : `data/horaires.json` ; bandeau : `data/annonces.json`
- Photos : `data/photos.json` + `scripts/media.mjs` (`npm run media`), liste dans `assets/A-PHOTOGRAPHIER.md`
- Avis : `data/avis.json` (vrais avis uniquement)
- Coordonnées, note Google, mentions légales : `data/site.json`

## Devis par e-mail (Resend)

Variables Vercel : `RESEND_API_KEY`, `DEVIS_NOTIFY_EMAIL`, `RESEND_FROM`. Sans elles, le formulaire invite le client à appeler.

## Commandes

`npm run dev` · `npm run build` · `npm run media` · `npm run affichette` (PDF A5 avec QR code) · `npm run contenu`

Infos à obtenir du pressing : `INFOS-A-DEMANDER.md`.
