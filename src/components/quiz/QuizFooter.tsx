
import { QuizQuestion } from "@/data/quizData";
import { LightbulbIcon } from "lucide-react";

interface QuizFooterProps {
  currentQuestion: QuizQuestion | null;
}

export const QuizFooter = ({ currentQuestion }: QuizFooterProps) => {
  // Generate a simple hint based on the category
  const getHint = () => {
    if (!currentQuestion) return "Chargement de la question...";
    
    const categoryHints = {
      'SAUJ': "Cette question concerne le Service d'Accueil Unique du Justiciable (SAUJ).",
      'Justice': "Cette question est liée au système judiciaire français.",
      'Métiers': "Cette question concerne les différents métiers de la justice."
    };
    
    return categoryHints[currentQuestion.category] || "Lisez attentivement la question.";
  };
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="flex items-center justify-center">
        <LightbulbIcon size={16} className="mr-2 text-amber-500" />
        <p>Indice : {getHint()}</p>
      </div>
      <p className="mt-2 text-xs font-semibold text-justice-primary">C-Justice-SAUJ</p>
    </div>
  );
};
