import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import avis from "@/data/avis.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { slot, tileSlot } from "@/lib/media";
import { href } from "@/lib/routes";
import { categories, firstDelay, fromPrice } from "@/lib/tarifs";
import { money } from "@/lib/shop";
import { intlLocale } from "@/lib/locales";
import { faqJsonLd } from "@/lib/jsonld";
import { Faq, InfosBlock, PhoneLink, Rating, SectionHead, Slot, Stars } from "@/components/Blocks";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { HeroDrawing } from "@/components/HeroDrawing";
import { ArrowIcon, CameraIcon, ClockIcon, CoatIcon, DressIcon, DropIcon, DuvetIcon, LeatherIcon, MapIcon, ShirtIcon, Stitch, SuitIcon, TagIcon } from "@/components/icons";

type TileId = keyof Dict["tiles"]["items"];
const TILES: { id: TileId; icon: ReactNode; to: (l: Locale) => string }[] = [
  { id: "chemises", icon: <ShirtIcon className="size-11" />, to: (l) => href(l, "home", "tarif-chemises") },
  { id: "costumes", icon: <SuitIcon className="size-11" />, to: (l) => href(l, "home", "tarif-costumes") },
  { id: "manteaux", icon: <CoatIcon className="size-11" />, to: (l) => href(l, "home", "tarif-manteaux") },
  { id: "robes", icon: <DressIcon className="size-11" />, to: (l) => href(l, "mariee") },
  { id: "cuir", icon: <LeatherIcon className="size-11" />, to: (l) => href(l, "home", "tarif-cuir") },
  { id: "linge", icon: <DuvetIcon className="size-11" />, to: (l) => href(l, "home", "tarif-linge") },
];

/** Prix « à partir de » d'une catégorie, ou « sur demande » tant que le pressing ne l'a pas donné. */
const priceOf = (id: string, lang: Locale, d: Dict) => {
  const p = fromPrice(id);
  return p != null ? fill(d.tiles.from, { price: money(p, lang) }) : d.tiles.onQuote;
};

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  const photo = slot("hero");
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-ink text-paper lg:min-h-[calc(100svh-6rem)]">
      {photo ? (
        <>
          <Slot src={photo} d={d} priority sizes="100vw" className="settle absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(22_33_58/0.82),rgb(22_33_58/0.35)_70%)] rtl:bg-[linear-gradient(270deg,rgb(22_33_58/0.82),rgb(22_33_58/0.35)_70%)]" aria-hidden="true" />
        </>
      ) : (
        <HeroDrawing />
      )}
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-end px-5 pt-24 pb-10 sm:px-8 lg:justify-center lg:px-10 lg:py-20">
        <p className="eyebrow rise !text-sky">{h.eyebrow}</p>
        <h1 id="hero-title" className="display rise mt-6 max-w-[13ch] text-[clamp(3.1rem,7.4vw,6.6rem)] [animation-delay:0.1s]" dangerouslySetInnerHTML={{ __html: h.title }} />
        <p className="rise mt-6 max-w-md text-[1.0625rem] leading-relaxed text-paper/80 [animation-delay:0.2s]">{h.lead}</p>
        <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:0.3s]">
          <Link href={href(lang, "devis")} className="btn-solid on-dark">
            {h.devis}
          </Link>
          <Link href={href(lang, "home", "tarifs")} className="btn-line on-dark text-paper">
            {h.tarifs}
          </Link>
        </div>
        <div className="rise mt-8 flex flex-col gap-2 text-[0.875rem] text-paper/80 [animation-delay:0.4s] sm:flex-row sm:flex-wrap sm:gap-x-6">
          <Rating lang={lang} d={d} className="hover:text-paper" />
          <OpenStatus />
        </div>
      </div>
    </section>
  );
}

function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tiles;
  return (
    <section id="services" aria-labelledby="tiles-title" className="mx-auto max-w-[90rem] px-5 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28">
      <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} id="tiles-title" />
      <ul className="mt-12 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {TILES.map((tile, i) => {
          const it = t.items[tile.id];
          const delay = firstDelay(tile.id);
          const meta = (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <span className="tag tabular-nums">{priceOf(tile.id, lang, d)}</span>
              {delay && <span className="text-[0.8125rem] text-muted">{delay[lang]}</span>}
            </div>
          );
          return (
            <Reveal as="li" key={tile.id} delay={(i % 3) * 0.06} className="h-full">
              {tileSlot(tile.id) ? (
                <Link href={tile.to(lang)} className="group flex h-full flex-col">
                  <Slot src={tileSlot(tile.id)} d={d} sizes="(min-width:1024px) 30vw, (min-width:480px) 48vw, 100vw" className="shine aspect-[4/3]" />
                  <div className="flex flex-1 flex-col pt-5">
                    <div className="display flex items-center justify-between gap-2 text-[1.75rem]">
                      <h3>{it.title}</h3>
                      <ArrowIcon className="size-4 shrink-0 text-brass transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-1.5 flex-1 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
                    {meta}
                  </div>
                </Link>
              ) : (
                <Link href={tile.to(lang)} className="group flex h-full flex-col border border-line bg-pearl-soft p-7 transition-colors duration-500 hover:border-ink/40 lg:p-9">
                  <span className="text-ink/80">{tile.icon}</span>
                  <div className="display mt-8 flex items-center justify-between gap-2 text-[1.75rem]">
                    <h3>{it.title}</h3>
                    <ArrowIcon className="size-4 shrink-0 text-brass transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
                  {meta}
                </Link>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Strip({ lang, d }: { lang: Locale; d: Dict }) {
  const icons = [<TagIcon key="t" className="size-8" />, <ClockIcon key="c" className="size-8" />, <DropIcon key="d" className="size-8" />, <MapIcon key="m" className="size-8" />];
  const links = [href(lang, "home", "tarifs"), href(lang, "home", "tarifs"), `${href(lang, "devis")}?b=detachage`, href(lang, "home", "infos")];
  return (
    <section aria-label={d.strip.label} className="bg-ink text-paper">
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
        {d.strip.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.06} className={`${i % 2 ? "border-s border-paper/12" : ""} ${i > 1 ? "border-t border-paper/12 lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
            <Link href={links[i]} className="group block h-full px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
              <span className="text-sky">{icons[i]}</span>
              <span className="display mt-5 block text-[1.45rem] sm:text-[1.6rem]">{it.title}</span>
              <span className="mt-2 block text-[0.875rem] leading-relaxed text-paper/75">{it.text}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Tarifs({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.tarifs;
  return (
    <section id="tarifs" aria-labelledby="tarifs-title" className="bg-pearl-soft">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="tarifs-title" />
          <ul className="mt-8 space-y-3 text-[0.9375rem]">
            {p.promises.map((x) => (
              <li key={x} className="flex gap-3">
                <Stitch className="mt-3 h-1.5 w-5 shrink-0 text-brass" />
                {x}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={href(lang, "devis")} className="btn-solid">
              {d.nav.devis}
            </Link>
            <PhoneLink className="inline-flex items-center gap-2 text-[1.0625rem]" />
          </div>
          <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
        </div>
        <div className="space-y-12">
          {categories.map((c) => (
            <Reveal key={c.id}>
              <table id={`tarif-${c.id}`} className="w-full scroll-mt-36 border-collapse bg-paper text-start">
                <caption className="text-start">
                  <span className="flex items-baseline justify-between gap-4 border-b border-ink/80 bg-pearl-soft pb-3">
                    <span className="display text-[1.85rem] sm:text-[2rem]">{c.name[lang]}</span>
                    <Link href={`${href(lang, "devis")}?c=${c.id}`} className="link-line shrink-0 text-[0.8125rem] text-deep">
                      {p.ask}
                    </Link>
                  </span>
                </caption>
                <thead className="sr-only sm:not-sr-only">
                  <tr className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
                    <th scope="col" className="px-4 pt-4 pb-2 text-start font-normal">
                      {p.head.service}
                    </th>
                    <th scope="col" className="w-36 px-4 pt-4 pb-2 text-end font-normal">
                      {p.head.price}
                    </th>
                    <th scope="col" className="w-52 px-4 pt-4 pb-2 text-end font-normal">
                      {p.head.delay}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.items.map((s) => (
                    <tr key={s.id} className="grid grid-cols-[1fr_auto] gap-x-6 px-4 py-3.5 sm:table-row sm:p-0">
                      <th scope="row" className="text-start text-[1rem] font-light sm:px-4 sm:py-3.5">
                        {s.name[lang]}
                      </th>
                      <td className="text-end text-[0.9375rem] whitespace-nowrap tabular-nums sm:w-36 sm:px-4 sm:py-3.5">
                        {s.price != null ? (s.from === false ? money(s.price, lang) : fill(p.from, { price: money(s.price, lang) })) : <span className="text-muted">{p.onQuote}</span>}
                      </td>
                      <td className="col-span-2 text-[0.8125rem] text-muted sm:w-52 sm:px-4 sm:py-3.5 sm:text-end sm:text-[0.9375rem]">
                        <span className="inline-flex items-center gap-1.5">
                          <ClockIcon className="size-3.5 shrink-0 text-brass sm:hidden" />
                          {s.delay ? s.delay[lang] : s.confirm ? p.confirm : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ))}
          <p className="text-[0.875rem] leading-relaxed text-muted">{p.note}</p>
        </div>
      </div>
    </section>
  );
}

/** Blocs alternés photo + texte court + un seul bouton. */
function Feature({ id, eyebrow, title, text, cta, to, media, flip = false }: { id: string; eyebrow: string; title: string; text: string; cta: string; to: string; media: ReactNode; flip?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-24">
        <Reveal className={flip ? "md:order-2" : ""}>{media}</Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <Stitch className="mt-4 h-1.5 w-14 text-brass" />
          <h2 id={`${id}-title`} className="display mt-5 text-[clamp(2.2rem,4vw,3.3rem)]">
            {title}
          </h2>
          <p className="lead mt-5">{text}</p>
          <Link href={to} className="btn-line mt-8 text-ink">
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Features({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  const box = (src: string | null) => (src ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]");
  return (
    <div className="py-6 lg:py-10">
      <Feature id="delicats" {...b.delicats} to={href(lang, "home", "tarifs")} media={<Slot src={slot("delicats")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("delicats"))} icon={<SuitIcon className="size-16" />} label={b.delicats.slot} />} />
      <Feature id="detachage" {...b.detachage} to={`${href(lang, "devis")}?b=detachage`} flip media={<Slot src={slot("detachage")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("detachage"))} icon={<CameraIcon className="size-16" />} label={b.detachage.slot} dark />} />
      <Feature id="mariee" {...b.mariee} to={`${href(lang, "devis")}?o=mariee`} media={<Slot src={slot("mariee")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("mariee"))} icon={<DressIcon className="size-16" />} label={b.mariee.slot} />} />
    </div>
  );
}

type Avis = { author: string; date: string; text: Record<Locale, string>; source: string };

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const items = avis.items as Avis[];
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(site.rating.value);
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-10 border-y border-line py-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20">
        <Reveal className="flex items-end gap-5">
          <p className="display text-[clamp(3.2rem,6vw,4.4rem)] leading-[0.8]">{value}</p>
          <div className="pb-1">
            <Stars value={site.rating.value} className="size-4" />
            <p className="mt-2 text-[0.875rem] text-muted">{fill(r.count, { count: site.rating.count })}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 id="reviews-title" className="display mt-3 text-[clamp(1.9rem,3.4vw,2.5rem)]">
            {r.title}
          </h2>
          <p className="lead mt-3 max-w-2xl">{r.lead}</p>
          <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-5 inline-block text-[0.9375rem]">
            {r.cta}
          </a>
        </Reveal>
      </div>
      {/* À REMPLIR avec de vrais avis clients : data/avis.json (avec l'accord de leurs auteurs). Aucun avis inventé. */}
      {items.length > 0 && (
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((a) => (
            <Reveal as="li" key={a.author + a.date} className="border-t border-ink/80 pt-6">
              <blockquote className="display text-[1.4rem] leading-snug">« {a.text[lang]} »</blockquote>
              <p className="mt-4 text-[0.875rem] text-muted">
                {a.author} · {a.source}
              </p>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}

function FinalCta({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
        <Stitch className="h-1.5 w-16 text-brass" />
        <p className="display mt-6 max-w-2xl text-[clamp(2.1rem,4.4vw,3.3rem)]">{d.cta.title}</p>
        <p className="mt-4 max-w-lg text-paper/75">{d.cta.text}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link href={href(lang, "devis")} className="btn-solid on-dark">
            {d.nav.devis}
          </Link>
          <PhoneLink className="inline-flex items-center gap-2 text-paper/85 hover:text-paper" />
        </div>
      </div>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Strip lang={lang} d={d} />
      <Tarifs lang={lang} d={d} />
      <Features lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <FinalCta lang={lang} d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}
