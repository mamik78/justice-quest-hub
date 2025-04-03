
import { QuizQuestion } from './types';

export const metiersQuestions: QuizQuestion[] = [
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
  },
  {
    id: 23,
    category: 'Métiers',
    question: "Quel professionnel est devenu le 'commissaire de justice' depuis juillet 2022 ?",
    options: [
      { key: "A", text: "L'huissier de justice" },
      { key: "B", text: "Le greffier" },
      { key: "C", text: "Le médiateur" },
      { key: "D", text: "Le conciliateur" }
    ],
    correct: "A",
    explanation: "Les huissiers de justice et les commissaires-priseurs judiciaires ont fusionné en une profession unique : le commissaire de justice.",
    source: "justice.gouv.fr"
  },
  {
    id: 24,
    category: 'Métiers',
    question: "Qui peut défendre un mineur dans une procédure pénale ?",
    options: [
      { key: "A", text: "Uniquement ses parents" },
      { key: "B", text: "Un avocat spécialisé en droit des mineurs" },
      { key: "C", text: "N'importe quel avocat" },
      { key: "D", text: "Un éducateur de la protection judiciaire de la jeunesse" }
    ],
    correct: "B",
    explanation: "Un avocat spécialisé en droit des mineurs est requis pour défendre un mineur dans une procédure pénale.",
    source: "service-public.fr"
  },
  {
    id: 25,
    category: 'Métiers',
    question: "Qui préside les audiences du tribunal correctionnel ?",
    options: [
      { key: "A", text: "Un juge unique ou trois magistrats" },
      { key: "B", text: "Le procureur de la République" },
      { key: "C", text: "Un jury populaire" },
      { key: "D", text: "Le préfet" }
    ],
    correct: "A",
    explanation: "Le tribunal correctionnel est présidé soit par un juge unique, soit par une formation collégiale de trois magistrats, selon la gravité de l'affaire.",
    source: "justice.gouv.fr"
  }
];
