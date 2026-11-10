// Prépare les photos de la Teinturerie des Jacobins pour le web, et l'image de partage.
//   npm run media
// Sources : assets/<dossier>/ (hero, facade, boutique, vetements) et assets/raw/ (photos Google Maps jacobins_*.jpg).
// Copie classée dans assets/<dossier>/, version web dans public/media/<dossier>/ (next/image sert ensuite AVIF/WebP),
// dimensions réelles dans data/media-sizes.json. Pour une nouvelle photo : l'ajouter à PICKS, relancer, puis la
// brancher dans data/photos.json. Le nom du fichier sert de clé au texte alternatif (locales/*.json → alt).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["raw", "hero", "facade", "boutique", "vetements"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Aucune photo pour l'instant. Exemples, une fois les photos prises sur place (voir assets/A-PHOTOGRAPHIER.md) :
  // ["facade/devanture.jpg", "facade", "facade-rue-des-jacobins", {}],
  // ["boutique/comptoir.jpg", "boutique", "comptoir", {}],
  // ["vetements/costumes-sous-housse.jpg", "vetements", "portant-costumes", {}],
  // ["vetements/robe-mariee.jpg", "vetements", "robe-mariee", {}],
];

const sizes = {};
for (const [src, dir, name, c] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  const meta = await sharp(file).metadata();
  const box = { left: c.left ?? 0, top: c.top ?? 0, width: meta.width - (c.left ?? 0) - (c.right ?? 0), height: meta.height - (c.top ?? 0) - (c.bottom ?? 0) };
  await mkdir(path.join(ROOT, "assets", dir), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  const cropped = sharp(file).rotate().extract(box);
  const keep = path.join(ROOT, "assets", dir, `${name}.jpg`);
  if (!src.startsWith(`${dir}/`) || !existsSync(keep)) await cropped.clone().jpeg({ quality: 92 }).toFile(keep);
  const max = dir === "hero" ? 2400 : 1400;
  const info = await cropped.clone().resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
  sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
}
for (const dir of DIRS) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });

// Image de partage (Open Graph) 1200 × 630 : tant qu'il n'y a pas de photo de façade, une composition sobre
// (bleu nuit, cintre et chemise au trait, nom en capitales). À remplacer par la façade quand elle existe.
const OG_PHOTO = null; // ex. "assets/facade/facade-rue-des-jacobins.jpg"
const ogFile = path.join(ROOT, "public/og.jpg");
if (OG_PHOTO) {
  await sharp(path.join(ROOT, OG_PHOTO)).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(ogFile);
} else {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1D2B44"/>
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#9CC3DA" stroke-opacity=".3"/>
  <g transform="translate(690 95) scale(3.9)" fill="none" stroke="#9CC3DA" stroke-opacity=".6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M53.5 13a6.5 6.5 0 1 1 6.5 6.5V26L13.2 52.4a1.2 1.2 0 0 0 .6 2.2h92.4a1.2 1.2 0 0 0 .6-2.2L60 26" stroke-width=".5"/>
    <path d="M45.5 35 30 43.8 21.5 61l9.3 3.6 2.7-5.4V98h53V59.2l2.7 5.4 9.3-3.6L90 43.8 74.5 35C70 39.5 65 41.5 60 41.5S50 39.5 45.5 35Z" fill="#1D2B44" stroke-width=".4"/>
    <path d="M45.5 35 60 50.5 74.5 35M60 50.5V98" stroke-width=".4"/>
  </g>
  <text x="90" y="250" fill="#9CC3DA" font-family="Jost, Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6">PRESSING · TEINTURERIE · AMIENS</text>
  <text x="86" y="340" fill="#FFFFFF" font-family="'Cormorant Garamond', Georgia, 'Times New Roman', serif" font-size="74" letter-spacing="7">TEINTURERIE</text>
  <text x="86" y="425" fill="#FFFFFF" font-family="'Cormorant Garamond', Georgia, 'Times New Roman', serif" font-size="74" letter-spacing="7">DES JACOBINS</text>
  <line x1="90" y1="470" x2="170" y2="470" stroke="#B08D57" stroke-width="2"/>
  <text x="90" y="520" fill="#FFFFFF" fill-opacity=".8" font-family="Jost, Helvetica, Arial, sans-serif" font-size="24">47 rue des Jacobins · Prix et délais affichés</text>
</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(ogFile);
}

// Icône Apple (180 × 180) depuis le favicon
const icon = await readFile(path.join(ROOT, "app/icon.svg"));
await sharp(icon, { density: 600 }).resize(180, 180).png().toFile(path.join(ROOT, "app/apple-icon.png"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${PICKS.length} photos prêtes, og.jpg et apple-icon.png générés`);
