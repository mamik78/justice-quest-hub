
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { quizQuestions, badges } from "../data/quizData";
import { getHintFromGroq } from "../services/groqService";
import { toast } from "sonner";
import { InfoIcon, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [allAnswers, setAllAnswers] = useState<string[]>([]);

  useEffect(() => {
    // Si toutes les questions sont répondues, réinitialiser aux questions disponibles
    if (availableQuestions.length > 0) {
      setCurrentQuestion(availableQuestions[0]);
    }
  }, [availableQuestions]);

  // Nouvelle fonction pour sélectionner une réponse sans validation automatique
  const handleSelectAnswer = (key: string) => {
    if (!isAnswered) {
      setSelectedAnswer(key);
    }
  };

  // Fonction pour valider la réponse sélectionnée
  const handleValidateAnswer = async () => {
    if (isAnswered || !selectedAnswer) return;
    
    setIsAnswered(true);
    
    const correct = selectedAnswer === currentQuestion.correct;
    setIsCorrect(correct);
    
    if (correct) {
      // Stocker toutes les options incorrectes
      const incorrectOptions = currentQuestion.options
        .filter(opt => opt.key !== currentQuestion.correct)
        .map(opt => opt.key);
      setAllAnswers(incorrectOptions);
      
      addPoints(10);
      incrementCategoryScore(currentQuestion.category);
      markQuestionCompleted(currentQuestion.id);
      
      // Vérifier et attribuer des badges
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
    } else {
      // Mettre à jour les réponses incorrectes
      setAllAnswers([selectedAnswer]);
      
      // Demander un indice à l'IA pour une mauvaise réponse
      setIsLoadingHint(true);
      try {
        const correctOption = currentQuestion.options.find(opt => opt.key === currentQuestion.correct);
        const selectedOption = currentQuestion.options.find(opt => opt.key === selectedAnswer);
        
        if (correctOption && selectedOption) {
          const hint = await getHintFromGroq(
            currentQuestion.question,
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
    setAiHint(null);
    setAllAnswers([]);
  };

  // Calculer la progression
  const progress = (availableQuestions.findIndex(q => q.id === currentQuestion.id) + 1) / availableQuestions.length * 100;

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
        <div className="flex justify-between items-center mb-2">
          <span className="badge bg-justice-primary text-white">
            {currentQuestion.category}
          </span>
          <span className="text-sm text-gray-500">
            Question {availableQuestions.findIndex(q => q.id === currentQuestion.id) + 1} / {availableQuestions.length}
          </span>
        </div>

        <Progress value={progress} className="h-1 mb-4" />

        <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => (
            <div
              key={option.key}
              className={`answer-option ${
                isAnswered
                  ? option.key === currentQuestion.correct
                    ? "correct"
                    : allAnswers.includes(option.key)
                    ? "incorrect"
                    : ""
                  : selectedAnswer === option.key
                  ? "selected"
                  : ""
              } cursor-pointer`}
              onClick={() => handleSelectAnswer(option.key)}
            >
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-3">
                  {option.key}
                </div>
                <span className="flex-1">{option.text}</span>
                {isAnswered && option.key === currentQuestion.correct && (
                  <CheckCircle className="text-green-600 ml-2" size={20} />
                )}
                {isAnswered && allAnswers.includes(option.key) && (
                  <XCircle className="text-red-600 ml-2" size={20} />
                )}
              </div>
            </div>
          ))}
        </div>

        {!isAnswered && selectedAnswer && (
          <div className="flex justify-end mb-4">
            <Button onClick={handleValidateAnswer} className="btn-primary">
              Valider ma réponse
            </Button>
          </div>
        )}

        {isAnswered && (
          <div className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"} mb-2 flex items-center`}>
              {isCorrect 
                ? <><CheckCircle size={18} className="mr-2" /> Bonne réponse !</> 
                : <><XCircle size={18} className="mr-2" /> Ce n'est pas la bonne réponse.</>}
            </p>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
            
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
            
            <p className="text-sm text-gray-500 mt-2">Source : {currentQuestion.source}</p>
          </div>
        )}

        <div className="flex justify-end">
          {isAnswered && (
            <Button onClick={handleNextQuestion} className="btn-primary">
              Question suivante
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
