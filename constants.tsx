import React from 'react';
import { 
  Layout, Cpu, Film, Palette, 
  Instagram, Twitter, Linkedin, Github,
  Mail, MessageSquare, Monitor, MessageCircle, Infinity
} from 'lucide-react';

/**
 * TYPES DEFINITIONS
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  type: 'Vidéos' | 'Images';
  title: string;
  img: string;
  gallery?: string[];
}

export interface Service {
  title: string;
  desc: string;
  details: string;
  features: string[];
  icon: React.ReactNode;
  img: string;
}

export interface Course {
  title: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
  badge: string;
  img: string;
  link: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: any;
}

/**
 * CONSTANTS
 */

/**
 * ==========================================
 * 1. INFORMATIONS GÉNÉRALES DU SITE
 * ==========================================
 * Modifiez ici le nom, le logo, l'email et les infos de base.
 */
export const SITE_INFO = {
  name: "AKA Junior",
  logo: "monlogo.png",
  email: "akaassafouajoseph@gmail.com",
  whatsapp: "https://wa.me/2250708105701",
  tagline: "L'autorité du design premium et de l'IA générative. Expert Web, Vidéo et Design.",
  copyright: `© ${new Date().getFullYear()} AKA Junior. Tous droits réservés.`
};

/**
 * ==========================================
 * 2. RÉFÉRENCEMENT (SEO)
 * ==========================================
 * Titre et description qui apparaissent sur Google et les réseaux sociaux.
 */
export const SEO = {
  title: "AKA Junior | Expert IA & Design Premium",
  description: "Expert en Intelligence Artificielle et Design, je propulse votre business avec des solutions web, vidéo et graphiques d'une autorité inégalée.",
  keywords: ["IA", "Design", "SaaS", "Web Development", "Video Editing", "Generative AI"]
};

/**
 * ==========================================
 * 3. STYLE ET COULEURS
 * ==========================================
 * Modifiez les couleurs principales du site ici.
 */
export const THEME = {
  colors: {
    brand: "#FF0000",
    bgDark: "#0D0D0D",
    cardDark: "#1A1A1A"
  },
  fonts: {
    sans: "'Inter', sans-serif",
    display: "'Montserrat', sans-serif"
  }
};

/**
 * ==========================================
 * 4. NAVIGATION (MENU)
 * ==========================================
 * Liens qui apparaissent dans le menu de navigation.
 */
export const NAVIGATION: NavLink[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Formations', href: '#formations' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Témoignages', href: '#témoignages' }
];

/**
 * ==========================================
 * 5. SECTION HERO (ACCUEIL)
 * ==========================================
 * La première partie que les visiteurs voient.
 */
export const HERO = {
  tags: ['Innovation', 'IA Générative', 'Design SaaS'],
  title: {
    main: "L'IA au service",
    highlight: "du Design Premium"
  },
  description: "Expert en Intelligence Artificielle et Design, je propulse votre business avec des solutions web, vidéo et graphiques d'une autorité inégalée.",
  cta: "Découvrir mes services",
  image: "junior2.png",
  stats: [
    { value: "6+", label: "Années d'Expérience" },
    { value: "50+", label: "Projets" },
    { value: "10+", label: "Élèves Formés" }
  ]
};

/**
 * ==========================================
 * 6. SECTION À PROPOS
 * ==========================================
 */
export const ABOUT = {
  badge: "Qui est AKA Junior ?",
  title: {
    main: "L'IA, je ne l'explique pas.",
    highlight: "Je la maîtrise pour vous."
  },
  description: "Expert multi-disciplinaire avec plus de 6 ans d'expérience, je fusionne la puissance de l'Intelligence Artificielle avec le design premium, le montage vidéo dynamique et le développement web de pointe. Mon approche holistique me permet de transformer des visions complexes en réalités digitales d'autorité. Certifié Google Ads, Meta Blueprint et expert en IA, je ne me contente pas de créer des outils, je bâtis des écosystèmes de croissance pour les marques qui visent l'excellence.",
  cards: [
    {
      title: "Ingénierie IA & Web",
      desc: "Fusionner l'IA générative et le développement web pour créer des plateformes intelligentes et performantes."
    },
    {
      title: "Direction Artistique",
      desc: "Design graphique premium et montage vidéo cinématique pour une identité visuelle d'autorité."
    },
    {
      title: "Stratégie & Transmission",
      desc: "Accompagner les marques et former les talents aux outils qui redéfinissent le marché actuel."
    }
  ]
};

/**
 * ==========================================
 * 7. PORTFOLIO (PROJETS)
 * ==========================================
 * Ajoutez ou modifiez vos projets ici.
 */
export const PORTFOLIO = {
  title: "Des créations ",
  filters: ['Tous', 'Vidéos', 'Images'],
  items: [
    { 
      id: 1, type: 'Images', title: 'Boumboum', img: 'boumboum.png',
      gallery: ['boumboum1.png', 'boumboum2.png', 'boumboum3.png']
    },
    { 
      id: 2, type: 'Vidéos', title: 'Montage Short', img: 'monatgeshort.mp4',
      gallery: ['https://picsum.photos/seed/motion2/800/800', 'https://picsum.photos/seed/motion3/800/800', 'https://picsum.photos/seed/motion4/800/800']
    },
    { 
      id: 3, type: 'Images', title: 'Carte Jeune', img: 'cartejeune.png',
      gallery: ['cartejeune1.png', 'cartejeune2.png', 'cartejeune3.png']
    },
    { 
      id: 4, type: 'Vidéos', title: 'Vidéo Publicitaire', img: 'montagevideo imo.mp4',
      gallery: ['https://picsum.photos/seed/liquid2/800/800', 'https://picsum.photos/seed/liquid3/800/800', 'https://picsum.photos/seed/liquid4/800/800']
    },
    { 
      id: 5, type: 'Images', title: 'KFC', img: 'kfc.png',
      gallery: ['kfc1.png', 'kfc2.png', 'kfc3.png']
    },
    { 
      id: 6, type: 'Vidéos', title: 'Vidéos IA ', img: 'videoia.MP4',
      gallery: ['https://picsum.photos/seed/flow2/800/1200', 'https://picsum.photos/seed/flow3/800/1200', 'https://picsum.photos/seed/flow4/800/1200']
    },
    { 
      id: 7, type: 'Images', title: 'Habit Marque', img: 'habit.png',
      gallery: ['habit1.png', 'habit2.png', 'habit3.png']
    },
    { 
      id: 8, type: 'Images', title: 'Sac', img: 'sac.png',
      gallery: ['sac1.png', 'sac2.png', 'sac3.png']
    },
    { 
      id: 9, type: 'Images', title: 'Affiche', img: 'Affiche.png',
      gallery: ['Bon Week-end (1).png', 'affiche3.jpg', 'affiche2.jpg']
    },
    { 
      id: 10, type: 'Images', title: 'Logo', img: 'logo.jpg',
      gallery: ['logo1.jpg', 'logo2.jpg']
    },
    { 
      id: 11, type: 'Images', title: 'Miniature', img: 'miniature sponsor.jpg',
      gallery: ['MINIATURE.png', 'miniature facile.png', 'miniature2.png']
    },
    { 
      id: 12, type: 'Images', title: 'Boisson Bock', img: 'bierre.png',
      gallery: ['bierre1.png', 'bierre2.png', ]
    },
    
  ] as PortfolioItem[]
};

/**
 * ==========================================
 * 8. SERVICES
 * ==========================================
 */
export const SERVICES = {
  badge: "Mes Services",
  title: "Propulsez votre business",
  items: [
    {
      title: "Création de site web",
      desc: "Conception de sites vitrines et e-commerce ultra-performants, optimisés pour la conversion et le SEO.",
      details: "Nous créons des expériences web uniques qui captivent vos visiteurs dès la première seconde. De la landing page minimaliste au portail d'entreprise complexe, chaque pixel est pensé pour servir vos objectifs business.",
      features: ["Design Responsive", "Optimisation SEO", "Vitesse de chargement"],
      icon: <Layout className="w-8 h-8 text-brand" />,
      img: "dev web.png"
    },
    {
      title: "Intelligence Artificielle",
      desc: "Intégration d'agents IA et automatisation de workflows pour scaler votre productivité.",
      details: "L'IA n'est plus une option, c'est un avantage compétitif. Nous vous aidons à intégrer des solutions d'IA générative (LLMs, agents autonomes) directement dans vos processus métiers pour gagner un temps précieux.",
      features: ["Shooting IA", "Automatisation", "Vidéos IA", "Formation IA"],
      icon: <Cpu className="w-8 h-8 text-brand" />,
      img: "ia.png"
    },
    {
      title: "Montage Vidéo",
      desc: "Montage dynamique et cinématique pour vos réseaux sociaux et publicités IA-augmenté.",
      details: "Le contenu vidéo est roi. Nous réalisons des montages percutants qui retiennent l'attention, en utilisant des outils d'IA pour le sound design, le color grading et les effets visuels avancés.",
      features: ["Short-form (Reels/TikTok)", "Publicités ", "Vidéo Youtube", "Vidéo SHort"],
      icon: <Film className="w-8 h-8 text-brand" />,
      img: "ideo.png"
    },
    {
      title: "Design Graphique",
      desc: "Identité visuelle et branding premium pour affirmer votre autorité sur le marché.",
      details: "Une identité visuelle forte est la base de la confiance. Nous concevons des logos, des chartes graphiques et des assets marketing qui respirent le luxe, la technologie et le professionnalisme.",
      features: ["Logos ", "Affiches", "Miniature"],
      icon: <Palette className="w-8 h-8 text-brand" />,
      img: "design.png"
    }
  ] as Service[]
};

/**
 * ==========================================
 * 9. FORMATIONS
 * ==========================================
 */
export const FORMATIONS = {
  badge: "Mes Formations",
  title: "Passez au niveau supérieur",
  items: [
    {
      title: "100 Photos Mémorables",
      desc: "Apprenez à capturer et éditer des photos professionnelles pour vos événements avec votre smartphone.",
      icon: <Palette className="w-6 h-6 text-brand" />,
      features: ["Techniques de pose", "Éclairage mobile", "Retouche Lightroom", "Presets inclus"],
      badge: "66% OFF",
      img: "100 photo.png",
      link: "https://akajunior.mychariow.shop/prompt-aniversaire"
    },
    {
      title: "Génération Vidéo IA",
      desc: "Maîtrisez les outils de pointe comme VEO 3 et Gemini Pro pour créer des vidéos cinématiques.",
      icon: <Film className="w-6 h-6 text-brand" />,
      features: ["VEO 3 Mastery", "Gemini Pro Prompting", "Montage IA", "Sound Design"],
      badge: "50% OFF",
      img: "gemini.png",
      link: "https://akajunior.mychariow.shop/formationveo3"
    }
  ] as Course[]
};

/**
 * ==========================================
 * 10. EXPERTISE ET CERTIFICATIONS
 * ==========================================
 */
export const EXPERTISE = {
  badge: "10+ Certifications",
  title: {
    main: "Une expertise",
    highlight: "validée et reconnue"
  },
  stats: [
    { value: "6+", label: "Années d'expérience" },
    { value: "10+", label: "Certifications" },
    { value: "20+", label: "Personnes formées" },
    { value: "2", label: "Formations au catalogue" }
  ],
  logos: [
    { name: "Google", icon: "G" },
    { name: "Udemy", icon: "Û" },
    { name: "Gemini", icon: "✦" },
    { name: "HubSpot", icon: "H" },
    { name: "Microsoft", icon: "M" },
    { name: "ChatGPT", icon: "C" },
    { name: "Claude AI", icon: "AI" },
    { name: "Facebook", icon: "f" }
  ],
  certs: ["Google Ads", "Google Analytics", "Meta Blueprint", "HubSpot Design", "IA Specialist", "UI/UX Master"]
};

/**
 * ==========================================
 * 11. FOIRE AUX QUESTIONS (FAQ)
 * ==========================================
 */
export const FAQ_DATA: FAQItem[] = [
  {
    q: "Quel est le niveau requis pour suivre vos formations ?",
    a: "Nos formations sont conçues pour être accessibles à tous, du débutant complet à l'expert souhaitant se perfectionner sur les derniers outils d'IA."
  },
  {
    q: "Les formations sont-elles en direct ou en autonomie ?",
    a: "Vous avez accès à une plateforme de cours en ligne disponible 24h/24 pour apprendre à votre rythme, complétée par des sessions de coaching mensuelles."
  },
  {
    q: "Comment fonctionne la communauté WhatsApp privée ?",
    a: "Dès votre inscription, vous recevez un lien pour rejoindre notre groupe exclusif où vous pouvez poser vos questions et échanger avec d'autres passionnés."
  },
  {
    q: "Combien de temps ai-je accès à la formation ?",
    a: "L'accès est illimité et à vie. Vous bénéficiez également de toutes les mises à jour futures gratuitement."
  },
  {
    q: "Les formations sont-elles mises à jour ?",
    a: "Oui, le monde de l'IA évolue vite. Nous mettons à jour nos contenus dès qu'une nouvelle technologie majeure (comme une nouvelle version de Midjourney ou ChatGPT) sort."
  },
  {
    q: "Vais-je vraiment pouvoir créer des choses concrètes sans compétences techniques ?",
    a: "Absolument. Notre méthode se concentre sur l'utilisation d'outils no-code et d'IA qui ne demandent aucune ligne de code pour obtenir des résultats professionnels."
  }
];

/**
 * ==========================================
 * 12. TÉMOIGNAGES
 * ==========================================
 */
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Sarah L.",
    role: "CEO @ TechFlow",
    text: "L'expertise d'AKA Junior en IA et Design a littéralement transformé notre image de marque. Son approche est futuriste et ultra-efficace.",
    stars: 5
  },
  {
    name: "Marc D.",
    role: "Freelance Designer",
    text: "La formation Masterclass IA est une révélation. J'ai appris à automatiser tout mon workflow de création en quelques jours.",
    stars: 5
  },
  {
    name: "Julie V.",
    role: "Product Manager",
    text: "Une expertise rare. Le mélange entre design premium et outils IA est exactement ce dont le marché a besoin.",
    stars: 5
  }
];

/**
 * ==========================================
 * 13. RÉSEAUX SOCIAUX (FOOTER)
 * ==========================================
 */
export const SOCIALS: SocialLink[] = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Linkedin', href: '#', icon: Linkedin },
  { name: 'Github', href: '#', icon: Github }
];

/**
 * ==========================================
 * 14. FORMULAIRE DE CONTACT
 * ==========================================
 */
export const CONTACT = {
  badge: "Travaillons ensemble",
  title: {
    main: "Une question ?",
    highlight: "Parlons-en."
  },
  description: "Formation ou Service. Je réponds à chaque message personnellement.",
  form: {
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "Décrivez votre projet ou posez votre question...",
    submitButton: "Envoyer le message",
    successMessage: "Message envoyé ! Je vous recontacterai très prochainement."
  }
};
