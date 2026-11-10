# Teinturerie des Jacobins : contenu du site

Tous les textes du site, en français et en anglais, pour relecture avec le pressing. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, délais, horaires, annonces, photos et avis dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « sur demande ») tant que le pressing ne les a pas donnés. Les délais sont des ordres de grandeur **à valider**, les horaires (du lundi au samedi, 9 h – 19 h) **à confirmer**. La note Google (3.4/5, 37 avis) est celle relevée le 2026-11-10. **Aucun avis n'est cité ni inventé** : la section Avis attend de vrais avis dans `data/avis.json` (avec l'accord de leurs auteurs).

## Titre du hero : trois propositions

1. **Vos vêtements entre de bonnes mains** (retenu) / *Your clothes in good hands*
2. Le pressing du centre-ville / *The city-centre dry cleaner*
3. Propre, net, à l'heure / *Clean, crisp, on time*

Pour changer : `hero.title` dans `locales/fr.json` et `locales/en.json`.

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md). Affichette A5 : `public/affichette-teinturerie-des-jacobins-a5.pdf` (`npm run affichette`).

## Tarifs et délais (`data/tarifs.json`)

### Chemises & hauts / Shirts & tops

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Chemise, lavée et repassée**<br>*Shirt, washed and pressed* | 24 à 48 h (à valider) | **à remplir** |
| **Chemise, rendue pliée**<br>*Shirt, returned folded* | 24 à 48 h (à valider) | **à remplir** |
| **Chemisier, blouse**<br>*Blouse* | 48 h (à valider) | **à remplir** |
| **Pull, gilet**<br>*Jumper, cardigan* | 48 h (à valider) | **à remplir** |

### Costumes / Suits

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Costume deux pièces**<br>*Two-piece suit* | 48 à 72 h (à valider) | **à remplir** |
| **Costume trois pièces**<br>*Three-piece suit* | 48 à 72 h (à valider) | **à remplir** |
| **Veste, blazer**<br>*Jacket, blazer* | 48 h (à valider) | **à remplir** |
| **Pantalon**<br>*Trousers* | 48 h (à valider) | **à remplir** |
| **Cravate**<br>*Tie* | 48 h (à valider) | **à remplir** |

### Manteaux / Coats

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Manteau, caban**<br>*Coat, pea coat* | 3 à 4 jours (à valider) | **à remplir** |
| **Manteau long, laine ou cachemire**<br>*Long coat, wool or cashmere* | 3 à 4 jours (à valider) | **à remplir** |
| **Doudoune**<br>*Down jacket* | 4 à 5 jours (à valider) | **à remplir** |
| **Imperméable, trench**<br>*Raincoat, trench coat* | 3 à 4 jours (à valider) | **à remplir** |

### Robes & robes de mariée / Dresses & wedding dresses

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Robe simple**<br>*Day dress* | 48 à 72 h (à valider) | **à remplir** |
| **Robe de soirée, robe longue**<br>*Evening or long dress* | 3 à 5 jours (à valider) | **à remplir** |
| **Jupe**<br>*Skirt* | 48 h (à valider) | **à remplir** |
| **Robe de mariée**<br>*Wedding dress* | 1 à 2 semaines, sur devis (à valider) | **à remplir** |

### Cuir & daim / Leather & suede

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Veste ou blouson en cuir**<br>*Leather jacket* | à remplir | **à remplir** · **prestation à confirmer** |
| **Pièce en daim, nubuck**<br>*Suede or nubuck piece* | à remplir | **à remplir** · **prestation à confirmer** |
| **Manteau en cuir, peau lainée**<br>*Leather or sheepskin coat* | à remplir | **à remplir** · **prestation à confirmer** |

### Linge de maison & couettes / Household linen & duvets

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Couette une personne**<br>*Single duvet* | 3 à 5 jours (à valider) | **à remplir** |
| **Couette deux personnes**<br>*Double duvet* | 3 à 5 jours (à valider) | **à remplir** |
| **Couverture, plaid**<br>*Blanket, throw* | 3 à 5 jours (à valider) | **à remplir** |
| **Nappe**<br>*Tablecloth* | 48 à 72 h (à valider) | **à remplir** |
| **Rideaux, voilages**<br>*Curtains, sheers* | 4 à 5 jours (à valider) | **à remplir** |

### Détachage / Stain removal

| Prestation | Délai indicatif | Prix « à partir de » |
|---|---|---|
| **Détachage localisé (vin, café, gras, maquillage…)**<br>*Spot stain removal (wine, coffee, grease, make-up…)* | Selon la tache, sur photo (à valider) | **à remplir** |
| **Repassage seul**<br>*Pressing only* | 24 à 48 h (à valider) | **à remplir** |

## Horaires (`data/horaires.json`)

- lundi : 09:00 – 19:00
- mardi : 09:00 – 19:00
- mercredi : 09:00 – 19:00
- jeudi : 09:00 – 19:00
- vendredi : 09:00 – 19:00
- samedi : 09:00 – 19:00
- dimanche : fermé

Fermetures exceptionnelles : Noël (2026-12-25), Jour de l'an (2027-01-01).

## Bandeau d'annonces (`data/annonces.json`)

- **Par défaut** : Prix et délais affichés, sans surprise. *(Prices and turnaround times shown upfront, no surprises.)*
- **2026-12-18 → 2026-12-25** : Le pressing sera fermé le vendredi 25 décembre. Pour vos tenues de fête, déposez-les avant le 22. *(We will be closed on Friday 25 December. For your party outfits, drop them off before the 22nd.)*, lien « Horaires »
- **2026-12-26 → 2027-01-01** : Le pressing sera fermé le vendredi 1er janvier. Bonnes fêtes à tous. *(We will be closed on Friday 1 January. Happy holidays.)*, lien « Horaires »

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation du pressing.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Pressing et teinturerie à Amiens, centre-ville | Teinturerie des Jacobins | Dry cleaner in Amiens city centre | Teinturerie des Jacobins | |
| `meta.description` | Teinturerie des Jacobins, pressing du centre-ville d’Amiens, 47 rue des Jacobins : chemises, costumes, manteaux, robes de mariée, couettes et détachage. Prix et délais affichés, devis sur photo. Du lundi au samedi. | Teinturerie des Jacobins, dry cleaner in Amiens city centre, 47 rue des Jacobins: shirts, suits, coats, wedding dresses, duvets and stain removal. Prices and turnaround shown upfront, quotes from a photo. Monday to Saturday. | |
| `meta.ogAlt` | Teinturerie des Jacobins, pressing et teinturerie au 47 rue des Jacobins, centre-ville d’Amiens | Teinturerie des Jacobins, dry cleaner at 47 rue des Jacobins, Amiens city centre | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.services` | Services | Services | |
| `nav.tarifs` | Tarifs et délais | Prices & times | |
| `nav.infos` | Infos | Info | |
| `nav.devis` | Demander un devis | Request a quote | |
| `nav.devisShort` | Devis | Quote | |
| `nav.call` | Appeler | Call | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.home` | Teinturerie des Jacobins, accueil | Teinturerie des Jacobins, home | |
| `nav.lang` | Langue | Language | |
| `nav.skip` | Aller au contenu | Skip to content | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer le bandeau | Close banner | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note relevée en {date} | Rating as of {date} | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Pressing · Teinturerie · Rue des Jacobins, Amiens | Dry cleaning · Dyeing · Rue des Jacobins, Amiens | |
| `hero.title` | Vos vêtements *entre de bonnes mains* | Your clothes *in good hands* | |
| `hero.lead` | Chemises, costumes, manteaux, robes de mariée, couettes : votre pressing du centre-ville nettoie, détache et repasse, avec un prix et un délai annoncés avant le dépôt. | Shirts, suits, coats, wedding dresses, duvets: your city-centre dry cleaner cleans, removes stains and presses, with the price and the ready date given before you drop off. | |
| `hero.devis` | Demander un devis | Request a quote | |
| `hero.tarifs` | Voir les tarifs | See prices | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | Nos services | Our services | |
| `tiles.title` | Ce que vous pouvez nous confier | What you can bring us | |
| `tiles.lead` | Pour chaque famille de vêtements, le prix de départ et le délai habituel. Le détail est dans le tableau des tarifs. | For each type of garment, the starting price and the usual turnaround. Full details are in the price list. | |
| `tiles.from` | à partir de {price} | from {price} | |
| `tiles.onQuote` | Tarif sur demande | Price on request | |
| `tiles.items.chemises.title` | Chemises | Shirts | |
| `tiles.items.chemises.text` | Lavées, repassées, rendues sur cintre ou pliées. Chemisiers, pulls et gilets aussi. | Washed, pressed, returned on a hanger or folded. Blouses, jumpers and cardigans too. | |
| `tiles.items.costumes.title` | Costumes | Suits | |
| `tiles.items.costumes.text` | Deux ou trois pièces, vestes, pantalons, cravates : nettoyés et repassés, prêts à porter. | Two or three-piece suits, jackets, trousers, ties: cleaned and pressed, ready to wear. | |
| `tiles.items.manteaux.title` | Manteaux | Coats | |
| `tiles.items.manteaux.text` | Laine, cachemire, doudounes, trenchs : un nettoyage qui respecte la matière et la coupe. | Wool, cashmere, down jackets, trench coats: cleaning that respects the fabric and the cut. | |
| `tiles.items.robes.title` | Robes et robes de mariée | Dresses & wedding dresses | |
| `tiles.items.robes.text` | Robes du quotidien, de soirée, de cérémonie, et votre robe de mariée après le grand jour. | Everyday, evening and occasion dresses, and your wedding dress after the big day. | |
| `tiles.items.cuir.title` | Cuir et daim | Leather & suede | **à valider (cuir et daim traités ?)** |
| `tiles.items.cuir.text` | Vestes, blousons et manteaux en cuir, daim ou nubuck. Prestation à confirmer au comptoir. | Leather, suede or nubuck jackets and coats. Service to be confirmed in store. | **à valider (cuir et daim traités ?)** |
| `tiles.items.linge.title` | Linge de maison et couettes | Household linen & duvets | |
| `tiles.items.linge.text` | Couettes, couvertures, plaids, nappes, rideaux : tout ce qui ne rentre pas dans votre machine. | Duvets, blankets, throws, tablecloths, curtains: everything too big for your machine. | |

### strip

| Clé | Français | English | |
|---|---|---|---|
| `strip.label` | En bref | At a glance | |
| `strip.items.0.title` | Prix affichés | Prices shown | |
| `strip.items.0.text` | Le tarif de chaque article, avant même de passer la porte. | The price of every item, before you even walk in. | |
| `strip.items.1.title` | Délais clairs | Clear turnaround | |
| `strip.items.1.text` | La date de retrait est notée sur votre ticket. | Your ready date is written on your ticket. | |
| `strip.items.2.title` | Détachage | Stain removal | |
| `strip.items.2.text` | Une tache tenace ? Envoyez-nous d’abord une photo. | A stubborn stain? Send us a photo first. | |
| `strip.items.3.title` | Centre-ville | City centre | |
| `strip.items.3.text` | Rue des Jacobins, du lundi au samedi. | Rue des Jacobins, Monday to Saturday. | |

### tarifs

| Clé | Français | English | |
|---|---|---|---|
| `tarifs.eyebrow` | Tarifs et délais | Prices & turnaround | |
| `tarifs.title` | Le prix et le délai, avant de déposer | The price and the time, before you drop off | |
| `tarifs.lead` | Les prix sont donnés « à partir de » : la matière, la doublure ou une tache particulière peuvent faire varier le tarif. Dans ce cas, il vous est annoncé au comptoir, avant que l’on commence. | Prices are “from” prices: the fabric, the lining or a particular stain can change the cost. If so, you are told at the counter, before any work starts. | |
| `tarifs.promises.0` | Le prix est confirmé au dépôt, rien ne s’ajoute au retrait. | The price is confirmed at drop-off, nothing is added at collection. | **à valider (engagements prix et ticket)** |
| `tarifs.promises.1` | La date de retrait est notée sur votre ticket. | Your ready date is written on your ticket. | **à valider (engagements prix et ticket)** |
| `tarifs.promises.2` | Pour une pièce délicate ou une tache, un devis sur photo. | For a delicate piece or a stain, a quote from a photo. | **à valider (engagements prix et ticket)** |
| `tarifs.note` | Délais indicatifs, hors dimanches et jours fériés, selon l’affluence. Un prix qui n’est pas affiché vous est donné au comptoir ou par téléphone. | Turnaround times are a guide, excluding Sundays and public holidays, and depend on how busy we are. Any price not shown is given at the counter or over the phone. | |
| `tarifs.head.service` | Article | Item | |
| `tarifs.head.price` | Prix indicatif | Guide price | |
| `tarifs.head.delay` | Délai | Turnaround | |
| `tarifs.from` | à partir de {price} | from {price} | |
| `tarifs.onQuote` | sur demande | on request | |
| `tarifs.confirm` | à confirmer | to be confirmed | |
| `tarifs.ask` | Demander un devis | Request a quote | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.delicats.eyebrow` | Pièces délicates | Delicate pieces | **à valider (méthode)** |
| `blocks.delicats.title` | Laine, soie, cachemire : chaque matière a son soin | Wool, silk, cashmere: every fabric gets its own care | **à valider (méthode)** |
| `blocks.delicats.text` | Avant de nettoyer, on lit l’étiquette d’entretien, on regarde la matière, la doublure, les boutons. Un costume revient défroissé et prêt à porter, un manteau de laine garde sa tenue, un chemisier en soie est traité à part. | Before cleaning, we read the care label and check the fabric, the lining and the buttons. A suit comes back crease-free and ready to wear, a wool coat keeps its shape, a silk blouse is handled separately. | **à valider (méthode)** |
| `blocks.delicats.cta` | Voir les tarifs | See prices | **à valider (méthode)** |
| `blocks.delicats.slot` | Costumes et manteaux | Suits and coats | **à valider (méthode)** |
| `blocks.detachage.eyebrow` | Détachage | Stain removal | |
| `blocks.detachage.title` | Une tache ? Envoyez d’abord une photo | A stain? Send us a photo first | |
| `blocks.detachage.text` | Vin, café, gras, maquillage, encre : chaque tache se traite différemment, selon sa nature, son ancienneté et le tissu. Avec une photo, le pressing vous dit ce qu’il est possible de faire et à quel prix, avant que vous vous déplaciez. | Wine, coffee, grease, make-up, ink: every stain is treated differently, depending on what it is, how old it is and the fabric. With a photo, we can tell you what can be done and at what price, before you make the trip. | |
| `blocks.detachage.cta` | Demander un devis | Request a quote | |
| `blocks.detachage.slot` | La tache en photo | The stain, in a photo | |
| `blocks.mariee.eyebrow` | Robe de mariée | Wedding dress | **à valider (robe de mariée traitée sur place ?)** |
| `blocks.mariee.title` | Après le grand jour, une robe propre et bien rangée | After the big day, a clean dress, carefully put away | **à valider (robe de mariée traitée sur place ?)** |
| `blocks.mariee.text` | Traîne marquée par l’herbe, ourlet poussiéreux, quelques gouttes de champagne : une robe de mariée se nettoie avec précaution, dentelle, broderies et perles comprises. Décrivez-la ou envoyez une photo, vous recevez un devis avant de la confier. | A train marked by the grass, a dusty hem, a few drops of champagne: a wedding dress needs careful cleaning, lace, embroidery and beads included. Describe it or send a photo and you get a quote before you hand it over. | **à valider (robe de mariée traitée sur place ?)** |
| `blocks.mariee.cta` | Demander un devis | Request a quote | **à valider (robe de mariée traitée sur place ?)** |
| `blocks.mariee.slot` | Robe de mariée | Wedding dress | **à valider (robe de mariée traitée sur place ?)** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Avis Google | Google reviews | |
| `reviews.title` | Votre avis nous fait avancer | Your feedback helps us improve | |
| `reviews.lead` | Nous lisons chaque avis. C’est pour cela que les prix et les délais sont affichés ici, article par article, avant même que vous passiez la porte. | We read every review. That is why prices and turnaround times are listed here, item by item, before you even walk in. | |
| `reviews.count` | {count} avis Google | {count} Google reviews | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### cta

| Clé | Français | English | |
|---|---|---|---|
| `cta.title` | Une question sur un vêtement ? | A question about a garment? | |
| `cta.text` | Envoyez une photo ou appelez le pressing : vous obtenez un prix et un délai avant de vous déplacer. | Send a photo or call us: you get a price and a turnaround time before making the trip. | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Practical info | |
| `infos.title` | Passez au pressing | Visit us | |
| `infos.address` | Adresse | Address | |
| `infos.route` | Itinéraire | Directions | |
| `infos.phone` | Téléphone | Phone | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.closedDay` | Fermé | Closed | |
| `infos.closures` | Fermetures à venir | Upcoming closures | |
| `infos.access` | Accès et stationnement | Getting here & parking | |
| `infos.accessText` | En plein centre-ville d’Amiens, rue des Jacobins, à quelques pas de la Comédie de Picardie. Stationnement payant dans la rue et les rues voisines, parkings du centre-ville à quelques minutes à pied. | Right in Amiens city centre, on rue des Jacobins, a few steps from the Comédie de Picardie theatre. Paid parking on the street and nearby streets, city-centre car parks a few minutes’ walk away. | **à valider (accès, stationnement)** |
| `infos.mapTitle` | Plan d’accès à la Teinturerie des Jacobins, 47 rue des Jacobins à Amiens | Map to Teinturerie des Jacobins, 47 rue des Jacobins, Amiens | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | Frequently asked questions | |
| `faq.title` | Avant de passer | Before you come | |
| `faq.items.0.q` | Quels sont vos horaires ? | What are your opening hours? | **à valider (horaires)** |
| `faq.items.0.a` | Le pressing est ouvert du lundi au samedi, de 9 h à 19 h. Vous pouvez déposer et reprendre vos vêtements sans rendez-vous. | We are open Monday to Saturday, 9am to 7pm. You can drop off and collect without an appointment. | **à valider (horaires)** |
| `faq.items.1.q` | En combien de temps mes vêtements sont-ils prêts ? | How long until my clothes are ready? | **à valider (délais)** |
| `faq.items.1.a` | Cela dépend de l’article : comptez en général 24 à 48 h pour une chemise, quelques jours pour un manteau ou une couette, et un délai sur devis pour une robe de mariée. Le tableau des tarifs donne le délai de chaque article, et la date de retrait est notée sur votre ticket. | It depends on the item: usually 24 to 48 hours for a shirt, a few days for a coat or a duvet, and a quoted time for a wedding dress. The price list gives the turnaround for each item, and your ready date is written on your ticket. | **à valider (délais)** |
| `faq.items.2.q` | Comment connaître le prix avant de déposer ? | How can I know the price before dropping off? | |
| `faq.items.2.a` | Les prix de départ sont affichés dans le tableau des tarifs. Pour une pièce particulière ou une tache, envoyez 1 à 3 photos par le formulaire de devis, ou passez au comptoir : le prix vous est annoncé avant que l’on commence. | Starting prices are listed in the price table. For a particular piece or a stain, send 1 to 3 photos through the quote form, or come to the counter: you get the price before any work starts. | |
| `faq.items.3.q` | Toutes les taches partent-elles ? | Do all stains come out? | |
| `faq.items.3.a` | La plupart, oui, surtout si elles sont récentes. Certaines taches anciennes ou certaines matières fragiles ne permettent pas un résultat parfait : on vous le dit avant, honnêtement. En attendant, ne frottez pas et ne repassez pas une tache, apportez le vêtement le plus tôt possible. | Most do, especially fresh ones. Some old stains or fragile fabrics will not give a perfect result: we tell you honestly beforehand. In the meantime, don’t rub or iron a stain, and bring the garment in as soon as you can. | |
| `faq.items.4.q` | Comment puis-je payer ? | How can I pay? | **à valider (moyens de paiement)** |
| `faq.items.4.a` | Le paiement se fait au retrait de vos vêtements, en espèces ou par carte bancaire. | You pay when you collect your clothes, in cash or by card. | **à valider (moyens de paiement)** |
| `faq.items.5.q` | Où se garer pour déposer mes vêtements ? | Where can I park to drop off my clothes? | **à valider (stationnement)** |
| `faq.items.5.a` | Le pressing est rue des Jacobins, en plein centre-ville. Le stationnement est payant dans la rue et les rues voisines, et plusieurs parkings du centre sont à quelques minutes à pied. | We are on rue des Jacobins, right in the city centre. There is paid parking on the street and nearby streets, and several city-centre car parks a few minutes’ walk away. | **à valider (stationnement)** |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Pressing et teinturerie au centre-ville d’Amiens : chemises, costumes, manteaux, robes de mariée, linge de maison et détachage. | Dry cleaning and dyeing in Amiens city centre: shirts, suits, coats, wedding dresses, household linen and stain removal. | |
| `footer.contact` | Le pressing | The shop | |
| `footer.pages` | Pages | Pages | |
| `footer.rights` | Teinturerie des Jacobins, Amiens | Teinturerie des Jacobins, Amiens | |
| `footer.legal` | Mentions légales | Legal notice | |
| `footer.logoTitle` | Teinturerie des Jacobins, pressing à Amiens | Teinturerie des Jacobins, dry cleaner in Amiens | |

### slots

| Clé | Français | English | |
|---|---|---|---|
| `slots.boutique` | La boutique | The shop | |

### devis

| Clé | Français | English | |
|---|---|---|---|
| `devis.metaTitle` | Demander un devis de pressing à Amiens | Teinturerie des Jacobins | Request a dry cleaning quote in Amiens | Teinturerie des Jacobins | |
| `devis.metaDescription` | Envoyez 1 à 3 photos de votre vêtement ou de la tache : la Teinturerie des Jacobins vous répond avec un prix et un délai. Pressing du centre-ville d’Amiens. | Send 1 to 3 photos of your garment or the stain: Teinturerie des Jacobins replies with a price and a turnaround time. Dry cleaner in Amiens city centre. | |
| `devis.eyebrow` | Devis gratuit | Free quote | **à valider (devis gratuit ?)** |
| `devis.title` | Demander un devis | Request a quote | |
| `devis.lead` | Décrivez le vêtement et joignez 1 à 3 photos, surtout s’il s’agit d’une tache. Le pressing vous répond avec un prix et un délai. Rien n’est engagé sans votre accord. | Describe the garment and attach 1 to 3 photos, especially for a stain. We reply with a price and a turnaround time. Nothing is agreed without your go-ahead. | |
| `devis.preferCall` | Plus simple au téléphone ? | Easier by phone? | |
| `devis.sections.object` | Le vêtement | The garment | |
| `devis.sections.repair` | La tache ou le besoin | The stain or what you need | |
| `devis.sections.photos` | Les photos | Photos | |
| `devis.sections.delay` | Le délai souhaité | When you need it | |
| `devis.sections.contact` | Vos coordonnées | Your details | |
| `devis.fields.objects.chemise` | Chemise | Shirt | |
| `devis.fields.objects.costume` | Costume | Suit | |
| `devis.fields.objects.manteau` | Manteau, doudoune | Coat, down jacket | |
| `devis.fields.objects.robe` | Robe | Dress | |
| `devis.fields.objects.mariee` | Robe de mariée | Wedding dress | |
| `devis.fields.objects.cuir` | Cuir, daim | Leather, suede | |
| `devis.fields.objects.linge` | Linge, couette | Linen, duvet | |
| `devis.fields.objects.autre` | Autre | Other | |
| `devis.fields.repairsLabel` | Votre besoin | What you need | |
| `devis.fields.repairsHint` | plusieurs choix possibles | choose as many as you like | |
| `devis.fields.repair` | Décrivez la tache ou le besoin | Describe the stain or what you need | |
| `devis.fields.repairPh` | Ex. : tache de vin sur la manche depuis une semaine, robe en soie, costume à récupérer samedi… | E.g. wine stain on the sleeve, a week old; silk dress; suit needed by Saturday… | |
| `devis.fields.photos` | Ajouter des photos | Add photos | |
| `devis.fields.photosHint` | 1 à 3 photos : le vêtement en entier, la tache de près, et l’étiquette d’entretien si possible. | 1 to 3 photos: the whole garment, the stain up close, and the care label if possible. | |
| `devis.fields.photoRemove` | Retirer la photo | Remove photo | |
| `devis.fields.photosCount` | {count}/3 | {count}/3 | |
| `devis.fields.delays.pas-presse` | Pas pressé | No rush | |
| `devis.fields.delays.semaine` | Dans la semaine | Within the week | |
| `devis.fields.delays.urgent` | Le plus vite possible | As soon as possible | |
| `devis.fields.delays.date` | Pour une date précise : | By a specific date: | |
| `devis.fields.date` | Date souhaitée | Date needed | |
| `devis.fields.name` | Nom | Name | |
| `devis.fields.phone` | Téléphone | Phone | |
| `devis.fields.email` | E-mail | Email | |
| `devis.fields.emailHint` | (pour recevoir la confirmation) | (to receive a confirmation) | |
| `devis.fields.message` | Message | Message | |
| `devis.fields.messagePh` | Une précision, une question, la marque ou la matière du vêtement… | Any detail, a question, the brand or fabric of the garment… | |
| `devis.repairs.nettoyage` | Nettoyage | Cleaning | |
| `devis.repairs.repassage` | Repassage | Pressing | |
| `devis.repairs.detachage` | Détachage | Stain removal | |
| `devis.errors.object` | Choisissez le type de vêtement. | Choose the type of garment. | |
| `devis.errors.repair` | Dites-nous ce qu’il faut faire (une case ou quelques mots). | Tell us what needs doing (tick a box or write a few words). | |
| `devis.errors.name` | Indiquez votre nom. | Please enter your name. | |
| `devis.errors.phone` | Indiquez un numéro de téléphone valide. | Please enter a valid phone number. | |
| `devis.errors.email` | Cette adresse e-mail ne semble pas valide. | This email address doesn’t look valid. | |
| `devis.errors.photo` | Cette photo n’a pas pu être lue. Essayez une autre image. | This photo couldn’t be read. Try another image. | |
| `devis.errors.generic` | L’envoi n’a pas abouti. Réessayez, ou appelez le pressing au 03 22 91 77 93. | Sending failed. Please try again, or call us on +33 3 22 91 77 93. | |
| `devis.submit` | Envoyer la demande | Send request | |
| `devis.sending` | Envoi… | Sending… | |
| `devis.privacy` | Vos coordonnées servent uniquement à répondre à cette demande. Elles ne sont ni revendues ni utilisées pour de la publicité. | Your details are only used to reply to this request. They are never sold or used for advertising. | |
| `devis.success.title` | Demande bien reçue | Request received | |
| `devis.success.text` | Le pressing regarde votre demande et vous répond avec un prix et un délai. | We will look at your request and reply with a price and a turnaround time. | |
| `devis.success.email` | Un récapitulatif vient de vous être envoyé par e-mail. | A summary has just been sent to your email. | |
| `devis.success.notNotified` | Pour être sûr que le pressing l’a bien reçue, appelez directement : | To make sure we received it, please call us directly: | |
| `devis.success.again` | Faire une autre demande | Make another request | |
| `devis.message.title` | Nouvelle demande de devis | New quote request | |
| `devis.message.object` | Vêtement | Garment | |
| `devis.message.repairs` | Besoin | Needs | |
| `devis.message.repair` | Précisions | Details | |
| `devis.message.delay` | Délai souhaité | Needed | |
| `devis.message.name` | Nom | Name | |
| `devis.message.phone` | Téléphone | Phone | |
| `devis.message.email` | E-mail | Email | |
| `devis.message.message` | Message | Message | |
| `devis.message.photos` | Photos jointes | Photos attached | |
| `devis.email.subject` | Demande de devis | Quote request | |
| `devis.email.confirmSubject` | Votre demande de devis, Teinturerie des Jacobins | Your quote request, Teinturerie des Jacobins | |
| `devis.email.confirmIntro` | Bonjour {name},<br><br>Merci pour votre demande. Voici ce que nous avons reçu : | Hello {name},<br><br>Thank you for your request. Here is what we received: | |
| `devis.email.confirmOutro` | Nous revenons vers vous avec un prix et un délai. Pour toute question : {phone}, {hours}.<br><br>Teinturerie des Jacobins<br>47 rue des Jacobins, 80000 Amiens | We will get back to you with a price and a turnaround time. Any question: {phone}, {hours}.<br><br>Teinturerie des Jacobins<br>47 rue des Jacobins, 80000 Amiens, France | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.pressing.metaTitle` | Pressing à Amiens, centre-ville : chemises, costumes, manteaux | Teinturerie des Jacobins | Dry cleaner in Amiens city centre: shirts, suits, coats | Teinturerie des Jacobins | |
| `pages.pressing.metaDescription` | Pressing au centre-ville d’Amiens, 47 rue des Jacobins : nettoyage de chemises, costumes, manteaux, couettes, détachage. Prix et délais affichés, du lundi au samedi de 9 h à 19 h. | Dry cleaner in Amiens city centre, 47 rue des Jacobins: shirts, suits, coats, duvets, stain removal. Prices and turnaround shown upfront, Monday to Saturday, 9am to 7pm. | |
| `pages.pressing.eyebrow` | Pressing · Centre-ville d’Amiens | Dry cleaning · Amiens city centre | |
| `pages.pressing.title` | Pressing à Amiens | Dry cleaner in Amiens | |
| `pages.pressing.intro` | Une chemise pour lundi, un costume pour un mariage, le manteau d’hiver à rafraîchir : déposez-les rue des Jacobins, en plein centre-ville. Le prix et la date de retrait vous sont donnés au comptoir. | A shirt for Monday, a suit for a wedding, the winter coat to freshen up: drop them off on rue des Jacobins, right in the city centre. You get the price and the ready date at the counter. | |
| `pages.pressing.cta` | Demander un devis | Request a quote | |
| `pages.pressing.listTitle` | Ce que nous nettoyons | What we clean | |
| `pages.pressing.list.0.title` | Chemises et hauts | Shirts and tops | |
| `pages.pressing.list.0.text` | Lavées et repassées, rendues sur cintre ou pliées, chemisiers et pulls compris. | Washed and pressed, returned on a hanger or folded, blouses and jumpers included. | |
| `pages.pressing.list.1.title` | Costumes | Suits | |
| `pages.pressing.list.1.text` | Vestes, pantalons, costumes deux ou trois pièces, cravates. | Jackets, trousers, two or three-piece suits, ties. | |
| `pages.pressing.list.2.title` | Manteaux | Coats | |
| `pages.pressing.list.2.text` | Laine, cachemire, doudounes, imperméables et trenchs. | Wool, cashmere, down jackets, raincoats and trench coats. | |
| `pages.pressing.list.3.title` | Linge de maison | Household linen | |
| `pages.pressing.list.3.text` | Couettes, couvertures, plaids, nappes et rideaux. | Duvets, blankets, throws, tablecloths and curtains. | |
| `pages.pressing.howTitle` | Comment ça se passe | How it works | |
| `pages.pressing.how.0.title` | Vous déposez au comptoir | Drop off at the counter | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.how.0.text` | On regarde le vêtement avec vous : la matière, l’étiquette d’entretien, une éventuelle tache. | We look at the garment with you: the fabric, the care label, any stain. | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.how.1.title` | Prix et date annoncés | Price and date given | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.how.1.text` | Le tarif et la date de retrait sont notés sur votre ticket, sans surprise. | The price and your ready date are written on your ticket, no surprises. | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.how.2.title` | Vous le reprenez prêt à porter | Collect it ready to wear | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.how.2.text` | Nettoyé, repassé, sur cintre et sous housse ou plié selon l’article. | Cleaned, pressed, on a hanger in a cover or folded, depending on the item. | **à valider (rendu sur cintre, sous housse)** |
| `pages.pressing.related` | Une pièce particulière, en cuir, en daim ou une robe de soirée ? Envoyez une photo, le pressing vous répond avec un prix et un délai. | A special piece, in leather or suede, or an evening dress? Send a photo and we will reply with a price and a turnaround time. | |
| `pages.mariee.metaTitle` | Nettoyage de robe de mariée à Amiens | Teinturerie des Jacobins | Wedding dress cleaning in Amiens | Teinturerie des Jacobins | **à valider (prestations robe de mariée)** |
| `pages.mariee.metaDescription` | Nettoyage et détachage de robe de mariée à Amiens, centre-ville : satin, tulle, dentelle, broderies. Devis sur photo avant dépôt. Teinturerie des Jacobins, 47 rue des Jacobins. | Wedding dress cleaning and stain removal in Amiens city centre: satin, tulle, lace, embroidery. Quote from a photo before drop-off. Teinturerie des Jacobins, 47 rue des Jacobins. | **à valider (prestations robe de mariée)** |
| `pages.mariee.eyebrow` | Robe de mariée · Amiens | Wedding dress · Amiens | **à valider (prestations robe de mariée)** |
| `pages.mariee.title` | Nettoyage de robe de mariée à Amiens | Wedding dress cleaning in Amiens | **à valider (prestations robe de mariée)** |
| `pages.mariee.intro` | Après la fête, la traîne a vu l’herbe, la piste de danse et quelques verres de champagne. Confiez votre robe à un pressing qui prend le temps de la regarder, et recevez un devis avant de la déposer. | After the party, the train has met the grass, the dance floor and a few glasses of champagne. Trust your dress to a dry cleaner who takes the time to look at it, and get a quote before you drop it off. | **à valider (prestations robe de mariée)** |
| `pages.mariee.cta` | Demander un devis | Request a quote | **à valider (prestations robe de mariée)** |
| `pages.mariee.listTitle` | Ce que nous prenons en charge | What we take care of | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.0.title` | Le nettoyage | Cleaning | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.0.text` | Selon le tissu : satin, tulle, mousseline, dentelle, crêpe. | Suited to the fabric: satin, tulle, chiffon, lace, crêpe. | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.1.title` | Le détachage | Stain removal | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.1.text` | Traîne, ourlet, taches de vin, de maquillage ou d’herbe. | Train, hem, wine, make-up or grass stains. | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.2.title` | Les détails fragiles | Fragile details | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.2.text` | Broderies, perles, sequins et boutons sont vérifiés avant de commencer. | Embroidery, beads, sequins and buttons are checked before we start. | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.3.title` | Les robes du cortège | Wedding party outfits | **à valider (prestations robe de mariée)** |
| `pages.mariee.list.3.text` | Robes de soirée, de cérémonie, costumes des témoins. | Bridesmaid and evening dresses, the best men’s suits. | **à valider (prestations robe de mariée)** |
| `pages.mariee.howTitle` | Les bons réflexes | Good habits | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.0.title` | Apportez-la vite | Bring it in soon | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.0.text` | Les taches de sucre ou de champagne, invisibles au début, jaunissent avec le temps. Mieux vaut ne pas attendre des mois. | Sugar or champagne stains, invisible at first, turn yellow over time. Better not to wait for months. | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.1.title` | Envoyez une photo | Send a photo | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.1.text` | La robe en entier, les taches de près et l’étiquette : le pressing vous dit ce qui est possible. | The whole dress, the stains up close and the label: we tell you what can be done. | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.2.title` | Un devis avant le dépôt | A quote before drop-off | **à valider (prestations robe de mariée)** |
| `pages.mariee.how.2.text` | Le prix et le délai vous sont donnés avant que vous ne confiiez la robe. | You get the price and the turnaround time before you hand over the dress. | **à valider (prestations robe de mariée)** |
| `pages.mariee.related` | Robe de cortège, costume du marié ou tenue de cérémonie : envoyez une photo avec le formulaire de devis, vous obtenez un prix et un délai. | Bridesmaid dress, groom’s suit or ceremony outfit: send a photo through the quote form and get a price and a turnaround time. | **à valider (prestations robe de mariée)** |

### legal

| Clé | Français | English | |
|---|---|---|---|
| `legal.metaTitle` | Mentions légales | Teinturerie des Jacobins | Legal notice | Teinturerie des Jacobins | |
| `legal.title` | Mentions légales | Legal notice | |
| `legal.editor` | Éditeur | Publisher | |
| `legal.editorText` | {company}, 47 rue des Jacobins, 80000 Amiens. Téléphone : 03 22 91 77 93. | {company}, 47 rue des Jacobins, 80000 Amiens, France. Phone: +33 3 22 91 77 93. | |
| `legal.siret` | SIRET : {siret}. | SIRET: {siret}. | |
| `legal.toFill` | à compléter | to be completed | |
| `legal.director` | Responsable de la publication : {director}. | Publication director: {director}. | |
| `legal.host` | Hébergeur | Hosting | |
| `legal.data` | Données personnelles | Personal data | |
| `legal.dataText` | Les informations envoyées par le formulaire de devis (nom, téléphone, e-mail, photos, message) servent uniquement à répondre à votre demande. Elles sont transmises par e-mail au pressing et ne sont pas conservées sur le site. Vous pouvez demander leur suppression en appelant le pressing. | The information sent through the quote form (name, phone, email, photos, message) is only used to reply to your request. It is emailed to the shop and not stored on the website. You can ask for it to be deleted by calling the shop. | |
| `legal.photos` | Photos | Photos | |
| `legal.photosText` | Les photos du site sont celles de la Teinturerie des Jacobins. Aucune image de banque d’images ni générée par intelligence artificielle. | The photos on this website are those of Teinturerie des Jacobins. No stock images and no AI-generated images. | |
| `legal.cookies` | Cookies | Cookies | |
| `legal.cookiesText` | Le site n’utilise aucun cookie publicitaire ni de mesure d’audience. Seuls votre choix de langue et la fermeture du bandeau sont mémorisés. La carte est fournie par Google Maps. | This website uses no advertising or analytics cookies. Only your language choice and the closed banner are remembered. The map is provided by Google Maps. | |

## Textes alternatifs des photos

| Photo | Français | English |
|---|---|---|
| facade-rue-des-jacobins | La devanture de la Teinturerie des Jacobins, au 47 rue des Jacobins à Amiens | The shopfront of Teinturerie des Jacobins, 47 rue des Jacobins, Amiens |
| comptoir | Le comptoir de la Teinturerie des Jacobins, avec les vêtements prêts sur le portant | The counter at Teinturerie des Jacobins, with finished garments on the rail |
| portant-costumes | Des costumes nettoyés, sous housse, sur le portant du pressing | Cleaned suits in garment covers on the dry cleaner’s rail |
| repassage-chemise | Une chemise blanche sur la table de repassage du pressing | A white shirt on the dry cleaner’s pressing table |
| detachage | Le poste de détachage du pressing, avec une tache traitée sur un tissu clair | The stain removal station, with a stain being treated on a light fabric |
| robe-mariee | Une robe de mariée nettoyée, sur son cintre, prête à être rendue | A cleaned wedding dress on its hanger, ready to be collected |
| equipe | L’équipe de la Teinturerie des Jacobins au comptoir | The Teinturerie des Jacobins team at the counter |
