
import { CheckCircle, XCircle } from "lucide-react";

interface AnswerOptionProps {
  option: {
    key: string;
    text: string;
  };
  isAnswered: boolean;
  isCorrect: boolean;
  selectedAnswer: string | null;
  allAnswers: string[];
  currentQuestionCorrect: string;
  onSelectAnswer: (key: string) => void;
}

export const AnswerOption = ({
  option,
  isAnswered,
  isCorrect,
  selectedAnswer,
  allAnswers,
  currentQuestionCorrect,
  onSelectAnswer,
}: AnswerOptionProps) => {
  const getClassName = () => {
    if (isAnswered) {
      if (option.key === currentQuestionCorrect) {
        return "correct";
      } else if (allAnswers.includes(option.key)) {
        return "incorrect";
      }
      return "";
    } else if (selectedAnswer === option.key) {
      return "selected";
    }
    return "";
  };

  return (
    <div
      className={`answer-option ${getClassName()} cursor-pointer`}
      onClick={() => onSelectAnswer(option.key)}
    >
      <div className="flex items-start">
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-3">
          {option.key}
        </div>
        <span className="flex-1">{option.text}</span>
        {isAnswered && option.key === currentQuestionCorrect && (
          <CheckCircle className="text-green-600 ml-2" size={20} />
        )}
        {isAnswered && allAnswers.includes(option.key) && (
          <XCircle className="text-red-600 ml-2" size={20} />
        )}
      </div>
    </div>
  );
};
