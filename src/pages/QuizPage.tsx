
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { quizQuestions, badges } from "../data/quizData";
import { toast } from "sonner";

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

  // Rediriger vers l'onboarding si pas de nom d'utilisateur
  useEffect(() => {
    if (!username) {
      navigate("/onboarding");
    }
  }, [username, navigate]);

  // Questions non complétées ou toutes les questions si tout est complété
  const availableQuestions = quizQuestions.filter(q => 
    !completedQuestions.includes(q.id) || completedQuestions.length === quizQuestions.length
  );

  const [currentQuestion, setCurrentQuestion] = useState(availableQuestions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Si toutes les questions sont répondues, réinitialiser aux questions disponibles
    if (availableQuestions.length > 0) {
      setCurrentQuestion(availableQuestions[0]);
    }
  }, [availableQuestions]);

  const handleAnswerSelection = (key: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(key);
    setIsAnswered(true);
    
    const correct = key === currentQuestion.correct;
    setIsCorrect(correct);
    
    if (correct) {
      addPoints(10);
      incrementCategoryScore(currentQuestion.category);
      markQuestionCompleted(currentQuestion.id);
      
      // Vérifier et attribuer des badges
      const newBadges = checkAndAwardBadges();
      
      if (newBadges.length > 0) {
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
    }
  };

  const handleNextQuestion = () => {
    // Trouver l'index de la question actuelle
    const currentIndex = availableQuestions.findIndex(q => q.id === currentQuestion.id);
    
    // S'il y a une question suivante, passer à celle-ci
    if (currentIndex < availableQuestions.length - 1) {
      setCurrentQuestion(availableQuestions[currentIndex + 1]);
    } else {
      // Sinon, passer à la première question
      setCurrentQuestion(availableQuestions[0]);
    }
    
    // Réinitialiser l'état
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

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
      <div className="quiz-container animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <span className="badge bg-justice-primary text-white">
            {currentQuestion.category}
          </span>
          <span className="text-sm text-gray-500">
            Question {availableQuestions.findIndex(q => q.id === currentQuestion.id) + 1} / {availableQuestions.length}
          </span>
        </div>

        <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => (
            <div
              key={option.key}
              className={`answer-option ${
                isAnswered
                  ? option.key === currentQuestion.correct
                    ? "correct"
                    : option.key === selectedAnswer && option.key !== currentQuestion.correct
                    ? "incorrect"
                    : ""
                  : selectedAnswer === option.key
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleAnswerSelection(option.key)}
            >
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-3">
                  {option.key}
                </div>
                <span className="flex-1">{option.text}</span>
              </div>
            </div>
          ))}
        </div>

        {isAnswered && (
          <div className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"} mb-2`}>
              {isCorrect ? "Bonne réponse !" : "Ce n'est pas correct."}
            </p>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
            <p className="text-sm text-gray-500 mt-2">Source : {currentQuestion.source}</p>
          </div>
        )}

        <div className="flex justify-end">
          {isAnswered && (
            <button onClick={handleNextQuestion} className="btn-primary">
              Question suivante
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
