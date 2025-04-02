
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Page non trouvée:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="text-center max-w-md bg-white rounded-xl shadow-md p-8 animate-fade-in">
        <div className="text-6xl mb-4">🧩</div>
        <h1 className="text-4xl font-bold mb-4 text-justice-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oups ! Cette page n'existe pas dans notre système de justice.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
