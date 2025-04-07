import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnswerOption } from "./AnswerOption";
import { FeedbackSection } from "./FeedbackSection";
import { getHintFromGroq } from "@/services/groqService";
import { QuizQuestion } from "@/data/quizData";

interface QuestionCardProps {
  question: QuizQuestion;
  onCorrectAnswer: (category: 'SAUJ' | 'Justice' | 'Métiers' | 'Histoire' | 'Harcèlement' | 'Organisation', questionId: number) => void;
  onIncorrectAnswer: () => void;
  onNextQuestion: () => void;
}

export const QuestionCard = ({ 
  question, 
  onCorrectAnswer,
  onIncorrectAnswer,
  onNextQuestion
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [allAnswers, setAllAnswers] = useState<string[]>([]);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setAiHint(null);
    setIsLoadingHint(false);
    setAllAnswers([]);
  }, [question.id]);

  const handleSelectAnswer = (key: string) => {
    if (!isAnswered) {
      setSelectedAnswer(key);
    }
  };

  const handleValidateAnswer = async () => {
    if (isAnswered || !selectedAnswer) return;
    
    setIsAnswered(true);
    
    const correct = selectedAnswer === question.correct;
    setIsCorrect(correct);
    
    if (correct) {
      const incorrectOptions = question.options
        .filter(opt => opt.key !== question.correct)
        .map(opt => opt.key);
      setAllAnswers(incorrectOptions);
      
      onCorrectAnswer(question.category, question.id);
    } else {
      setAllAnswers([selectedAnswer]);
      
      onIncorrectAnswer();
      
      setIsLoadingHint(true);
      try {
        const correctOption = question.options.find(opt => opt.key === question.correct);
        const selectedOption = question.options.find(opt => opt.key === selectedAnswer);
        
        if (correctOption && selectedOption) {
          const hint = await getHintFromGroq(
            question.question,
            selectedOption.text,
            correctOption.text
          );
          setAiHint(hint);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'indice:", error);
      } finally {
        setIsLoadingHint(false);
      }
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-bold mb-6">{question.question}</h2>

      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <AnswerOption
            key={`${question.id}-${option.key}`}
            option={option}
            isAnswered={isAnswered}
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
            allAnswers={allAnswers}
            currentQuestionCorrect={question.correct}
            onSelectAnswer={handleSelectAnswer}
          />
        ))}
      </div>

      {!isAnswered && selectedAnswer && (
        <div className="flex justify-end mb-4">
          <Button onClick={handleValidateAnswer} className="bg-justice-primary hover:bg-justice-primary/90 text-white">
            Valider ma réponse
          </Button>
        </div>
      )}

      {isAnswered && (
        <FeedbackSection
          isCorrect={isCorrect}
          explanation={question.explanation}
          source={question.source}
          aiHint={aiHint}
          isLoadingHint={isLoadingHint}
          onNextQuestion={onNextQuestion}
        />
      )}
    </div>
  );
};
