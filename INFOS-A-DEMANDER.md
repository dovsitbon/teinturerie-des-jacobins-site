# Teinturerie des Jacobins : infos à demander au pressing

Le site est en ligne avec ce qu'on sait de façon sûre : nom, adresse (47 rue des Jacobins, 80000 Amiens), téléphone fixe (03 22 91 77 93), catégorie Google « Pressing » et note Google (3,4/5 sur 37 avis, relevée le 10 novembre 2026). Aucune information publique trouvée en ligne sur la société (ni site, ni réseaux, ni registre retrouvé sous ce nom). Tout le reste est à valider ou à compléter avec lui. Les corrections se font dans `data/*.json` et `locales/*.json` (voir CONTENU.md).

## À lui demander

1. **Son prénom et l'histoire du pressing** : depuis quand rue des Jacobins, reprise d'une ancienne teinturerie ? (Pour un bloc « La maison », pas encore écrit faute d'infos.)
2. **La liste des services et les prix « à partir de »** : `data/tarifs.json`. Tous les prix sont vides et affichés « sur demande ». C'est la priorité : le site est construit pour rassurer par des prix affichés.
3. **Les délais réels** par article (`delay` dans `data/tarifs.json`) : les valeurs actuelles sont des ordres de grandeur à confirmer. Fait-il de l'express (dans la journée) ?
4. **Cuir et daim** : les traite-t-il sur place, les confie-t-il à un spécialiste, ou pas du tout ? (Marqué « à confirmer ».)
5. **Robe de mariée** : nettoyage sur place ou sous-traité, délai, mise en boîte de conservation ?
6. **Les horaires exacts** : le site affiche du lundi au samedi, 9 h – 19 h, sans coupure le midi (`data/horaires.json`), plus ses fermetures de l'année (congés, ponts) pour le bandeau (`data/annonces.json`).
7. **Un portable pour WhatsApp** : si oui, renseigner `whatsapp` dans `data/site.json` (format 336XXXXXXXX). Pratique pour envoyer la photo d'une tache.
8. **L'e-mail du pressing** pour recevoir les demandes de devis : à mettre dans Vercel (`DEVIS_NOTIFY_EMAIL`) avec une clé Resend (`RESEND_API_KEY`, `RESEND_FROM`). Tant que ce n'est pas fait, le formulaire fonctionne mais invite le client à appeler.
9. **Les moyens de paiement** (le site dit espèces et carte) et **le devis gratuit** (annoncé : à confirmer).
10. **Des photos de la boutique** : façade, comptoir, portants, vêtements prêts, robe de mariée, détachage. Liste détaillée : `assets/A-PHOTOGRAPHIER.md`.
11. **Le logo** : a-t-il une enseigne ou un logo dessiné ? Sinon, valider le logo typographique (cintre et goutte au trait).
12. **SIRET, forme de la société, nom du responsable** pour les mentions légales (`data/site.json` → `legal`).
13. **Accès et stationnement** : le texte actuel est général (stationnement payant, parkings du centre). Un parking précis à citer ?
14. **Les avis** : peut-on reprendre quelques avis Google, avec l'accord de leurs auteurs ? (`data/avis.json`, vide pour l'instant.)
15. **Nom de domaine** : en a-t-il un, ou faut-il en prendre un (teinturerie-des-jacobins.fr par exemple) ?
