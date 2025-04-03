
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { quizQuestions, badges } from "../data/quizData";
import { toast } from "sonner";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressHeader } from "@/components/quiz/ProgressHeader";
import { QuizFooter } from "@/components/quiz/QuizFooter";

const QuizPage = () => {
  const navigate = useNavigate();
  const { 
    username, 
    addPoints, 
    incrementCategoryScore, 
    checkAndAwardBadges,
    completedQuestions,
    markQuestionCompleted
  } = useUser();

  // Redirect to onboarding if no username
  useEffect(() => {
    if (!username) {
      navigate("/onboarding");
    }
  }, [username, navigate]);

  // Uncompleted questions or all questions if everything is completed
  const availableQuestions = quizQuestions.filter(q => 
    !completedQuestions.includes(q.id) || completedQuestions.length === quizQuestions.length
  );

  const [currentQuestion, setCurrentQuestion] = useState(availableQuestions[0]);

  useEffect(() => {
    // If all questions are answered, reset to available questions
    if (availableQuestions.length > 0) {
      setCurrentQuestion(availableQuestions[0]);
    }
  }, [availableQuestions]);

  // Handle a correct answer
  const handleCorrectAnswer = (category: 'SAUJ' | 'Justice' | 'Métiers', questionId: number) => {
    addPoints(10);
    incrementCategoryScore(category);
    markQuestionCompleted(questionId);
    
    // Check and award badges
    const newBadges = checkAndAwardBadges();
    
    if (newBadges && newBadges.length > 0) {
      newBadges.forEach(badgeId => {
        const badge = badges.find(b => b.id === badgeId);
        if (badge) {
          toast.success(`Nouveau badge débloqué : ${badge.title}`, {
            duration: 3000,
            icon: badge.icon,
          });
        }
      });
    }
  };

  const handleNextQuestion = () => {
    // Find the index of the current question
    const currentIndex = availableQuestions.findIndex(q => q.id === currentQuestion.id);
    
    // If there is a next question, move to it
    if (currentIndex < availableQuestions.length - 1) {
      setCurrentQuestion(availableQuestions[currentIndex + 1]);
    } else {
      // Otherwise, return to the first question
      setCurrentQuestion(availableQuestions[0]);
    }
  };

  // Calculate progress
  const currentIndex = availableQuestions.findIndex(q => q.id === currentQuestion.id);
  const progress = (currentIndex + 1) / availableQuestions.length * 100;

  if (!currentQuestion) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Chargement des questions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="quiz-container">
        <ProgressHeader 
          category={currentQuestion.category}
          currentIndex={currentIndex}
          totalQuestions={availableQuestions.length}
          progress={progress}
        />

        <QuestionCard 
          question={currentQuestion}
          onCorrectAnswer={handleCorrectAnswer}
          onNextQuestion={handleNextQuestion}
        />
        
        <QuizFooter currentQuestion={currentQuestion} />
      </div>
    </div>
  );
};

export default QuizPage;
