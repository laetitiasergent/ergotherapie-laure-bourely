# Ergothérapie à domicile – Laure Bourély

Site vitrine statique (HTML/CSS/JS, sans dépendance ni étape de build) de Laure Bourély, ergothérapeute diplômée d'État à domicile dans le Pas-de-Calais (62).

## En ligne
https://ergo62-laurebourely.fr (Cloudflare Workers, déploiement automatique à chaque push sur `main`)

## Pages
- `index.html` : accueil (publics, arguments, mon histoire, avis, tarifs, secteur, contact)
- `adultes-seniors.html` : accompagnement des adultes et seniors
- `enfants.html` : accompagnement des enfants
- `styles.css` : styles communs (charte du flyer)
- `site.js` : menu mobile et remise en haut de page

## Prévisualiser en local
```bash
python3 -m http.server 4322
```
puis ouvrir http://localhost:4322

## À faire avant la mise en ligne
- Utiliser une version sous licence (sans filigrane) de l'illustration `images/ergotherapeute.png`
