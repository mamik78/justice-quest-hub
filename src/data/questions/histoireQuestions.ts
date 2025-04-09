
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
  },
  {
    id: 36,
    category: 'Histoire',
    question: "Quel personnage historique a joué un rôle majeur dans la rédaction du Code civil français de 1804 ?",
    options: [
      { key: "A", text: "Louis XVI" },
      { key: "B", text: "Napoléon Bonaparte" },
      { key: "C", text: "Robespierre" },
      { key: "D", text: "Montesquieu" }
    ],
    correct: "B",
    explanation: "Napoléon Bonaparte, alors Premier Consul, a supervisé personnellement la rédaction du Code civil et participé activement à plusieurs séances de travail des juristes.",
    source: "Histoire du droit français"
  },
  {
    id: 37,
    category: 'Histoire',
    question: "Quelle institution judiciaire a été créée en France en 1958 ?",
    options: [
      { key: "A", text: "La Cour de cassation" },
      { key: "B", text: "Le Conseil constitutionnel" },
      { key: "C", text: "La Cour européenne des droits de l'homme" },
      { key: "D", text: "Le Tribunal des conflits" }
    ],
    correct: "B",
    explanation: "Le Conseil constitutionnel a été créé par la Constitution de la Ve République en 1958 pour veiller à la constitutionnalité des lois.",
    source: "Histoire des institutions"
  },
  {
    id: 38,
    category: 'Histoire',
    question: "Quelle réforme majeure de la justice a eu lieu en France en 1981 ?",
    options: [
      { key: "A", text: "L'abolition de la peine de mort" },
      { key: "B", text: "La création du tribunal d'instance" },
      { key: "C", text: "L'instauration du divorce par consentement mutuel" },
      { key: "D", text: "La création des juges de proximité" }
    ],
    correct: "A",
    explanation: "L'abolition de la peine de mort a été votée en 1981 sous la présidence de François Mitterrand, à l'initiative du garde des Sceaux Robert Badinter.",
    source: "Histoire du droit pénal français"
  },
  {
    id: 39,
    category: 'Histoire',
    question: "À quelle époque la présomption d'innocence devient-elle un principe fondamental du droit pénal moderne ?",
    options: [
      { key: "A", text: "Au Moyen Âge" },
      { key: "B", text: "Pendant la Renaissance" },
      { key: "C", text: "Au siècle des Lumières" },
      { key: "D", text: "Après la Seconde Guerre mondiale" }
    ],
    correct: "C",
    explanation: "C'est au siècle des Lumières (XVIIIe siècle) que des philosophes comme Beccaria et Voltaire ont défendu la présomption d'innocence comme principe fondamental de justice.",
    source: "Histoire de la pensée juridique"
  },
  {
    id: 40,
    category: 'Histoire',
    question: "Quelle est l'année de création du Service d'Accueil Unique du Justiciable (SAUJ) ?",
    options: [
      { key: "A", text: "2002" },
      { key: "B", text: "2010" },
      { key: "C", text: "2016" },
      { key: "D", text: "2020" }
    ],
    correct: "C",
    explanation: "Le Service d'Accueil Unique du Justiciable (SAUJ) a été créé par la loi de modernisation de la justice du XXIe siècle promulguée le 18 novembre 2016.",
    source: "Loi du 18 novembre 2016 de modernisation de la justice du XXIe siècle"
  },
  {
    id: 41,
    category: 'Histoire',
    question: "Quelle juridiction a été créée en France en 2002 pour remplacer les tribunaux d'instance pour certains litiges du quotidien ?",
    options: [
      { key: "A", text: "Le tribunal de commerce" },
      { key: "B", text: "Le tribunal de proximité" },
      { key: "C", text: "La juridiction de proximité" },
      { key: "D", text: "Le tribunal paritaire" }
    ],
    correct: "C",
    explanation: "La juridiction de proximité a été créée en 2002 pour traiter des petits litiges du quotidien, avant d'être remplacée par les tribunaux de proximité en 2017.",
    source: "Histoire des réformes judiciaires françaises"
  },
  {
    id: 42,
    category: 'Histoire',
    question: "Quel célèbre tableau représente Napoléon Bonaparte en tenue de sacre, peint par Jacques-Louis David ?",
    options: [
      { key: "A", text: "Le Sacre de Napoléon" },
      { key: "B", text: "Bonaparte franchissant le Grand-Saint-Bernard" },
      { key: "C", text: "Napoléon dans son cabinet de travail" },
      { key: "D", text: "Napoléon sur le champ de bataille d'Eylau" }
    ],
    correct: "A",
    explanation: "Le Sacre de Napoléon est un tableau monumental peint par Jacques-Louis David entre 1805 et 1807, représentant le couronnement de Napoléon Ier à Notre-Dame de Paris.",
    source: "Histoire de l'art français"
  },
  {
    id: 43,
    category: 'Histoire',
    question: "En quelle année les tribunaux de proximité ont-ils été créés en France ?",
    options: [
      { key: "A", text: "2002" },
      { key: "B", text: "2010" },
      { key: "C", text: "2017" },
      { key: "D", text: "2021" }
    ],
    correct: "D",
    explanation: "Les tribunaux de proximité ont été créés au 1er janvier 2021 suite à la réforme de la justice, en remplacement des tribunaux d'instance.",
    source: "Loi du 23 mars 2019 de programmation et de réforme pour la justice"
  },
  {
    id: 44,
    category: 'Histoire',
    question: "Quel est le nom du premier code pénal français, promulgué par Napoléon en 1810 ?",
    options: [
      { key: "A", text: "Le Code criminel" },
      { key: "B", text: "Le Code d'instruction criminelle" },
      { key: "C", text: "Le Code pénal napoléonien" },
      { key: "D", text: "Le Code des délits et des peines" }
    ],
    correct: "C",
    explanation: "Le Code pénal napoléonien, promulgué en 1810, a servi de base au droit pénal français pendant plus de 180 ans, jusqu'à sa refonte complète en 1994.",
    source: "Histoire du droit pénal français"
  },
  {
    id: 45,
    category: 'Histoire',
    question: "Quelle loi française de 2016 a notamment créé le divorce par consentement mutuel sans juge ?",
    options: [
      { key: "A", text: "Loi Taubira" },
      { key: "B", text: "Loi Macron" },
      { key: "C", text: "Loi J21" },
      { key: "D", text: "Loi Belloubet" }
    ],
    correct: "C",
    explanation: "La Loi J21 (Justice du 21e siècle) du 18 novembre 2016 a instauré le divorce par consentement mutuel sans passage devant le juge, par acte sous signature d'avocats.",
    source: "Loi du 18 novembre 2016 de modernisation de la justice du XXIe siècle"
  }
];
