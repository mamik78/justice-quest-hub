
import { QuizQuestion } from "@/data/quizData";
import { Badge } from "@/components/ui/badge";

interface QuizFooterProps {
  currentQuestion: QuizQuestion | null;
}

export const QuizFooter = ({ currentQuestion }: QuizFooterProps) => {
  if (!currentQuestion) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="text-center">
        <p className="mt-3 text-xs font-semibold text-justice-primary">C-Justice-SAUJ</p>
      </div>
    </div>
  );
};
