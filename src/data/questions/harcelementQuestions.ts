
import { QuizQuestion } from './types';

export const harcelementQuestions: QuizQuestion[] = [
  {
    id: 41,
    category: 'Harcèlement',
    question: "Selon la loi française, qu'est-ce qui caractérise le harcèlement scolaire ?",
    options: [
      { key: "A", text: "Une dispute ponctuelle entre élèves" },
      { key: "B", text: "Des actes répétés ayant pour effet une dégradation des conditions de vie de la victime" },
      { key: "C", text: "Un désaccord sur un travail scolaire" },
      { key: "D", text: "Un incident isolé dans la cour de récréation" }
    ],
    correct: "B",
    explanation: "Le harcèlement scolaire est caractérisé par des actes répétés (moqueries, rumeurs, insultes, violences...) ayant pour effet une dégradation des conditions de vie de la victime, se manifestant notamment par l'anxiété, la chute des résultats scolaires et l'isolement.",
    source: "Code pénal, article 222-33-2-3"
  },
  {
    id: 42,
    category: 'Harcèlement',
    question: "Quelle est la peine maximale encourue par un mineur de plus de 13 ans reconnu coupable de harcèlement scolaire ?",
    options: [
      { key: "A", text: "Aucune, les mineurs ne sont pas responsables pénalement" },
      { key: "B", text: "Un avertissement du juge uniquement" },
      { key: "C", text: "La moitié de la peine prévue pour les adultes" },
      { key: "D", text: "La même peine que les adultes" }
    ],
    correct: "C",
    explanation: "Les mineurs de plus de 13 ans encourent jusqu'à la moitié de la peine prévue pour les adultes. Pour le harcèlement scolaire, la peine maximale pour un adulte est de 10 ans d'emprisonnement et 150 000€ d'amende en cas de suicide de la victime.",
    source: "Code de la justice pénale des mineurs"
  },
  {
    id: 43,
    category: 'Harcèlement',
    question: "Quelle plateforme a été mise en place par l'Éducation nationale pour lutter contre le harcèlement scolaire ?",
    options: [
      { key: "A", text: "Stop-Violence" },
      { key: "B", text: "Non au Harcèlement" },
      { key: "C", text: "Allô Enfance" },
      { key: "D", text: "Écoute Scolaire" }
    ],
    correct: "B",
    explanation: "Le programme et numéro vert 'Non au Harcèlement' (3020) a été mis en place par l'Éducation nationale pour signaler des situations de harcèlement et obtenir des conseils.",
    source: "education.gouv.fr"
  },
  {
    id: 44,
    category: 'Harcèlement',
    question: "Qu'est-ce que le cyberharcèlement ?",
    options: [
      { key: "A", text: "L'utilisation d'un ordinateur pour faire ses devoirs" },
      { key: "B", text: "Une forme de harcèlement utilisant les outils numériques" },
      { key: "C", text: "Un virus informatique" },
      { key: "D", text: "Un jeu en ligne" }
    ],
    correct: "B",
    explanation: "Le cyberharcèlement désigne une forme de harcèlement conduite via les outils numériques (réseaux sociaux, messageries, forums...). Il peut inclure des insultes, menaces, diffusion d'images humiliantes, création de faux profils, etc.",
    source: "service-public.fr"
  },
  {
    id: 45,
    category: 'Harcèlement',
    question: "Qui peut être tenu responsable si un élève est victime de harcèlement scolaire ?",
    options: [
      { key: "A", text: "Uniquement les harceleurs" },
      { key: "B", text: "Les harceleurs et leurs parents" },
      { key: "C", text: "Les harceleurs, leurs parents et potentiellement l'établissement scolaire" },
      { key: "D", text: "Personne, c'est une fatalité" }
    ],
    correct: "C",
    explanation: "La responsabilité peut incomber aux auteurs du harcèlement (responsabilité pénale selon leur âge), à leurs parents (responsabilité civile) et potentiellement à l'établissement scolaire en cas de manquement à son obligation de surveillance et de sécurité.",
    source: "justice.gouv.fr"
  }
];
