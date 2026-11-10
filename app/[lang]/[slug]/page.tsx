import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import { fill, getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import { href, PAGES, pageOf, type PageId } from "@/lib/routes";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ogLocale } from "@/lib/locales";
import { hoursSummary, money } from "@/lib/shop";
import { categoryOf } from "@/lib/tarifs";
import { slot } from "@/lib/media";
import { DevisCta, Faq, PhoneLink, Rating, Slot } from "@/components/Blocks";
import { DevisForm } from "@/components/DevisForm";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { DressIcon, HangerIcon, Stitch } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.values(PAGES).map((s) => ({ lang, slug: s[lang] })));
}

function metaOf(id: PageId, d: Dict) {
  if (id === "legal") return { title: d.legal.metaTitle, description: d.meta.description };
  if (id === "devis") return { title: d.devis.metaTitle, description: d.devis.metaDescription };
  const p = d.pages[id];
  return { title: p.metaTitle, description: p.metaDescription };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = pageOf(lang, slug);
  if (!id) return {};
  const d = getDict(lang);
  const m = metaOf(id, d);
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: href(lang, id),
      languages: { ...Object.fromEntries(locales.map((l) => [l, href(l, id)])), "x-default": href("fr", id) },
    },
    openGraph: { type: "website", url: href(lang, id), siteName: site.name, title: m.title, description: m.description, locale: ogLocale[lang], images: [{ url: "/og.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }] },
    robots: id === "legal" ? { index: false, follow: true } : undefined,
  };
}

function PageHero({ eyebrow, title, intro, media, children }: { eyebrow: string; title: string; intro: string; media: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto grid max-w-[90rem] items-center gap-10 px-5 pt-10 pb-16 sm:px-8 md:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-10 lg:pt-16 lg:pb-24">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <Stitch className="mt-4 h-1.5 w-14 text-brass" />
        <h1 className="display mt-5 text-[clamp(2.7rem,6vw,4.8rem)]">{title}</h1>
        <p className="lead mt-6 max-w-xl">{intro}</p>
        {children && <div className="mt-9">{children}</div>}
      </div>
      {media}
    </section>
  );
}

type SeoPage = Dict["pages"]["pressing"] | Dict["pages"]["mariee"];

/** Pages SEO locales (pressing, robe de mariée) : hero, prestations, étapes, tarifs des catégories, FAQ. */
function ServicePage({ lang, d, p, cats, media, query, extra }: { lang: Locale; d: Dict; p: SeoPage; cats: string[]; media: ReactNode; query: string; extra?: ReactNode }) {
  const t = d.tarifs;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} media={media}>
        <DevisCta lang={lang} d={d} label={p.cta} query={query} />
        <div className="mt-6 flex flex-col gap-2 text-[0.875rem] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          <Rating lang={lang} d={d} className="hover:text-ink" />
          <OpenStatus />
        </div>
      </PageHero>
      <section className="border-y border-line bg-pearl-soft">
        <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.listTitle}</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {p.list.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06}>
                <Stitch className="h-1.5 w-10 text-brass" />
                <h3 className="display mt-4 text-[1.5rem]">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ul>
          {extra}
        </div>
      </section>
      <section className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div>
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.howTitle}</h2>
          <ol className="mt-10 space-y-8">
            {p.how.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="grid grid-cols-[3rem_1fr] gap-2">
                <span className="display text-[2.2rem] leading-none text-brass">{i + 1}</span>
                <div>
                  <h3 className="text-[1.0625rem] font-normal">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{t.eyebrow}</h2>
          {cats.map((id) => {
            const c = categoryOf(id);
            if (!c) return null;
            return (
              <table key={id} className="mt-8 w-full">
                <caption className="eyebrow pb-3 text-start">{c.name[lang]}</caption>
                <tbody className="divide-y divide-line border-y border-line">
                  {c.items.map((s) => (
                    <tr key={s.id}>
                      <th scope="row" className="py-3 pe-4 text-start font-light">
                        {s.name[lang]}
                        {s.delay && <span className="mt-0.5 block text-[0.8125rem] text-muted">{s.delay[lang]}</span>}
                      </th>
                      <td className="py-3 text-end text-[0.9375rem] whitespace-nowrap tabular-nums">{s.price != null ? (s.from === false ? money(s.price, lang) : fill(t.from, { price: money(s.price, lang) })) : <span className="text-muted">{t.onQuote}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })}
          <p className="mt-4 text-[0.8125rem] text-muted">{t.note}</p>
          <Link href={href(lang, "home", "tarifs")} className="link-line mt-6 inline-block text-[0.9375rem]">
            {d.hero.tarifs}
          </Link>
        </div>
      </section>
      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-10">
          <Stitch className="h-1.5 w-16 text-brass" />
          <p className="display mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)]">{d.cta.title}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link href={`${href(lang, "devis")}${query}`} className="btn-solid on-dark">
              {p.cta}
            </Link>
            <PhoneLink className="inline-flex items-center gap-2 text-paper/85 hover:text-paper" />
          </div>
        </div>
      </section>
      <Faq d={d} />
    </>
  );
}

function Pressing({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.pages.pressing;
  return (
    <ServicePage
      lang={lang}
      d={d}
      p={p}
      cats={["chemises", "costumes", "manteaux"]}
      query=""
      media={<Slot src={slot("boutique") ?? slot("facade")} d={d} priority sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/5]" icon={<HangerIcon className="size-20" />} label={d.slots.boutique} />}
      extra={<p className="mt-12 max-w-2xl border-t border-line pt-6 text-muted">{p.related}</p>}
    />
  );
}

function Mariee({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.pages.mariee;
  return (
    <ServicePage
      lang={lang}
      d={d}
      p={p}
      cats={["robes"]}
      query="?o=mariee"
      media={<Slot src={slot("mariee")} d={d} priority sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/5]" icon={<DressIcon className="size-20" />} label={d.blocks.mariee.slot} />}
      extra={<p className="mt-12 max-w-2xl border-t border-line pt-6 text-muted">{p.related}</p>}
    />
  );
}

function DevisPage({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.devis;
  return (
    <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:px-10 lg:pt-16 lg:pb-28">
      <div className="max-w-3xl">
        <p className="eyebrow">{b.eyebrow}</p>
        <Stitch className="mt-4 h-1.5 w-14 text-brass" />
        <h1 className="display mt-5 text-[clamp(2.6rem,6vw,4.2rem)]">{b.title}</h1>
        <p className="lead mt-5 max-w-2xl">{b.lead}</p>
        <div className="mt-12">
          <DevisForm />
        </div>
      </div>
      <aside className="h-fit space-y-6 lg:sticky lg:top-32">
        <div className="slot p-7">
          <p className="display text-[1.7rem]">{b.preferCall}</p>
          <PhoneLink className="mt-4 inline-flex items-center gap-2 text-[1.125rem]" />
          <div className="mt-3 text-[0.875rem] text-muted">
            <OpenStatus />
          </div>
        </div>
        <div className="space-y-2 px-1 text-[0.875rem] text-muted">
          <Rating lang={lang} d={d} className="hover:text-ink" />
          <p>
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
          {hoursSummary(lang, d.days, d.hours).map((l) => (
            <p key={l}>{l}</p>
          ))}
          {site.whatsapp && (
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" className="link-line inline-block text-ink">
              WhatsApp
            </a>
          )}
        </div>
      </aside>
    </section>
  );
}

function Legal({ d }: { d: Dict }) {
  const l = d.legal;
  const g = site.legal;
  const editor = [fill(l.editorText, { company: g.company ?? site.name }), fill(l.siret, { siret: g.siret ?? l.toFill }), g.director ? fill(l.director, { director: g.director }) : ""].filter(Boolean).join(" ");
  const rows: [string, string][] = [
    [l.editor, editor],
    [l.host, g.host],
    [l.data, l.dataText],
    [l.photos, l.photosText],
    [l.cookies, l.cookiesText],
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="display text-[clamp(2.4rem,5vw,3.6rem)]">{l.title}</h1>
      <dl className="mt-10 space-y-8">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id = pageOf(lang, slug);
  if (!id) notFound();
  const d = getDict(lang);
  const m = metaOf(id, d);
  const crumbs = breadcrumbJsonLd(lang, m.title.split(" | ")[0], href(lang, id));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {id === "devis" && <DevisPage lang={lang} d={d} />}
      {id === "pressing" && <Pressing lang={lang} d={d} />}
      {id === "mariee" && <Mariee lang={lang} d={d} />}
      {id === "legal" && <Legal d={d} />}
    </>
  );
}
