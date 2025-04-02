
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-justice-gray py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center justify-center w-8 h-8 bg-justice-primary text-white rounded-full mr-2">
                <span className="text-sm font-bold">C</span>
              </div>
              <span className="font-bold text-justice-primary">C-Justice-Web</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 text-center md:text-left">
              © {currentYear} C-Justice-Web. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/" className="text-sm text-gray-600 hover:text-justice-primary">
              Accueil
            </Link>
            <Link to="/quiz" className="text-sm text-gray-600 hover:text-justice-primary">
              Quiz
            </Link>
            <Link to="/profile" className="text-sm text-gray-600 hover:text-justice-primary">
              Profil
            </Link>
            <a 
              href="https://www.justice.gouv.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-600 hover:text-justice-primary"
            >
              Justice.gouv.fr
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>
            Les informations fournies dans cette application sont à but éducatif et ne remplacent pas les conseils juridiques professionnels.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
