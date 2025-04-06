
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { badges } from "../data/quizData";
import JusticeAI from "../components/JusticeAI";
import OfficialLinks from "../components/OfficialLinks";
import { Scale, Scroll, BookOpen, Briefcase } from "lucide-react";

const HomePage = () => {
  const { username, earnedBadges, points, categoryScores } = useUser();
  const userBadges = badges.filter(badge => earnedBadges.includes(badge.id));

  // Calculer le pourcentage total de progression
  const totalQuestions = 30; // Nombre total de questions prévu
  const totalCompleted = Object.values(categoryScores).reduce((sum, current) => sum + current, 0);
  const progressPercentage = Math.round((totalCompleted / totalQuestions) * 100);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {username ? (
        <>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Bienvenue, {username}!</h2>
              <p className="text-justice-light">Continuez votre parcours d'apprentissage sur la justice.</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progression totale</span>
                  <span className="text-sm font-medium">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-justice-primary h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-justice-gray rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-1">SAUJ</h3>
                  <p className="text-2xl font-bold">{categoryScores.SAUJ} / 10</p>
                </div>
                <div className="bg-justice-gray rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-1">Justice</h3>
                  <p className="text-2xl font-bold">{categoryScores.Justice} / 10</p>
                </div>
                <div className="bg-justice-gray rounded-lg p-4 text-center">
                  <h3 className="font-semibold mb-1">Métiers</h3>
                  <p className="text-2xl font-bold">{categoryScores.Métiers} / 10</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link to="/quiz" className="btn-primary">
                  Continuer l'apprentissage
                </Link>
                <Link to="/histoire" className="btn-secondary">
                  Découvrir l'histoire de la justice
                </Link>
              </div>
            </div>
          </div>
          
          {/* Composant IA Assistant Justice */}
          <JusticeAI />
          
          {/* Composant liens officiels */}
          <OfficialLinks />
          
          {userBadges.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mt-8 animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Vos badges</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {userBadges.map(badge => (
                  <div key={badge.id} className="bg-justice-gray rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h3 className="font-semibold text-sm">{badge.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-justice-primary text-white rounded-full mb-4">
              <Scale size={36} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-justice-primary mb-4">C-Justice-SAUJ</h1>
            <p className="text-xl max-w-2xl mx-auto mb-6 text-gray-700">
              Découvre le monde de la justice de façon ludique avec des quiz interactifs !
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-4xl">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-10 w-10 text-justice-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">SAUJ</h2>
              <p className="text-gray-600">Découvrez le Service d'Accueil Unique du Justiciable et son rôle essentiel.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <Scale className="h-10 w-10 text-justice-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">La Justice</h2>
              <p className="text-gray-600">Comprenez les principes fondamentaux du système judiciaire français.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-10 w-10 text-justice-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Les Métiers</h2>
              <p className="text-gray-600">Explorez les différentes professions du monde judiciaire.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <Scroll className="h-10 w-10 text-justice-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Histoire</h2>
              <p className="text-gray-600">Découvrez l'histoire fascinante de la justice, des Grecs à nos jours.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/onboarding" className="btn-primary text-lg px-8 py-3">
              Commencer l'aventure
            </Link>
            <Link to="/histoire" className="btn-secondary text-lg px-8 py-3">
              Explorer l'histoire de la justice
            </Link>
          </div>
          
          {/* Composant IA pour les non-inscrits aussi */}
          <div className="w-full mt-10">
            <JusticeAI />
          </div>
          
          {/* Composant liens officiels pour les non-inscrits aussi */}
          <div className="w-full">
            <OfficialLinks />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
