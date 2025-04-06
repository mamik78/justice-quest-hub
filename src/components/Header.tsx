
import { useUser } from "../contexts/UserContext";
import { avatars } from "../data/quizData";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, User, Briefcase, Scale, AlertCircle, Scroll, Menu, Info, HelpCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { username, selectedAvatar, points } = useUser();
  const location = useLocation();
  const userAvatar = avatars.find(avatar => avatar.id === selectedAvatar);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Déterminer la classe active pour la navigation
  const getNavLinkClass = (path: string) => {
    const baseClass = "flex items-center gap-1 py-2 px-3 rounded transition-colors";
    return location.pathname === path 
      ? `${baseClass} bg-justice-light text-justice-primary font-medium` 
      : `${baseClass} hover:bg-gray-100`;
  };

  // Menu principal - options essentielles suivant l'ordre demandé
  const mainMenuItems = [
    { path: "/histoire", icon: <Scroll size={18} className="mr-1" />, label: "Histoire" },
    { path: "/organisation", icon: <Scale size={18} className="mr-1" />, label: "Organisation" },
    { path: "/metiers", icon: <Briefcase size={18} className="mr-1" />, label: "Métiers" },
    { path: "/quiz", icon: <BookOpen size={18} className="mr-1" />, label: "Quiz" },
    { path: "/profile", icon: <User size={18} className="mr-1" />, label: "Profil" }
  ];

  // Menu secondaire - options complémentaires
  const secondaryMenuItems = [
    { path: "/harcelement", icon: <AlertCircle size={18} className="mr-1" />, label: "Harcèlement" },
    { path: "/faq", icon: <HelpCircle size={18} className="mr-1" />, label: "FAQ" },
    { path: "/about", icon: <Info size={18} className="mr-1" />, label: "À propos" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
        
        {/* Navigation principale pour les utilisateurs connectés */}
        {username && (
          <div className="relative">
            {/* Bouton menu mobile */}
            <button 
              className="md:hidden flex items-center justify-center w-full py-2 border-t border-gray-100 mt-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu size={20} className="mr-2" />
              <span>Menu</span>
            </button>
            
            {/* Navigation desktop */}
            <nav className="hidden md:flex justify-center pb-2 overflow-x-auto">
              <div className="flex space-x-1">
                {/* Menu principal toujours visible */}
                {mainMenuItems.map(item => (
                  <Link key={item.path} to={item.path} className={getNavLinkClass(item.path)}>
                    {item.icon} {item.label}
                  </Link>
                ))}
                
                {/* Séparateur */}
                <div className="border-r border-gray-200 mx-2"></div>
                
                {/* Menu secondaire */}
                {secondaryMenuItems.map(item => (
                  <Link key={item.path} to={item.path} className={getNavLinkClass(item.path)}>
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* Menu mobile */}
            {mobileMenuOpen && (
              <nav className="md:hidden absolute z-10 bg-white shadow-md w-full left-0 rounded-b-lg border-t border-gray-100 animate-fade-down">
                <div className="flex flex-col p-2">
                  {/* Menu principal */}
                  {mainMenuItems.map(item => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className={getNavLinkClass(item.path) + " mb-1"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon} {item.label}
                    </Link>
                  ))}
                  
                  {/* Séparateur */}
                  <div className="border-b border-gray-200 my-2"></div>
                  
                  {/* Menu secondaire */}
                  {secondaryMenuItems.map(item => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className={getNavLinkClass(item.path) + " mb-1"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon} {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
