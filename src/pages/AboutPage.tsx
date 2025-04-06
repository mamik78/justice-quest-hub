
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">À propos de C Justice SAUJ</h2>
          <p className="text-justice-light">Notre histoire et notre mission</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-justice-primary mb-3">Qui sommes-nous ?</h3>
            <p className="text-gray-700">
              Je suis agent du SAUJ (Service d'Accueil Unique du Justiciable) de Mantes-la-Jolie, 
              passionné par le codage, l'intelligence artificielle et la justice. 
              Cette application est née de ma volonté de partager mes connaissances et mon expérience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-justice-primary mb-3">Notre inspiration</h3>
            <p className="text-gray-700">
              C'est grâce à mon enfant, curieux et posant de nombreuses questions sur mon métier et 
              le fonctionnement de la justice, que j'ai eu l'idée de créer cette plateforme. 
              J'ai voulu concevoir un espace où les jeunes pourraient apprendre et comprendre 
              les principes fondamentaux de la justice de manière ludique et accessible.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-justice-primary mb-3">Notre mission</h3>
            <p className="text-gray-700">
              C Justice SAUJ a pour mission de rendre accessibles et compréhensibles les concepts 
              juridiques complexes. À travers des quiz interactifs et des contenus pédagogiques, 
              nous souhaitons éduquer les jeunes citoyens sur leurs droits, le fonctionnement des 
              institutions judiciaires et l'importance de la justice dans notre société.
            </p>
          </div>
          
          <div className="bg-justice-light bg-opacity-10 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-justice-primary mb-3">Contactez-nous</h3>
            <p className="text-gray-700 mb-4">
              Pour toute question ou information concernant notre application, n'hésitez pas à nous contacter:
            </p>
            <div className="flex items-center">
              <Mail className="text-justice-primary mr-2" />
              <a href="mailto:tprx-mantes-la-jolie@justice.fr" className="text-justice-primary hover:underline">
                tprx-mantes-la-jolie@justice.fr
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/" className="btn-primary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
