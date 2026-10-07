# Portfolio — Charles

React 18 + Vite 6 + Tailwind CSS 4 · Framer Motion · React Icons · React Router · EmailJS

## Démarrage

```bash
npm install
cp .env.example .env     # puis renseignez vos identifiants EmailJS
npm run dev              # http://localhost:5173
npm run build            # production → dossier dist/
```

## Où modifier le contenu

Tout le texte, les projets, services, articles et liens sociaux sont dans **`src/data/content.js`**.
Les valeurs marquées `EXEMPLE` (téléphone, liens GitHub/LinkedIn/WhatsApp, chiffres, articles du blog) sont à remplacer.

- Photo : placez `charles.jpg` dans `public/` puis `photo: "/charles.jpg"` (sinon le logo est affiché).
- CV : placez `cv.pdf` dans `public/`.
- Capture d'un projet : `image: "/projets/mon-projet.png"` dans l'objet du projet.
- Témoignages : ajoutez de vrais retours dans `testimonials` — la section apparaît automatiquement.

## Charte graphique & thème jour/nuit

Les couleurs (blanc · bleu · violet) sont des variables CSS dans `src/index.css` (`:root` = jour, `.dark` = nuit).
Le choix est mémorisé et suit la préférence du système au premier chargement.

## Formulaire de contact (EmailJS)

1. Créez un compte sur https://www.emailjs.com
2. **Email Services** → connectez votre boîte (Gmail…) → notez le *Service ID*.
3. **Email Templates** → créez un modèle utilisant ces variables :
   `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`
   (définissez « To Email » = votre adresse, « Reply To » = `{{reply_to}}`) → notez le *Template ID*.
4. **Account** → copiez la *Public Key*.
5. Renseignez les trois valeurs dans `.env` (`VITE_EMAILJS_*`) et relancez `npm run dev`.

> La clé publique EmailJS est faite pour être exposée côté navigateur. Dans le tableau de bord EmailJS,
> limitez les domaines autorisés à votre site pour éviter les abus. Le formulaire intègre aussi un champ anti-spam.

## Déploiement

Netlify (`public/_redirects`) et Vercel (`vercel.json`) sont préconfigurés pour le routage multi-pages.
N'oubliez pas d'ajouter les variables `VITE_EMAILJS_*` dans les réglages de l'hébergeur.
