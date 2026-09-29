# UZURI PROD — Site Web Officiel

> **« Créer. Communiquer. Valoriser. »**  
> *« Vous avez quelque chose à offrir. Nous vous aidons à le faire connaître. »*  
> Entreprise de communication & production audiovisuelle basée à Goma, Nord-Kivu, RDC. Fondée le 14 janvier 2026.

---

## 1. Technologies Utilisées

Ce projet privilégie la simplicité, la lisibilité et la maintenabilité à long terme :
- **HTML5 Sémantique** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Pur** avec variables `:root` pour une centralisation totale des tokens de marque.
- **JavaScript Vanilla** (aucun framework lourd, zéro dépendance superflue).
- **Google Fonts** : *Syne* (titres expressifs) et *Plus Jakarta Sans* (lisibilité mobile optimale).

---

## 2. Structure des Dossiers

```text
webSiteUzuri/
├── index.html              # Page d'accueil (vitrine principale)
├── a-propos.html           # Histoire, mission, vision, genèse d'Uzuri Prod
├── services.html           # Présentation des 7 expertises
├── portfolio.html          # Réalisations réelles classées
├── equipe.html             # Présentation de l'équipe
├── contact.html            # Coordonnées, devis, localisation
│
├── css/
│   ├── style.css           # Design tokens, typographie, header, footer, composants
│   └── responsive.css      # Adaptations mobile-first et breakpoints
│
├── js/
│   └── main.js             # Menu mobile accessible, interactions légères
│
├── images/
│   ├── logo/               # Logos officiels (logo-uzuri.png)
│   ├── team/               # Photos de l'équipe [À AJOUTER]
│   ├── portfolio/          # Dossiers de shootings réels (defenseJemima, sortieCouple, streetphotos, Zik+, etc.)
│   └── general/            # Visuels d'ambiance et d'accroche
│
└── README.md               # Guide technique du projet
```

---

## 3. Lancer le Projet Localement

Aucune installation complexe (npm, node, etc.) n'est obligatoire pour prévisualiser le site :

1. **Option simple avec VS Code :**
   - Ouvrez le dossier `webSiteUzuri` dans VS Code.
   - Installez l'extension **Live Server**.
   - Faites un clic droit sur `index.html` > **Open with Live Server**.

2. **Option avec un serveur local Python ou Node.js :**
   ```bash
   # Avec Python :
   python -m http.server 3000
   # Ouvrez ensuite http://localhost:3000 dans votre navigateur
   ```

---

## 4. Guide de Personnalisation & Maintenance

### A. Modifier les Couleurs de la Marque
Toutes les couleurs sont définies dans `css/style.css` sous `:root` :
```css
:root {
  --uzuri-yellow: #FDD001;  /* Lumière, CTA */
  --uzuri-black: #050505;   /* Fond immersif */
  --uzuri-charcoal: #171717;/* Cartes et conteneurs */
  --uzuri-off-white: #F7F6F2;
  --uzuri-gold: #E6B900;
  --uzuri-light-gray: #E5E5E5;
}
```

### B. Mettre à Jour les Coordonnées de Contact
Les coordonnées (téléphones, adresse, emails, réseaux sociaux) sont centralisées dans le `<footer>` de chaque fichier HTML et sur la future page `contact.html` :
- **Adresse :** Goma, RDC — Quartier Kyeshero, Avenue Lusaka
- **Téléphone / WhatsApp :** `+243 901 099 626` & `+243 978 556 216`
- **Email :** `uzuriprod001@gmail.com`

### C. Ajouter des Photos d'Équipe et Réalisations
- Placez les portraits des membres dans `images/team/` en respectant un ratio carré ou 4:5.
- Ajoutez vos nouvelles photos ou vidéos dans `images/portfolio/` en les compressant préalablement (format WebP ou JPG optimisé) pour garantir un chargement rapide sur smartphone.

---

## 5. Déploiement sur Vercel

1. Créez un dépôt Git propre :
   ```bash
   git init
   git add .
   git commit -m "feat: socle technique et systeme visuel Uzuri Prod"
   ```
2. Poussez sur votre compte GitHub (`github.com/votre-compte/uzuri-prod`).
3. Connectez-vous sur [vercel.com](https://vercel.com).
4. Cliquez sur **Add New Project** et importez le dépôt GitHub.
5. Vercel détecte automatiquement le projet statique : cliquez directement sur **Deploy**.

---

## 6. Prochaine Étape
Validation du socle technique et du système visuel avant de développer l'intégralité de la page d'accueil.
