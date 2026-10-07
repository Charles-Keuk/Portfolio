import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSymfony,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiPenTool,
  FiCreditCard,
  FiLayout,
  FiTool,
  FiBell,
  FiNavigation,
  FiBarChart2,
} from "react-icons/fi";


export const profile = {
  name: "Charles",
  role: "Développeur Full-Stack",
  city: "Douala",
  location: "Douala, Cameroun",
  tagline:
    "Je conçois des applications web et mobiles performantes, pensées pour le contexte africain : Mobile Money, SMS, FCFA et adressage local.",
  email: "charlesfeugang1@gmail.com",
  phone: "+237 6 52 08 30 96/ 6 57 84 70 13",
  cvUrl: "/cv.pdf", // placez votre CV dans /public/cv.pdf
  photo: "charles.png", // ex. "/charles.jpg" (dans /public) — sinon le logo est affiché
  socials: {
    github: "https://github.com/Charles-Keuk", 
    linkedin: "https://www.linkedin.com/in/charles-keukouo-b854892ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHe7HO9cKTdii1LQCzrCfEg%3D%3D", // EXEMPLE
    whatsapp: "https://wa.me/237652083096", 
  },
};

export const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const marqueeItems = [
  "Développement Web",
  "Applications Mobiles",
  "Applications Desktop",
  "SDK", 
  "API & Back-end",
  "UI/UX Design",
  "Mobile Money & SMS",
];

export const about = {
  paragraphs: [
    "Développeur logiciel basé à Douala, je suis étudiant en Génie Logiciel à l'Université de Dschang. Je travaille sur des projets full-stack, du back-end à l'application mobile, en passant par les tableaux de bord web.",
    "J'aime construire des produits utiles pour le marché local : intégration de MTN Mobile Money et Orange Money, notifications par SMS, optimisation de trajets de livraison et plateformes de mobilité.",
  ],
  stats: [
    { value: "4+", label: "Projets réalisés" }, // EXEMPLE
    { value: "3+", label: "Années de pratique" }, // EXEMPLE
    { value: "100%", label: "Passion du code" },
  ],
};

export const timeline = [
  {
    title: "Étudie en Génie Logiciel ",
    place: "Institut Universitaire des Grandes Ecoles des Tropiques",
    text: "Formation en génie logiciel, Détenteur d'une licence Professionnelle donc d'un brevet de technicien Supérieur et également en formation chez la RocketForce academique pour la certification d'admin Sasleforce",
  },
  {
    title: "Développeur Full-Stack",
    place: "Douala, Cameroun",
    text: "Conception de plateformes web, mobiles et desktop : logistique, mobilité, fitness, notifications, applications de bureau.",
  },
];

export const skillGroups = [
  {
    title: "Front-end",
    icon: FiLayout,
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Back-end",
    icon: FiServer,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Symfony", icon: SiSymfony },
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Mobile",
    icon: FiSmartphone,
    items: [
      { name: "React Native", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Outils & Design",
    icon: FiTool,
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const services = [
  {
    icon: FiCode,
    title: "Développement Web",
    text: "Sites et applications web modernes, rapides et responsives, avec React et Next.js.",
  },
  {
    icon: FiSmartphone,
    title: "Applications Mobiles",
    text: "Applications mobiles fluides pour Android et iOS, pensées pour les usages locaux.",
  },
  {
    icon: FiServer,
    title: "API & Back-end",
    text: "APIs robustes et sécurisées avec Node.js ou Symfony, bases de données et temps réel.",
  },
  {
    icon: FiPenTool,
    title: "UI/UX Design",
    text: "Interfaces claires et élégantes, maquettes et prototypes centrés sur l'utilisateur.",
  },
  {
    icon: FiCreditCard,
    title: "Mobile Money & Paiement",
    text: "Intégration de MTN Mobile Money et Orange Money pour encaisser en FCFA.",
  },
  {
    icon: FiBell,
    title: "Notifications & SMS",
    text: "Push, e-mail, SMS (Africa's Talking) et temps réel pour garder vos utilisateurs informés.",
  },
];

export const process = [
  { title: "Découverte", text: "J'écoute votre besoin et je cadre les objectifs, le budget et les délais." },
  { title: "Design", text: "Maquettes et prototype validés avec vous avant d'écrire la moindre ligne." },
  { title: "Développement", text: "Développement itératif avec des démos régulières pour garder le cap." },
  { title: "Livraison", text: "Tests, mise en ligne, documentation et accompagnement après livraison." },
];

export const projectCategories = ["Tous", "Web", "Mobile", "Back-end"];

export const projects = [
  {
    title: "OptimRoute CM",
    category: "Mobile",
    icon: FiNavigation,
    gradient: "from-blue-500 to-violet-600",
    description:
      "Plateforme logistique d'optimisation de tournées de livraison : back-end, application mobile et tableau de bord web.",
    tags: ["React Native", "Node.js", "Dashboard"],
    demo: "",
    code: "",
  },
  {
    title: "Malik Home Fitness",
    category: "Web",
    icon: FiBarChart2,
    gradient: "from-violet-500 to-fuchsia-500",
    description:
      "Application web de fitness avec une page d'accueil animée et un tableau de bord d'administration (Next.js, TailAdmin).",
    tags: ["Next.js", "Tailwind CSS", "Admin"],
    demo: "",
    code: "",
  },
  {
    title: "VORA",
    category: "Mobile",
    icon: FiSmartphone,
    gradient: "from-indigo-500 to-blue-500",
    description:
      "Application mobile de mobilité et de covoiturage conçue pour le marché camerounais lors d'un hackathon.",
    tags: ["Mobile", "Mobilité", "Hackathon"],
    demo: "",
    code: "",
  },
  {
    title: "Plateforme de notification",
    category: "Back-end",
    icon: FiBell,
    gradient: "from-sky-500 to-indigo-600",
    description:
      "Service de notifications réutilisable pour plusieurs projets : push, e-mail, SMS (Africa's Talking) et temps réel avec Mercure.",
    tags: ["Symfony", "Mercure", "SMS"],
    demo: "",
    code: "",
  },
];

/* Témoignages : laissez vide tant que vous n'avez pas de vrais retours clients.
   Format : { name: "Prénom Nom", role: "Poste, Société", text: "…" } */
export const testimonials = [];

/* EXEMPLE — articles de démonstration à remplacer par les vôtres */
export const posts = [
  {
    slug: "integrer-mobile-money",
    title: "Intégrer MTN Mobile Money et Orange Money dans une application",
    category: "Paiement",
    date: "2026-09-12",
    readTime: "6 min",
    gradient: "from-blue-500 to-violet-600",
    excerpt:
      "Les grandes étapes pour accepter des paiements Mobile Money en FCFA : initiation, confirmation et gestion des callbacks.",
    content: [
      "Accepter le Mobile Money repose sur un flux asynchrone : votre serveur initie le paiement, l'utilisateur le valide sur son téléphone, puis l'opérateur notifie votre application via un callback (webhook).",
      "Concevez votre modèle de données autour d'un statut de transaction (en attente, réussi, échoué) et rendez vos callbacks idempotents : un même événement reçu deux fois ne doit jamais créditer deux fois.",
      "Enfin, prévoyez toujours une vérification manuelle du statut côté serveur : un callback peut se perdre, l'interrogation de l'API de l'opérateur permet de réconcilier.",
    ],
  },
  {
    slug: "sms-africas-talking-symfony",
    title: "Envoyer des SMS avec Africa's Talking depuis Symfony",
    category: "Back-end",
    date: "2026-09-02",
    readTime: "5 min",
    gradient: "from-violet-500 to-fuchsia-500",
    excerpt:
      "Un service Symfony propre pour envoyer des SMS transactionnels : configuration, file d'attente et gestion des erreurs.",
    content: [
      "Isolez l'envoi de SMS derrière une interface : votre code métier dépend d'un contrat, pas d'un fournisseur. Vous pourrez ainsi changer d'opérateur sans toucher au reste.",
      "Utilisez Symfony Messenger pour envoyer les SMS en tâche de fond. L'utilisateur n'attend pas la réponse de l'API et vous pouvez réessayer automatiquement en cas d'échec.",
    ],
  },
  {
    slug: "notifications-temps-reel-mercure",
    title: "Notifications temps réel avec Mercure",
    category: "Back-end",
    date: "2026-08-20",
    readTime: "7 min",
    gradient: "from-sky-500 to-indigo-600",
    excerpt:
      "Pousser des événements vers vos clients web et mobiles sans WebSocket, grâce au protocole Mercure.",
    content: [
      "Mercure s'appuie sur les Server-Sent Events : une connexion HTTP longue durée par laquelle le serveur pousse des mises à jour. C'est plus simple à opérer qu'un serveur WebSocket.",
      "Chaque utilisateur s'abonne à des topics et ne reçoit que ce qui le concerne. Les JWT permettent de contrôler finement qui peut publier et qui peut s'abonner.",
    ],
  },
  {
    slug: "tailwind-4-mode-sombre",
    title: "Tailwind CSS 4 : un mode jour/nuit propre avec des variables CSS",
    category: "Front-end",
    date: "2026-08-05",
    readTime: "4 min",
    gradient: "from-indigo-500 to-blue-500",
    excerpt:
      "Définir des jetons de couleur sémantiques et basculer de thème en changeant une seule classe sur la balise html.",
    content: [
      "Plutôt que de répéter des variantes dark: partout, définissez des variables CSS (fond, texte, bordure) dans :root et .dark, puis exposez-les à Tailwind via @theme inline.",
      "Vos composants utilisent alors des classes sémantiques comme bg-card ou text-muted, et le thème se change en ajoutant ou retirant la classe dark sur l'élément html.",
    ],
  },
  {
    slug: "optimiser-tournees-livraison",
    title: "Optimiser des tournées de livraison : les bases",
    category: "Produit",
    date: "2026-07-18",
    readTime: "8 min",
    gradient: "from-blue-600 to-cyan-500",
    excerpt:
      "Du problème du voyageur de commerce aux heuristiques pratiques pour planifier des trajets réalistes.",
    content: [
      "Optimiser une tournée revient à ordonner des arrêts pour minimiser la distance ou le temps total, sous contraintes : capacité du véhicule, créneaux horaires, priorités.",
      "En pratique, on démarre avec une heuristique simple (plus proche voisin) puis on l'améliore localement. Une solution rapide et correcte vaut mieux qu'un optimum théorique trop lent.",
    ],
  },
  {
    slug: "adressage-cameroun",
    title: "Concevoir un adressage adapté au Cameroun",
    category: "Produit",
    date: "2026-07-01",
    readTime: "5 min",
    gradient: "from-fuchsia-500 to-violet-600",
    excerpt:
      "Quartiers, points de repère et coordonnées GPS : comment modéliser des adresses qui n'ont pas de numéro de rue.",
    content: [
      "Au Cameroun, une adresse se décrit souvent par un quartier et un point de repère plutôt que par un numéro de rue. Votre formulaire doit l'accepter.",
      "Combinez un champ libre (« derrière la pharmacie… »), une sélection de ville et de quartier, et une position GPS capturée depuis le téléphone pour fiabiliser la livraison.",
    ],
  },
];
