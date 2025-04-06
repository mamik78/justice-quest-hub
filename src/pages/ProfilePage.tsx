import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { avatars } from "../data/avatars";
import { badges, quizQuestions } from "../data/quizData";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Book, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import BadgeDisplay from "@/components/quiz/BadgeDisplay";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { 
    username, 
    setUsername, 
    selectedAvatar, 
    setSelectedAvatar, 
    points, 
    categoryScores, 
    earnedBadges, 
    completedQuestions,
    resetProgress,
    feedbackGiven,
    setFeedbackGiven,
    age,
    setAge 
  } = useUser();
  
  const [newName, setNewName] = useState(username);
  const [newAge, setNewAge] = useState(age || "");
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [feedback, setFeedback] = useState("");
  
  const [saujProgress, setSaujProgress] = useState(0);
  const [justiceProgress, setJusticeProgress] = useState(0);
  const [metiersProgress, setMetiersProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  
  const userBadges = badges.filter(badge => earnedBadges.includes(badge.id));
  const unEarnedBadges = badges.filter(badge => !earnedBadges.includes(badge.id));

  useEffect(() => {
    if (!username) {
      navigate("/onboarding");
    }
  }, [username, navigate]);

  useEffect(() => {
    if (categoryScores && completedQuestions) {
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
    }
  }, [categoryScores, completedQuestions]);

  const handleSaveProfile = () => {
    if (newName.trim()) {
      setUsername(newName.trim());
      setAge(newAge);
      toast.success("Profil mis à jour !");
    }
  };

  const handleReset = () => {
    resetProgress();
    setShowConfirmReset(false);
    toast.success("Progression réinitialisée");
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim()) {
      // Ici, on pourrait envoyer le feedback à un serveur
      console.log("Feedback soumis:", feedback);
      setFeedbackGiven(true);
      setFeedback("");
      toast.success("Merci pour votre retour !");
    }
  };

  const niveauOptions = [
    "6ème",
    "5ème",
    "4ème",
    "3ème",
    "Seconde",
    "Autre"
  ];

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Profil</h2>
          <p className="text-justice-light">Gérez vos informations et suivez votre progression</p>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-justice-primary mb-4">
                <img 
                  src={avatars.find(a => a.id === selectedAvatar)?.src} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">{username}</div>
                <div className="flex items-center justify-center gap-1 bg-justice-light px-3 py-1 rounded-full mb-4">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{points} points</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-justice-primary focus:border-justice-primary"
                  maxLength={15}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau / Classe
                </label>
                <select
                  id="age"
                  value={newAge}
                  onChange={(e) => setNewAge(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-justice-primary focus:border-justice-primary"
                >
                  <option value="">Sélectionner un niveau</option>
                  {niveauOptions.map((niveau) => (
                    <option key={niveau} value={niveau}>
                      {niveau}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Avatar
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar.id}
                      className={`cursor-pointer rounded-lg p-1 border-2 transition-all duration-200 ${
                        selectedAvatar === avatar.id 
                          ? "border-justice-primary shadow-md" 
                          : "border-transparent hover:border-justice-light"
                      }`}
                      onClick={() => setSelectedAvatar(avatar.id)}
                    >
                      <img src={avatar.src} alt={avatar.alt} className="w-full h-auto rounded" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(true)}
                  className="py-2 px-4 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Réinitialiser la progression
                </button>
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="py-2 px-4 bg-justice-primary text-white rounded-lg hover:bg-justice-dark transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="mr-2 h-5 w-5 text-justice-primary" />
          Ma progression
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
            <Progress value={saujProgress} className="h-2 bg-blue-100" indicatorColor="bg-blue-600" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Justice</span>
              <span className="text-sm font-medium">{justiceProgress}%</span>
            </div>
            <Progress value={justiceProgress} className="h-2 bg-green-100" indicatorColor="bg-green-600" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Métiers</span>
              <span className="text-sm font-medium">{metiersProgress}%</span>
            </div>
            <Progress value={metiersProgress} className="h-2 bg-amber-100" indicatorColor="bg-amber-600" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center justify-center w-max mx-auto">
            <Award className="h-4 w-4 mr-1" /> 
            {completedQuestions.length} / {quizQuestions.length} questions répondues
          </span>
        </div>
      </Card>
      
      <Card className="p-6 shadow-md mb-8 animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-amber-500" />
          Mes badges
        </h2>
        {userBadges.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {userBadges.map(badge => (
              <BadgeDisplay
                key={badge.id}
                icon={badge.icon}
                title={badge.title}
                description={badge.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500">
            <p>Tu n'as pas encore gagné de badges.</p>
            <p className="mt-2">Réponds correctement aux questions pour en gagner !</p>
          </div>
        )}
      </Card>

      <Card className="p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-gray-400" />
          Badges à débloquer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {unEarnedBadges.map(badge => (
            <BadgeDisplay
              key={badge.id}
              icon={badge.icon}
              title={badge.title}
              description={badge.description}
              isEarned={false}
            />
          ))}
        </div>
      </Card>
      
      <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
        <h2 className="text-xl font-bold mb-4">Donnez votre avis</h2>
        <p className="mb-4 text-gray-600">
          Votre avis nous aide à améliorer C Justice SAUJ pour tous les utilisateurs.
        </p>
        <div className="mb-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Partagez vos suggestions ou commentaires..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-justice-primary focus:border-justice-primary h-32"
            disabled={feedbackGiven}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmitFeedback}
            className="py-2 px-4 bg-justice-primary text-white rounded-lg hover:bg-justice-dark transition-colors"
            disabled={feedbackGiven || !feedback.trim()}
          >
            {feedbackGiven ? "Merci pour votre retour!" : "Envoyer"}
          </button>
        </div>
      </div>
      
      {showConfirmReset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full animate-scale-in">
            <h3 className="text-xl font-bold mb-4">Réinitialiser la progression?</h3>
            <p className="mb-6 text-gray-600">
              Cette action effacera tous vos points, badges et quiz complétés. Cette action ne peut pas être annulée.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleReset}
                className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
