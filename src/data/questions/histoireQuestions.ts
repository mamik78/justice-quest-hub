
import { QuizQuestion } from './types';

export const histoireQuestions: QuizQuestion[] = [
  {
    id: 31,
    category: 'Histoire',
    question: "Quelle civilisation antique est considérée comme le berceau de la démocratie et des premiers tribunaux populaires ?",
    options: [
      { key: "A", text: "L'Égypte ancienne" },
      { key: "B", text: "La Grèce antique" },
      { key: "C", text: "L'Empire romain" },
      { key: "D", text: "La Mésopotamie" }
    ],
    correct: "B",
    explanation: "La Grèce antique, et particulièrement Athènes, est considérée comme le berceau de la démocratie et des premiers tribunaux populaires (Héliée).",
    source: "Histoire de la justice"
  },
  {
    id: 32,
    category: 'Histoire',
    question: "Quel réformateur athénien a posé les bases d'une justice plus égalitaire au VIe siècle avant J.-C. ?",
    options: [
      { key: "A", text: "Périclès" },
      { key: "B", text: "Aristote" },
      { key: "C", text: "Solon" },
      { key: "D", text: "Platon" }
    ],
    correct: "C",
    explanation: "Solon (638-558 av. J.-C.) a introduit des réformes qui ont posé les bases d'une justice plus égalitaire, abolissant notamment l'esclavage pour dettes.",
    source: "Histoire du droit grec"
  },
  {
    id: 33,
    category: 'Histoire',
    question: "Quel document fondamental du droit romain, rédigé vers 450 av. J.-C., est considéré comme le premier code juridique écrit de Rome ?",
    options: [
      { key: "A", text: "La Loi des Douze Tables" },
      { key: "B", text: "Le Code Justinien" },
      { key: "C", text: "Le Digeste" },
      { key: "D", text: "Les Institutes" }
    ],
    correct: "A",
    explanation: "La Loi des Douze Tables (451-449 av. J.-C.) est le premier code juridique écrit de Rome, gravé sur douze tables de bronze et exposé dans le forum romain.",
    source: "Histoire du droit romain"
  },
  {
    id: 34,
    category: 'Histoire',
    question: "En quelle année le Code civil français, aussi appelé Code Napoléon, a-t-il été promulgué ?",
    options: [
      { key: "A", text: "1789" },
      { key: "B", text: "1804" },
      { key: "C", text: "1810" },
      { key: "D", text: "1848" }
    ],
    correct: "B",
    explanation: "Le Code civil français a été promulgué en 1804 sous Napoléon Bonaparte. Il est l'un des codes fondamentaux du droit français moderne.",
    source: "Histoire du droit français"
  },
  {
    id: 35,
    category: 'Histoire',
    question: "Quelle est la principale contribution du Code Justinien à l'histoire du droit ?",
    options: [
      { key: "A", text: "L'introduction du jury populaire" },
      { key: "B", text: "La compilation et codification monumentale du droit romain" },
      { key: "C", text: "L'abolition de la peine de mort" },
      { key: "D", text: "La séparation des pouvoirs" }
    ],
    correct: "B",
    explanation: "Le Corpus Juris Civilis de Justinien (529-534) représente la compilation et codification monumentale du droit romain, qui a influencé tous les systèmes juridiques occidentaux.",
    source: "Histoire du droit byzantin"
  }
];
