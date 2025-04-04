
import { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/quizData";
import { LightbulbIcon, Loader2 } from "lucide-react";
import { getHintFromGroq } from "@/services/groqService";

interface QuizFooterProps {
  currentQuestion: QuizQuestion | null;
}

export const QuizFooter = ({ currentQuestion }: QuizFooterProps) => {
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Get AI hint when question changes
  useEffect(() => {
    if (!currentQuestion) return;
    
    const fetchHint = async () => {
      setIsLoading(true);
      try {
        // Get a general hint for this question
        const hint = await getHintFromGroq(currentQuestion.question);
        setAiHint(hint);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'indice:", error);
        setAiHint("Indice non disponible pour le moment. Lisez attentivement la question.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHint();
  }, [currentQuestion?.id]);
  
  if (!currentQuestion) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="flex items-center justify-center">
        {isLoading ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin text-amber-500" />
            <p>Chargement de l'indice...</p>
          </>
        ) : (
          <>
            <LightbulbIcon size={16} className="mr-2 text-amber-500" />
            <p>Indice : {aiHint || "Lisez attentivement la question."}</p>
          </>
        )}
      </div>
      <p className="mt-2 text-xs font-semibold text-justice-primary">C-Justice-SAUJ</p>
    </div>
  );
};
