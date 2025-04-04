
import { CheckCircle, InfoIcon, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeedbackSectionProps {
  isCorrect: boolean;
  explanation: string;
  source: string;
  aiHint: string | null;
  isLoadingHint: boolean;
  onNextQuestion: () => void;
}

export const FeedbackSection = ({
  isCorrect,
  explanation,
  source,
  aiHint,
  isLoadingHint,
  onNextQuestion,
}: FeedbackSectionProps) => {
  return (
    <div className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
      <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"} mb-2 flex items-center`}>
        {isCorrect 
          ? <><CheckCircle size={18} className="mr-2" /> Bonne réponse !</> 
          : <><XCircle size={18} className="mr-2" /> Ce n'est pas la bonne réponse.</>}
      </p>
      <p className="text-gray-700">{explanation}</p>
      
      {!isCorrect && aiHint && (
        <div className="mt-3 p-3 bg-white rounded border border-gray-200">
          <p className="text-sm text-gray-700 flex items-start">
            <InfoIcon size={16} className="mr-2 mt-0.5 text-blue-500" />
            <span>{aiHint}</span>
          </p>
        </div>
      )}
      
      {!isCorrect && isLoadingHint && (
        <div className="mt-3 p-3 bg-white rounded border border-gray-200">
          <p className="text-sm text-gray-500">Chargement d'un indice personnalisé...</p>
        </div>
      )}
      
      <p className="text-sm text-gray-500 mt-2">Source : {source}</p>

      <div className="flex justify-end mt-4">
        <Button 
          onClick={onNextQuestion} 
          className="bg-justice-primary hover:bg-justice-primary/90 text-white"
        >
          Question suivante
        </Button>
      </div>
    </div>
  );
};
