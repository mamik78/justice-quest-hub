
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { Briefcase, Scale, BookOpen, GavelIcon } from "lucide-react";

const MetiersPage = () => {
  const { username } = useUser();

  // Si l'utilisateur n'est pas connecté, on affiche un message différent
  const renderContent = () => {
    if (!username) {
      return (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Découvrez les métiers de la justice</h2>
          <p className="mb-6">Connectez-vous pour explorer les différentes professions du monde judiciaire.</p>
          <Link to="/onboarding" className="btn-primary">
            Commencer l'aventure
          </Link>
        </div>
      );
    }

    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Les Métiers de la Justice</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <Briefcase className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Magistrat</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Le magistrat rend la justice et applique la loi. Il peut être magistrat du siège (juge) ou magistrat du parquet (procureur).
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : École Nationale de la Magistrature (ENM)</li>
              <li>Rôle : Juge les affaires, rend des décisions</li>
              <li>Qualités requises : Impartialité, écoute, analyse</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <BookOpen className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Greffier</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Le greffier est un professionnel qui authentifie les actes de justice et assure le bon déroulement des procédures.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : École Nationale des Greffes (ENG)</li>
              <li>Rôle : Authentifier les actes, tenir les registres</li>
              <li>Qualités requises : Rigueur, organisation, discrétion</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <Scale className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Avocat</h3>
            </div>
            <p className="text-gray-700 mb-4">
              L'avocat conseille et défend les intérêts des justiciables devant les tribunaux.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : Master en droit + CAPA (Certificat d'Aptitude à la Profession d'Avocat)</li>
              <li>Rôle : Conseiller, défendre, représenter</li>
              <li>Qualités requises : Éloquence, analyse, ténacité</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <Scale className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Notaire</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Le notaire est un officier public qui authentifie les actes et contrats importants comme les mariages ou les ventes immobilières.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : Master en droit + formation spécifique</li>
              <li>Rôle : Authentifier des actes, conseiller</li>
              <li>Qualités requises : Précision, rigueur juridique, conseil</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <Scale className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Commissaire de justice</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Le commissaire de justice (remplaçant l'huissier de justice depuis 2022) signifie les actes judiciaires et procède aux exécutions des décisions de justice.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : Master en droit + formation spécifique</li>
              <li>Rôle : Constater, signifier, exécuter des décisions</li>
              <li>Qualités requises : Rigueur, diplomatie, fermeté</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-justice-primary">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-justice-light rounded-lg mr-4">
                <Scale className="text-justice-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold">Médiateur juridique</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Le médiateur facilite la résolution des conflits à l'amiable, sans passer par un procès.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Formation : Diplôme de médiation + expérience juridique</li>
              <li>Rôle : Faciliter le dialogue, trouver un accord</li>
              <li>Qualités requises : Neutralité, écoute, diplomatie</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Comment devenir professionnel de la justice ?</h3>
          <p className="mb-4">
            La plupart des métiers de la justice nécessitent une formation en droit, généralement un Master (bac+5).
            Certains métiers comme magistrat ou greffier nécessitent ensuite de réussir un concours pour entrer dans
            des écoles spécialisées. D'autres, comme avocat, requièrent l'obtention d'un certificat d'aptitude.
          </p>
          <p>
            Il existe également des métiers accessibles avec des formations plus courtes,
            comme assistant juridique ou secrétaire juridique (BTS ou BUT).
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {renderContent()}
    </div>
  );
};

export default MetiersPage;
