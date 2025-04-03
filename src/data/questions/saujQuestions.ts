
import { QuizQuestion } from './types';

export const saujQuestions: QuizQuestion[] = [
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
  }
];
