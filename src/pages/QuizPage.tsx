
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

  // Get uncompleted questions or all questions if everything is completed
  const availableQuestions = quizQuestions.filter(q => 
    !completedQuestions.includes(q.id) || completedQuestions.length === quizQuestions.length
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = availableQuestions[currentQuestionIndex];

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
    // Move to the next question or cycle back to the first question
    setCurrentQuestionIndex((prevIndex) => 
      prevIndex < availableQuestions.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Calculate progress
  const progress = ((currentQuestionIndex + 1) / availableQuestions.length) * 100;

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
      <div className="quiz-container bg-white rounded-xl shadow-md p-6">
        <ProgressHeader 
          category={currentQuestion.category}
          currentIndex={currentQuestionIndex}
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
