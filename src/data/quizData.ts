
export interface QuizQuestion {
  id: number;
  category: 'SAUJ' | 'Justice' | 'Métiers';
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  correct: string;
  explanation: string;
  source: string;
}

export const quizQuestions: QuizQuestion[] = [
  // SAUJ Category Questions (10)
  {
    id: 1,
    category: 'SAUJ',
    question: "Quel est le rôle principal du Service d'Accueil Unique du Justiciable (SAUJ) ?",
    options: [
      { key: "A", text: "Représenter les justiciables" },
      { key: "B", text: "Informer et orienter les justiciables" },
      { key: "C", text: "Rédiger des actes juridiques" },
      { key: "D", text: "Décider des peines" }
    ],
    correct: "B",
    explanation: "Le SAUJ a pour mission d'informer et d'orienter les justiciables dans leurs démarches.",
    source: "justice.gouv.fr"
  },
  {
    id: 2,
    category: 'SAUJ',
    question: "Où est généralement implanté le SAUJ ?",
    options: [
      { key: "A", text: "Dans chaque mairie" },
      { key: "B", text: "Au siège de chaque tribunal judiciaire et chambre de proximité" },
      { key: "C", text: "Dans les commissariats" },
      { key: "D", text: "Dans les maisons de justice uniquement" }
    ],
    correct: "B",
    explanation: "Le SAUJ est généralement implanté dans les tribunaux et chambres de proximité pour assurer un accès direct aux services judiciaires.",
    source: "legifrance.gouv.fr"
  },
  {
    id: 3,
    category: 'SAUJ',
    question: "Quels services propose le SAUJ ?",
    options: [
      { key: "A", text: "Fournir des informations sur les procédures judiciaires" },
      { key: "B", text: "Aider au dépôt de dossiers" },
      { key: "C", text: "Conseiller et orienter les justiciables" },
      { key: "D", text: "A et C" }
    ],
    correct: "D",
    explanation: "Le SAUJ informe, oriente et, dans certains cas, aide à déposer des dossiers simples.",
    source: "service-public.fr"
  },
  {
    id: 4,
    category: 'SAUJ',
    question: "Le SAUJ permet-il de déposer des actes de procédure ?",
    options: [
      { key: "A", text: "Oui, pour toutes les procédures" },
      { key: "B", text: "Non, il se limite à l'information" },
      { key: "C", text: "Oui, pour certaines procédures non urgentes" },
      { key: "D", text: "Oui, uniquement pour les majeurs" }
    ],
    correct: "C",
    explanation: "Le SAUJ permet le dépôt de certains actes de procédure qui ne nécessitent pas d'urgence.",
    source: "justice.gouv.fr"
  },
  {
    id: 5,
    category: 'SAUJ',
    question: "Qui assure principalement l'accueil au SAUJ ?",
    options: [
      { key: "A", text: "Des magistrats" },
      { key: "B", text: "Des greffiers" },
      { key: "C", text: "Des avocats" },
      { key: "D", text: "Des policiers" }
    ],
    correct: "B",
    explanation: "Les greffiers sont généralement en charge de l'accueil et de l'assistance au SAUJ.",
    source: "justice.gouv.fr"
  },
  // On ajoute quelques questions supplémentaires pour cette première version
  // L'ensemble des 30 questions sera intégré dans une prochaine version
  {
    id: 11,
    category: 'Justice',
    question: "Quelle est la plus haute juridiction de l'ordre judiciaire en France ?",
    options: [
      { key: "A", text: "Le Conseil d'État" },
      { key: "B", text: "La Cour de cassation" },
      { key: "C", text: "La Cour d'appel" },
      { key: "D", text: "Le tribunal correctionnel" }
    ],
    correct: "B",
    explanation: "La Cour de cassation est la plus haute juridiction de l'ordre judiciaire.",
    source: "justice.gouv.fr"
  },
  {
    id: 12,
    category: 'Justice',
    question: "Quel tribunal est compétent pour juger les délits ?",
    options: [
      { key: "A", text: "Le tribunal correctionnel" },
      { key: "B", text: "Le tribunal de grande instance" },
      { key: "C", text: "Le tribunal d'instance" },
      { key: "D", text: "Le tribunal administratif" }
    ],
    correct: "A",
    explanation: "Le tribunal correctionnel juge principalement les délits.",
    source: "service-public.fr"
  },
  {
    id: 21,
    category: 'Métiers',
    question: "Quel est le rôle principal d'un magistrat ?",
    options: [
      { key: "A", text: "Défendre les accusés" },
      { key: "B", text: "Juger et appliquer la loi" },
      { key: "C", text: "Conseiller les justiciables" },
      { key: "D", text: "Assurer la sécurité" }
    ],
    correct: "B",
    explanation: "Le magistrat est responsable de rendre la justice en appliquant la loi.",
    source: "justice.gouv.fr"
  },
  {
    id: 22,
    category: 'Métiers',
    question: "Qui authentifie un contrat de mariage en France ?",
    options: [
      { key: "A", text: "Un avocat" },
      { key: "B", text: "Un greffier" },
      { key: "C", text: "Un notaire" },
      { key: "D", text: "Un juge" }
    ],
    correct: "C",
    explanation: "Le notaire est le professionnel habilité à authentifier les contrats de mariage.",
    source: "service-public.fr"
  }
];

export const avatars = [
  {
    id: 1,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=b6e3f4",
    alt: "Avatar 1"
  },
  {
    id: 2,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka&backgroundColor=c0aede",
    alt: "Avatar 2"
  },
  {
    id: 3,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia&backgroundColor=ffd5dc",
    alt: "Avatar 3"
  },
  {
    id: 4,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Max&backgroundColor=d1d4f9",
    alt: "Avatar 4"
  },
  {
    id: 5,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie&backgroundColor=c0e7c8",
    alt: "Avatar 5"
  },
  {
    id: 6,
    src: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=ffdfbf",
    alt: "Avatar 6"
  }
];

export const badges = [
  {
    id: "sauj-novice",
    title: "Novice du SAUJ",
    description: "Répondre correctement à 3 questions sur le SAUJ",
    category: "SAUJ",
    requiredScore: 3,
    icon: "🏆"
  },
  {
    id: "justice-novice",
    title: "Novice de la Justice",
    description: "Répondre correctement à 3 questions sur la Justice",
    category: "Justice",
    requiredScore: 3,
    icon: "⚖️"
  },
  {
    id: "metiers-novice",
    title: "Novice des Métiers",
    description: "Répondre correctement à 3 questions sur les Métiers",
    category: "Métiers",
    requiredScore: 3,
    icon: "👨‍⚖️"
  },
  {
    id: "quiz-master",
    title: "Maître des Quiz",
    description: "Répondre correctement à 10 questions au total",
    category: "Global",
    requiredScore: 10,
    icon: "🎓"
  }
];
