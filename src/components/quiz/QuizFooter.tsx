
import { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/quizData";
import { LightbulbIcon, Loader2 } from "lucide-react";
import { getHintFromGroq } from "@/services/groqService";
import { Badge } from "@/components/ui/badge";

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
        setAiHint("Réfléchis aux principes fondamentaux de cette question.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHint();
  }, [currentQuestion?.id]);
  
  if (!currentQuestion) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="flex items-start justify-center">
        {isLoading ? (
          <div className="flex items-center">
            <Loader2 size={16} className="mr-2 animate-spin text-amber-500" />
            <p className="text-sm text-gray-600">Chargement de l'indice...</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <LightbulbIcon size={16} className="mr-2 text-amber-500" />
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-semibold">
                INDICE
              </Badge>
            </div>
            <p className="text-sm text-gray-700">{aiHint || "Réfléchis aux concepts clés de cette question."}</p>
            <p className="mt-3 text-xs font-semibold text-justice-primary">C-Justice-SAUJ</p>
          </div>
        )}
      </div>
    </div>
  );
};
