
export const badges = [
  // Badges généraux de progression
  {
    id: "quiz-apprenti",
    title: "Apprenti Juridique",
    description: "Répondre correctement à 10 questions au total",
    category: "Global",
    requiredScore: 10,
    icon: "📚"
  },
  {
    id: "quiz-initie",
    title: "Initié au Droit",
    description: "Répondre correctement à 20 questions au total",
    category: "Global",
    requiredScore: 20,
    icon: "🎓"
  },
  {
    id: "quiz-master",
    title: "Maître du Droit",
    description: "Répondre correctement à 40 questions au total",
    category: "Global",
    requiredScore: 40,
    icon: "⚖️"
  },
  
  // Badges thématiques
  {
    id: "sauj-expert",
    title: "Expert du SAUJ",
    description: "Répondre correctement à toutes les questions sur le SAUJ",
    category: "SAUJ",
    requiredScore: 5,
    icon: "🏛️"
  },
  {
    id: "justice-connaisseur",
    title: "Connaisseur de la Justice",
    description: "Répondre correctement à toutes les questions sur la Justice",
    category: "Justice",
    requiredScore: 5,
    icon: "⚔️"
  },
  {
    id: "metiers-master",
    title: "Maître des Métiers",
    description: "Répondre correctement à toutes les questions sur les Métiers de la justice",
    category: "Métiers",
    requiredScore: 5,
    icon: "👨‍⚖️"
  },
  
  // Badges historiques
  {
    id: "heritier-athenes",
    title: "Héritier d'Athènes",
    description: "Découvrir les origines démocratiques de la justice",
    category: "Histoire",
    requiredScore: 0, // Badge obtenu en visitant la page Histoire
    icon: "🏛️"
  },
  {
    id: "disciple-napoleon",
    title: "Disciple de Napoléon",
    description: "Maîtriser les connaissances sur le Code civil et le Code pénal",
    category: "Histoire",
    requiredScore: 0, // Badge obtenu via un quiz spécial sur les codes
    icon: "📜"
  }
];
