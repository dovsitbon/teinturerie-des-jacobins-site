# Photos du site : sources et licences

12 images au total : **2 photos réelles** du pressing et **10 photos libres de droits** (Unsplash). Les photos libres de droits ne montrent jamais le pressing : elles illustrent une famille de vêtements, leur texte alternatif finit par « photo d’illustration », et les grands blocs portent la mention « Photo d’illustration ».

Préparation : `npm run media` (recadrage, version web dans `public/media/`, dimensions dans `data/media-sizes.json`) ; `next/image` sert ensuite l'AVIF ou le WebP à la bonne taille. Branchement : `data/photos.json`.

## Photos réelles (le pressing)

Recherche effectuée : fiche Google Maps (non revendiquée par le pressing, 6 photos de contributeurs), recherche web. Aucun site officiel, Instagram, Facebook, PagesJaunes, TripAdvisor ou page Amiens Métropole trouvé pour ce nom. Sur les 6 photos Google, 4 sont écartées : ce sont des photos de clients montrant des vêtements emballés ou abîmés, pas le commerce.

| Fichier | Emplacement | Source | Auteur | Licence / statut |
|---|---|---|---|---|
| `public/media/hero/devanture-teinturerie.jpg` (et `public/og.jpg`) | Hero, image de partage | [Fiche Google Maps « Teinturerie des Jacobins »](https://www.google.com/maps/place/Teinturerie+des+Jacobins/@49.8917499,2.2995095,17z) | Eric Cossin (contributeur Google Maps), novembre 2017 | Contribution publique Google Maps, **droits à l'auteur : à remplacer par une photo du pressing ou à faire valider** |
| `public/media/facade/facade-rue-des-jacobins.jpg` | Page « Pressing à Amiens » | Même fiche Google Maps | Eric Cossin, novembre 2017 | Idem |

Originaux (non versionnés) : `assets/raw/jacobins_01.jpg` à `jacobins_06.jpg`.

## Photos libres de droits (Unsplash)

Licence : [licence Unsplash](https://unsplash.com/fr/licence) : usage commercial gratuit, sans attribution obligatoire (créditée ici par courtoisie), sans revente de la photo telle quelle.

| Fichier (`public/media/vetements/`) | Emplacement | Page Unsplash | Auteur |
|---|---|---|---|
| `chemises-cintre.jpg` | Tuile Chemises | [hMMXhKSZk7k](https://unsplash.com/photos/hMMXhKSZk7k) | Nimble Made |
| `costume-noir-cintre.jpg` | Tuile Costumes | [VsCBt8j-qg4](https://unsplash.com/photos/VsCBt8j-qg4) | Victoria Priessnitz |
| `manteau-tweed-cintre.jpg` | Tuile Manteaux | [pvCjWi5bATg](https://unsplash.com/photos/pvCjWi5bATg) | Lisa Anna |
| `robe-blanche-porte.jpg` | Tuile Robes et robes de mariée | [DnOgzmRYFeg](https://unsplash.com/photos/DnOgzmRYFeg) | Lauren Richmond |
| `veste-cuir-marron.jpg` | Tuile Cuir et daim | [3OFBcQQTN64](https://unsplash.com/photos/3OFBcQQTN64) | Derick McKinney |
| `couette-blanche.jpg` | Tuile Linge de maison et couettes | [9nhxEa3PK30](https://unsplash.com/photos/9nhxEa3PK30) | Sincerely Media |
| `revers-veste-laine.jpg` | Bloc « Pièces délicates » | [Qllgovq0OKs](https://unsplash.com/photos/Qllgovq0OKs) | Hermes Rivera |
| `gouttes-chemise-bleue.jpg` | Bloc « Détachage » | [f1Avh8hWDog](https://unsplash.com/photos/f1Avh8hWDog) | Cameron Faulkner |
| `robe-mariee-bustier.jpg` | Bloc « Robe de mariée » | [JeEemtLSdjU](https://unsplash.com/photos/JeEemtLSdjU) | Samantha Gades |
| `robe-mariee-dentelle.jpg` | Page « Nettoyage de robe de mariée » | [vqykG3tH_Wo](https://unsplash.com/photos/vqykG3tH_Wo) | Alexander Mass |

## À remplacer en priorité

Dès que le pressing fournit ses propres photos (voir `assets/A-PHOTOGRAPHIER.md`) : la façade actuelle (2017), puis le comptoir, les portants et une robe de mariée nettoyée. Les photos Unsplash peuvent rester en illustration des tuiles.
