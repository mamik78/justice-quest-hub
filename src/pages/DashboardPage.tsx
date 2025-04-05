
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { badges, quizQuestions } from "../data/quizData";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { BarChart3, Book, Award, ChevronRight, BookOpen, Briefcase, AlertCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { 
    username, 
    selectedAvatar, 
    points, 
    categoryScores,
    earnedBadges, 
    completedQuestions 
  } = useUser();

  const [saujProgress, setSaujProgress] = useState(0);
  const [justiceProgress, setJusticeProgress] = useState(0);
  const [metiersProgress, setMetiersProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    if (!username) {
      navigate("/onboarding");
    }
  }, [username, navigate]);

  useEffect(() => {
    // Calculer le progrès pour chaque catégorie
    const saujQuestions = quizQuestions.filter(q => q.category === 'SAUJ').length;
    const justiceQuestions = quizQuestions.filter(q => q.category === 'Justice').length;
    const metiersQuestions = quizQuestions.filter(q => q.category === 'Métiers').length;
    const totalQuestions = quizQuestions.length;

    // Vérifier si le nombre de questions est supérieur à 0 pour éviter la division par zéro
    if (saujQuestions > 0) {
      setSaujProgress(Math.round((categoryScores.SAUJ / saujQuestions) * 100));
    }
    
    if (justiceQuestions > 0) {
      setJusticeProgress(Math.round((categoryScores.Justice / justiceQuestions) * 100));
    }
    
    if (metiersQuestions > 0) {
      setMetiersProgress(Math.round((categoryScores.Métiers / metiersQuestions) * 100));
    }
    
    if (totalQuestions > 0) {
      setOverallProgress(Math.round((completedQuestions.length / totalQuestions) * 100));
    }
  }, [categoryScores, completedQuestions]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-justice-primary flex items-center">
        <BarChart3 className="mr-2 h-7 w-7" />
        Tableau de Bord
      </h1>
      
      {/* Sections principales */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Statistiques générales */}
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Book className="mr-2 h-5 w-5 text-justice-primary" />
            Mes statistiques
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Progression globale</span>
                <span className="text-sm font-medium">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">SAUJ</span>
                <span className="text-sm font-medium">{saujProgress}%</span>
              </div>
              <Progress value={saujProgress} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Justice</span>
                <span className="text-sm font-medium">{justiceProgress}%</span>
              </div>
              <Progress value={justiceProgress} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Métiers</span>
                <span className="text-sm font-medium">{metiersProgress}%</span>
              </div>
              <Progress value={metiersProgress} className="h-2" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center justify-center w-max mx-auto">
              <Award className="h-4 w-4 mr-1" /> 
              {points} points
            </span>
          </div>
        </Card>
        
        {/* Badges */}
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2 h-5 w-5 text-amber-500" />
            Mes badges
          </h2>
          {earnedBadges.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {earnedBadges.map(badgeId => {
                const badge = badges.find(b => b.id === badgeId);
                return badge ? (
                  <div key={badge.id} className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="font-medium text-sm">{badge.title}</div>
                    <div className="text-xs text-gray-500">{badge.description}</div>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p>Tu n'as pas encore gagné de badges.</p>
              <p className="mt-2">Réponds correctement aux questions pour en gagner !</p>
            </div>
          )}
        </Card>
      </div>
      
      {/* Modules d'apprentissage */}
      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-justice-primary" />
          Modules d'apprentissage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/quiz" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors flex flex-col items-center text-center">
            <BookOpen className="h-8 w-8 mb-2 text-justice-primary" />
            <h3 className="font-semibold mb-1">Quiz</h3>
            <p className="text-sm text-gray-600">Testez vos connaissances</p>
          </Link>
          <Link to="/metiers" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors flex flex-col items-center text-center">
            <Briefcase className="h-8 w-8 mb-2 text-justice-primary" />
            <h3 className="font-semibold mb-1">Métiers</h3>
            <p className="text-sm text-gray-600">Découvrez les métiers de la justice</p>
          </Link>
          <Link to="/organisation" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors flex flex-col items-center text-center">
            <Scale className="h-8 w-8 mb-2 text-justice-primary" />
            <h3 className="font-semibold mb-1">Organisation</h3>
            <p className="text-sm text-gray-600">Structure du système judiciaire</p>
          </Link>
        </div>
      </Card>
      
      {/* Badges à débloquer */}
      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-amber-500" />
          Badges à débloquer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.filter(badge => !earnedBadges.includes(badge.id)).map(badge => (
            <div key={badge.id} className="text-center bg-gray-50 p-3 rounded-lg opacity-70">
              <div className="text-3xl mb-2 grayscale">{badge.icon}</div>
              <div className="font-medium text-sm">{badge.title}</div>
              <div className="text-xs text-gray-500">{badge.description}</div>
            </div>
          ))}
        </div>
      </Card>
      
      {/* Ressources spéciales */}
      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
          Ressources spéciales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/harcelement" className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <AlertCircle className="h-10 w-10 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Informations sur le harcèlement</h3>
              <p className="text-sm text-gray-600">Comprendre, prévenir et agir contre le harcèlement</p>
            </div>
            <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
          </Link>
          
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <JusticeAICard />
          </div>
        </div>
      </Card>
      
      {/* Continuer à apprendre */}
      <div className="text-center">
        <button 
          onClick={() => navigate("/quiz")} 
          className="btn-primary inline-flex items-center"
        >
          Continuer à apprendre
          <ChevronRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

// Carte pour JusticeAI
const JusticeAICard = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold mb-1">Justice AI</h3>
        <p className="text-sm text-gray-600">Posez vos questions sur la justice</p>
      </div>
      <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
    </>
  );
};

export default DashboardPage;
