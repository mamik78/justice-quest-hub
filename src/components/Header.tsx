
import { useUser } from "../contexts/UserContext";
import { avatars } from "../data/quizData";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, User, BarChart3, Briefcase, Scale, AlertCircle, Scroll } from "lucide-react";

const Header = () => {
  const { username, selectedAvatar, points } = useUser();
  const location = useLocation();
  const userAvatar = avatars.find(avatar => avatar.id === selectedAvatar);

  // Déterminer la classe active pour la navigation
  const getNavLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-1 py-2 px-3 rounded transition-colors";
    return location.pathname === path 
      ? `${baseClass} bg-justice-light text-justice-primary font-medium` 
      : `${baseClass} hover:bg-gray-100`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-justice-primary text-white rounded-full">
              <Scale size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-justice-primary sm:text-2xl">C Justice SAUJ</h1>
          </Link>
          
          {username ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1 bg-justice-gray px-3 py-1 rounded-full">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold text-sm">{points} pts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline font-medium">{username}</span>
                <Link to="/profile" className="block w-8 h-8 rounded-full overflow-hidden border-2 border-justice-primary">
                  <img src={userAvatar?.src} alt="Avatar" className="w-full h-full object-cover" />
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/onboarding" className="btn-primary">
              Commencer
            </Link>
          )}
        </div>
        
        {/* Navigation principale */}
        {username && (
          <nav className="flex justify-center pb-2 overflow-x-auto">
            <div className="flex space-x-1">
              <Link to="/" className={getNavLinkClass("/")}>
                <Home size={18} className="mr-1" /> Accueil
              </Link>
              <Link to="/quiz" className={getNavLinkClass("/quiz")}>
                <BookOpen size={18} className="mr-1" /> Quiz
              </Link>
              <Link to="/histoire" className={getNavLinkClass("/histoire")}>
                <Scroll size={18} className="mr-1" /> Histoire
              </Link>
              <Link to="/harcelement" className={getNavLinkClass("/harcelement")}>
                <AlertCircle size={18} className="mr-1" /> Harcèlement
              </Link>
              <Link to="/metiers" className={getNavLinkClass("/metiers")}>
                <Briefcase size={18} className="mr-1" /> Métiers
              </Link>
              <Link to="/organisation" className={getNavLinkClass("/organisation")}>
                <Scale size={18} className="mr-1" /> Organisation
              </Link>
              <Link to="/dashboard" className={getNavLinkClass("/dashboard")}>
                <BarChart3 size={18} className="mr-1" /> Tableau de bord
              </Link>
              <Link to="/profile" className={getNavLinkClass("/profile")}>
                <User size={18} className="mr-1" /> Profil
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
