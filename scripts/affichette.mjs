// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser en vitrine ou au comptoir.
//   npm run affichette   →   public/affichette-teinturerie-des-jacobins-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const horaires = JSON.parse(await readFile(path.join(ROOT, "data/horaires.json"), "utf8"));
const url = `${site.url}/fr`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const WHITE = hex("#FFFFFF");
const NIGHT = hex("#1D2B44");
const SKY = hex("#9CC3DA");
const BRASS = hex("#B08D57");
const MUTED = hex("#4E586A");

const pdf = await PDFDocument.create();
pdf.setTitle("Teinturerie des Jacobins : affichette A5");
pdf.setAuthor("Teinturerie des Jacobins");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const serif = await pdf.embedFont(StandardFonts.TimesRoman);
const serifI = await pdf.embedFont(StandardFonts.TimesRomanItalic);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

const center = (text, font, size, y, color = NIGHT, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  let x = (W - width) / 2;
  if (!spacing) return page.drawText(text, { x, y, size, font, color });
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

// Bandeau bleu nuit : cintre et chemise au trait (même dessin que l'ouverture du site)
const bandH = 230;
page.drawRectangle({ x: 0, y: H - bandH, width: W, height: bandH, color: NIGHT });
const s = 1.55;
const ox = (W - 120 * s) / 2;
const oy = H - 22;
const draw = (d, color = SKY, w = 0.9, fill) => page.drawSvgPath(d, { x: ox, y: oy, scale: s, borderColor: color, borderWidth: w, color: fill });
draw("M53.5 13a6.5 6.5 0 1 1 6.5 6.5V26L13.2 52.4a1.2 1.2 0 0 0 .6 2.2h92.4a1.2 1.2 0 0 0 .6-2.2L60 26");
draw("M45.5 35 30 43.8 21.5 61l9.3 3.6 2.7-5.4V98h53V59.2l2.7 5.4 9.3-3.6L90 43.8 74.5 35C70 39.5 65 41.5 60 41.5S50 39.5 45.5 35Z", WHITE, 0.8, NIGHT);
draw("M45.5 35 60 50.5 74.5 35M60 50.5V98", WHITE, 0.8);
draw("M60 104c-1.8 2.6-3 4.2-3 5.6a3 3 0 0 0 6 0c0-1.4-1.2-3-3-5.6Z", BRASS, 0.9);

let y = H - bandH - 44;
center("TEINTURERIE DES JACOBINS", serif, 20, y, NIGHT, 2.6);
y -= 16;
center("PRESSING · TEINTURERIE · AMIENS", sans, 7, y, MUTED, 2.2);

y -= 36;
center("Vos vêtements entre de bonnes mains", serifI, 21, y, NIGHT);
y -= 18;
center("Chemises, costumes, manteaux, robes de mariée, couettes, détachage", serif, 11, y, MUTED);

// QR code vers le site (tarifs, délais, devis sur photo)
const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#1D2B44", light: "#FFFFFF" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 92;
y -= 22 + qrS;
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 15;
center("Prix, délais et devis sur photo : scannez", sans, 8.5, y, NIGHT);
y -= 12;
center(url.replace(/^https?:\/\//, ""), sans, 8, y, MUTED);

// Pied : filet laiton + infos pratiques (horaires depuis data/horaires.json)
y -= 18;
page.drawLine({ start: { x: W / 2 - 30, y }, end: { x: W / 2 + 30, y }, thickness: 0.8, color: BRASS });
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const open = [1, 2, 3, 4, 5, 6, 0].filter((d) => horaires.week[d]?.length);
const r = horaires.week[open[0]][0];
const h = (t) => t.replace(/^0/, "").replace(":00", " h").replace(":", " h ");
y -= 17;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}  ·  ${site.phone}`, sans, 8.5, y);
y -= 13;
center(`Du ${days[open[0]]} au ${days[open[open.length - 1]]}, ${h(r[0])} – ${h(r[1])}`, sans, 8.5, y);

const file = path.join(ROOT, "public/affichette-teinturerie-des-jacobins-a5.pdf");
await writeFile(file, await pdf.save());
console.log("affichette prête :", url);
