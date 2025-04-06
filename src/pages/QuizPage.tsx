
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
  
  // Trouver l'index global de la question actuelle dans la liste complète des questions
  const findGlobalQuestionIndex = (questionId: number) => {
    return quizQuestions.findIndex(q => q.id === questionId) + 1;
  };

  // Calculate the current question number in the global quiz progression
  const getCurrentQuestionNumber = () => {
    if (!currentQuestion) return 1;
    
    // Obtenir le numéro de question basé sur son ID global
    return findGlobalQuestionIndex(currentQuestion.id);
  };

  // Get total questions for current session
  const getTotalAvailableQuestions = () => {
    return quizQuestions.length; // Utiliser le nombre total de questions pour l'affichage
  };

  // Handle a correct answer
  const handleCorrectAnswer = (category: 'SAUJ' | 'Justice' | 'Métiers', questionId: number) => {
    addPoints(10);
    incrementCategoryScore(category);
    markQuestionCompleted(questionId);
    
    // Show success toast for correct answer
    toast.success("Bonne réponse ! +10 points", {
      duration: 3000,
    });
    
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
  
  // Handle an incorrect answer
  const handleIncorrectAnswer = () => {
    toast.error("Ce n'est pas la bonne réponse. Essaie encore!", {
      duration: 3000,
    });
  };

  const handleNextQuestion = () => {
    // Force move to the next question or cycle back to the first question
    // Using a callback to ensure we're working with the most current state
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex < availableQuestions.length - 1 ? prevIndex + 1 : 0;
      console.log(`Moving from question ${prevIndex} to ${nextIndex}`);
      return nextIndex;
    });
  };

  // Calculate progress
  const questionNumber = getCurrentQuestionNumber();
  const totalQuestions = getTotalAvailableQuestions();
  const progress = (questionNumber / totalQuestions) * 100;

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
          currentIndex={questionNumber}
          totalQuestions={totalQuestions}
          progress={progress}
        />

        <QuestionCard 
          key={`question-${currentQuestion.id}`}
          question={currentQuestion}
          onCorrectAnswer={handleCorrectAnswer}
          onIncorrectAnswer={handleIncorrectAnswer}
          onNextQuestion={handleNextQuestion}
        />
        
        <QuizFooter currentQuestion={currentQuestion} />
      </div>
    </div>
  );
};

export default QuizPage;
