
import { QuizQuestion } from './types';

export const organizationQuestions: QuizQuestion[] = [
  {
    id: 51,
    category: 'Organisation',
    question: "Comment s'organise l'ordre judiciaire en France ?",
    options: [
      { key: "A", text: "Un ordre unique gérant toutes les affaires" },
      { key: "B", text: "Deux ordres : judiciaire et administratif" },
      { key: "C", text: "Trois ordres : pénal, civil et commercial" },
      { key: "D", text: "Quatre ordres distincts selon les régions" }
    ],
    correct: "B",
    explanation: "La justice française est organisée en deux ordres distincts : l'ordre judiciaire (litiges entre personnes et infractions pénales) et l'ordre administratif (litiges impliquant l'administration).",
    source: "vie-publique.fr"
  },
  {
    id: 52,
    category: 'Organisation',
    question: "Quelle est la juridiction suprême de l'ordre judiciaire ?",
    options: [
      { key: "A", text: "Le Conseil d'État" },
      { key: "B", text: "Le Conseil constitutionnel" },
      { key: "C", text: "La Cour de cassation" },
      { key: "D", text: "La Cour européenne des droits de l'homme" }
    ],
    correct: "C",
    explanation: "La Cour de cassation est la juridiction suprême de l'ordre judiciaire français. Elle ne rejuge pas les affaires sur le fond mais vérifie la conformité des décisions de justice avec les règles de droit.",
    source: "courdecassation.fr"
  },
  {
    id: 53,
    category: 'Organisation',
    question: "Qui représente la société dans un procès pénal ?",
    options: [
      { key: "A", text: "L'avocat de la défense" },
      { key: "B", text: "Le procureur de la République" },
      { key: "C", text: "Le juge d'instruction" },
      { key: "D", text: "Le greffier" }
    ],
    correct: "B",
    explanation: "Le procureur de la République représente la société et l'intérêt général dans un procès pénal. Il dirige les enquêtes, décide des poursuites et requiert l'application de la loi.",
    source: "justice.gouv.fr"
  },
  {
    id: 54,
    category: 'Organisation',
    question: "Quel tribunal traite les litiges entre particuliers d'une valeur inférieure à 5000€ ?",
    options: [
      { key: "A", text: "Le tribunal de commerce" },
      { key: "B", text: "Le juge des contentieux de la protection" },
      { key: "C", text: "Le tribunal administratif" },
      { key: "D", text: "La cour d'appel" }
    ],
    correct: "B",
    explanation: "Le juge des contentieux de la protection, au sein du tribunal judiciaire, traite les litiges de la vie quotidienne entre particuliers pour des sommes inférieures à 5000€.",
    source: "service-public.fr"
  },
  {
    id: 55,
    category: 'Organisation',
    question: "Quelle juridiction juge les crimes en France ?",
    options: [
      { key: "A", text: "Le tribunal correctionnel" },
      { key: "B", text: "Le tribunal de police" },
      { key: "C", text: "La cour d'assises" },
      { key: "D", text: "Le tribunal judiciaire" }
    ],
    correct: "C",
    explanation: "La cour d'assises est la juridiction compétente pour juger les crimes (infractions les plus graves punies de plus de 10 ans d'emprisonnement). Elle est composée de magistrats professionnels et d'un jury de citoyens.",
    source: "justice.gouv.fr"
  }
];
