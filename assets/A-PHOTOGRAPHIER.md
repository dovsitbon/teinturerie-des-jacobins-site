# Photos à prendre sur place

Le site affiche des emplacements dessinés tant qu'il n'y a pas de photo. Pour chaque photo : la poser dans le bon dossier, l'ajouter à `scripts/media.mjs` (PICKS), lancer `npm run media`, puis renseigner le chemin dans `data/photos.json`. Le nom choisi dans PICKS sert de clé au texte alternatif (déjà rédigé dans `locales/*.json` → `alt` pour les noms ci-dessous).

Lumière du jour, sans flash, pas de visages de clients. Format horizontal pour le hero, vertical pour les blocs.

| Emplacement (`data/photos.json`) | Dossier | Nom conseillé | Ce qu'il faut montrer |
|---|---|---|---|
| `hero` (et image de partage) | `assets/hero/` | `facade-rue-des-jacobins` | La devanture et l'enseigne, de face ou de trois quarts, en horizontal. Photo la plus importante. |
| `facade` | `assets/facade/` | `facade-rue-des-jacobins` | Variante de la façade, vitrine éclairée. |
| `boutique` | `assets/boutique/` | `comptoir` | Le comptoir avec les vêtements prêts sur le portant. |
| `equipe` | `assets/boutique/` | `equipe` | L'équipe au comptoir, si elle le souhaite. |
| `delicats` | `assets/vetements/` | `portant-costumes` | Costumes ou manteaux sous housse, alignés sur le portant. |
| `detachage` | `assets/vetements/` | `detachage` | Le poste de détachage, une main qui traite une tache sur un tissu clair. |
| `mariee` | `assets/vetements/` | `robe-mariee` | Une robe de mariée nettoyée sur son cintre (avec l'accord de la cliente). |
| `tiles.chemises` | `assets/vetements/` | `repassage-chemise` | Une chemise blanche sur la table de repassage. |
| `tiles.costumes`, `manteaux`, `robes`, `cuir`, `linge` | `assets/vetements/` | au choix | Un détail par famille : revers de costume, manteau de laine, robe, veste en cuir, couette pliée. |

Si des photos Google Maps sont récupérées (`jacobins_*.jpg` dans Téléchargements), les mettre dans `assets/raw/` et les ajouter de la même façon.
