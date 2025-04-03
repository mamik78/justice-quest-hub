
import { QuizQuestion } from './types';

export const justiceQuestions: QuizQuestion[] = [
  {
    id: 11,
    category: 'Justice',
    question: "Quelle est la plus haute juridiction de l'ordre judiciaire en France ?",
    options: [
      { key: "A", text: "Le Conseil d'État" },
      { key: "B", text: "La Cour de cassation" },
      { key: "C", text: "La Cour d'appel" },
      { key: "D", text: "Le tribunal judiciaire" }
    ],
    correct: "B",
    explanation: "La Cour de cassation est la plus haute juridiction de l'ordre judiciaire français.",
    source: "justice.gouv.fr"
  },
  {
    id: 12,
    category: 'Justice',
    question: "Quel tribunal est compétent pour juger les délits ?",
    options: [
      { key: "A", text: "Le tribunal correctionnel" },
      { key: "B", text: "Le tribunal judiciaire" },
      { key: "C", text: "Le tribunal de commerce" },
      { key: "D", text: "Le tribunal administratif" }
    ],
    correct: "A",
    explanation: "Le tribunal correctionnel juge principalement les délits, qui sont des infractions de gravité moyenne.",
    source: "service-public.fr"
  },
  {
    id: 13,
    category: 'Justice',
    question: "Depuis 2020, quel tribunal a remplacé le tribunal d'instance et le tribunal de grande instance ?",
    options: [
      { key: "A", text: "Le tribunal de proximité" },
      { key: "B", text: "Le tribunal judiciaire" },
      { key: "C", text: "Le tribunal civil" },
      { key: "D", text: "Le tribunal départemental" }
    ],
    correct: "B",
    explanation: "Le tribunal judiciaire a été créé le 1er janvier 2020 pour fusionner les tribunaux d'instance et de grande instance.",
    source: "service-public.fr"
  },
  {
    id: 14,
    category: 'Justice',
    question: "Quelle juridiction traite les litiges entre particuliers pour des sommes inférieures à 5000€ ?",
    options: [
      { key: "A", text: "Le juge des contentieux de la protection" },
      { key: "B", text: "Le tribunal de commerce" },
      { key: "C", text: "Le tribunal administratif" },
      { key: "D", text: "La cour d'appel" }
    ],
    correct: "A",
    explanation: "Le juge des contentieux de la protection traite les litiges de la vie quotidienne pour des sommes limitées.",
    source: "justice.gouv.fr"
  },
  {
    id: 15,
    category: 'Justice',
    question: "À partir de quel âge peut-on être jugé par un tribunal pour enfants ?",
    options: [
      { key: "A", text: "10 ans" },
      { key: "B", text: "13 ans" },
      { key: "C", text: "16 ans" },
      { key: "D", text: "18 ans" }
    ],
    correct: "A",
    explanation: "En France, la responsabilité pénale peut s'appliquer dès 10 ans, avec des mesures adaptées selon l'âge.",
    source: "justice.gouv.fr"
  }
];
