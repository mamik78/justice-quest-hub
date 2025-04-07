import { Scroll, BookOpen, Scale, Gavel } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const HistoirePage = () => {
  // État pour vérifier si les images sont chargées
  const [imagesLoaded, setImagesLoaded] = useState({
    grece: false,
    rome: false,
    napoleon: false,
    constitution: false
  });

  // Fonction pour gérer le chargement d'image
  const handleImageLoad = (image: keyof typeof imagesLoaded) => {
    setImagesLoaded(prev => ({
      ...prev,
      [image]: true
    }));
  };

  // Préchargement des images
  useEffect(() => {
    const preloadImage = (src: string, key: keyof typeof imagesLoaded) => {
      const img = new Image();
      img.src = src;
      img.onload = () => handleImageLoad(key);
    };

    preloadImage("/images/parthenon-athenes.jpg", "grece");
    preloadImage("/images/louve-romaine-capitole.jpg", "rome");
    preloadImage("/images/napoleon-code-david.jpg", "napoleon");
    preloadImage("/images/constitution-francaise.jpg", "constitution");
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Scroll className="h-8 w-8 text-justice-primary" />
          <h1 className="text-3xl font-bold text-justice-primary">Histoire de la Justice</h1>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          Découvrez les grandes étapes de l'évolution de la justice à travers les âges, 
          des origines antiques jusqu'aux réformes contemporaines.
        </p>

        {/* Frise chronologique simplifiée */}
        <div className="relative py-8 overflow-x-auto">
          <div className="absolute h-1 bg-gray-300 top-16 left-0 right-0 z-0"></div>
          <div className="relative z-10 flex justify-between min-w-[800px]">
            {timelinePoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center w-40">
                <div className="w-6 h-6 rounded-full bg-justice-primary"></div>
                <div className="text-sm font-bold mt-2">{point.era}</div>
                <div className="text-xs text-gray-600">{point.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sections par époque */}
      <div className="space-y-12">
        <HistorySection 
          title="Les origines démocratiques : la Grèce antique" 
          period="VIe - IVe siècle av. J.-C."
          icon={<Scale className="h-8 w-8" />}
          image="/images/parthenon-athenes.jpg"
          isLoaded={imagesLoaded.grece}
          onImageLoad={() => handleImageLoad("grece")}
          fallbackImage="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb"
        >
          <p className="mb-4">
            La démocratie athénienne institue les premiers tribunaux populaires connus sous le nom d'Héliée. 
            Ces tribunaux, composés de citoyens tirés au sort, constituent l'une des premières formes de justice participative.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Contributions majeures</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Solon (638-558 av. J.-C.) : Réformes qui posent les bases d'une justice plus égalitaire</li>
            <li>Clisthène (570-508 av. J.-C.) : Renforcement du pouvoir judiciaire des citoyens</li>
            <li>Principe d'isonomia : L'égalité de tous devant la loi</li>
          </ul>
          <p className="italic text-sm mt-4 text-gray-600">
            "La démocratie, c'est le gouvernement du peuple, par le peuple, pour le peuple" - Ces principes démocratiques athéniens influenceront des siècles plus tard les systèmes judiciaires modernes.
          </p>
        </HistorySection>

        <HistorySection 
          title="L'héritage romain : les fondements du droit civil" 
          period="450 av. J.-C. - VIe siècle"
          icon={<BookOpen className="h-8 w-8" />}
          image="/images/louve-romaine-capitole.jpg"
          isLoaded={imagesLoaded.rome}
          onImageLoad={() => handleImageLoad("rome")}
          fallbackImage="https://images.unsplash.com/photo-1552832230-c0197dd311b5"
        >
          <p className="mb-4">
            Le droit romain a posé les bases conceptuelles et techniques du droit civil que nous connaissons aujourd'hui. 
            Il s'est développé sur plus de dix siècles et reste l'un des piliers fondamentaux des systèmes juridiques occidentaux.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Contributions fondamentales</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>La Loi des Douze Tables (451-449 av. J.-C.) : Premier texte juridique écrit codifiant le droit romain</li>
            <li>Corpus Juris Civilis de Justinien (529-534) : Compilation et codification monumentale du droit romain</li>
            <li>Distinction entre droit public et droit privé</li>
            <li>Élaboration de concepts juridiques toujours utilisés : contrat, propriété, responsabilité</li>
          </ul>
        </HistorySection>

        <HistorySection 
          title="Le Code Napoléon : la naissance du droit moderne" 
          period="1804-1810"
          icon={<Gavel className="h-8 w-8" />}
          image="/images/napoleon-code-david.jpg"
          isLoaded={imagesLoaded.napoleon}
          onImageLoad={() => handleImageLoad("napoleon")}
          fallbackImage="https://images.unsplash.com/photo-1589391886645-d51941baf7fb"
          imageReference="Jacques-Louis David, 'Napoléon dans son cabinet de travail', 1812"
        >
          <p className="mb-4">
            Le Code civil de 1804, aussi appelé Code Napoléon, marque une étape décisive dans l'histoire du droit français et européen.
            Il unifie le droit civil français après la diversité coutumière de l'Ancien Régime.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Le Code Civil de 1804</h3>
          <p className="mb-4">
            Divisé en trois livres (personnes, biens, modes d'acquisition de la propriété), le Code Civil consacre les principes de :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Liberté contractuelle</li>
            <li>Droit de propriété comme droit absolu</li>
            <li>Responsabilité civile fondée sur la faute</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Le Code Pénal de 1810</h3>
          <p className="mb-4">
            Complément du Code civil, le Code pénal napoléonien établit une classification des infractions toujours en vigueur :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contraventions : infractions légères passibles d'amendes</li>
            <li>Délits : infractions moyennes jugées par les tribunaux correctionnels</li>
            <li>Crimes : infractions graves jugées par les cours d'assises</li>
          </ul>
          
          <p className="mt-4">
            L'influence du Code Napoléon s'étend bien au-delà des frontières françaises : plus de 70 pays 
            dans le monde ont adopté des systèmes juridiques inspirés du modèle français.
          </p>
        </HistorySection>

        <HistorySection 
          title="La justice contemporaine" 
          period="1958 à nos jours"
          icon={<Scale className="h-8 w-8" />}
          image="/images/constitution-francaise.jpg"
          isLoaded={imagesLoaded.constitution}
          onImageLoad={() => handleImageLoad("constitution")}
          fallbackImage="https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
        >
          <p className="mb-4">
            La période contemporaine est marquée par la constitutionnalisation du droit et l'influence croissante 
            du droit européen et international.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Évolutions majeures</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Création du Conseil constitutionnel (1958)</li>
            <li>Convention Européenne des Droits de l'Homme (1950, ratifiée par la France en 1974)</li>
            <li>Abolition de la peine de mort (1981)</li>
            <li>Réforme de la carte judiciaire (2007-2010)</li>
            <li>Question Prioritaire de Constitutionnalité (2010)</li>
            <li>Réforme de la justice (2018-2022) : transformation numérique, réorganisation des juridictions</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">La justice du XXIe siècle</h3>
          <p>
            Aujourd'hui, la justice française fait face à de nouveaux défis : transformation numérique,
            justice prédictive, médiation et modes alternatifs de résolution des conflits, tout en préservant
            les garanties fondamentales d'un procès équitable et l'accès au droit pour tous.
          </p>
        </HistorySection>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Pour tester vos connaissances sur l'histoire de la justice et les principes juridiques,
          n'hésitez pas à participer à notre quiz interactif.
        </p>
        <button onClick={() => window.location.href = '/quiz'} className="py-2 px-4 bg-justice-primary text-white rounded-lg hover:bg-justice-dark transition-colors mt-4">
          Découvrir le quiz
        </button>
      </div>
    </div>
  );
};

// Composant pour les sections historiques
const HistorySection = ({ 
  title, 
  period, 
  children,
  icon,
  image,
  isLoaded,
  onImageLoad,
  fallbackImage,
  imageReference
}: { 
  title: string; 
  period: string; 
  children: React.ReactNode;
  icon: React.ReactNode;
  image?: string;
  isLoaded?: boolean;
  onImageLoad?: () => void;
  fallbackImage?: string;
  imageReference?: string;
}) => {
  // Utiliser l'image de secours si l'image principale n'est pas chargée
  const imageSrc = isLoaded ? image : fallbackImage;
  
  return (
    <section className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-justice-primary">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{period}</p>
        </div>
      </div>
      <Separator className="my-4" />
      
      {imageSrc && (
        <div className="mb-6">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-64 object-cover rounded-lg shadow-sm"
            onLoad={onImageLoad}
            onError={(e) => {
              // En cas d'erreur, utiliser l'image de secours
              const target = e.target as HTMLImageElement;
              if (fallbackImage && target.src !== fallbackImage) {
                target.src = fallbackImage;
              }
            }}
          />
          {imageReference && (
            <p className="text-xs text-gray-500 mt-1 italic text-right">{imageReference}</p>
          )}
        </div>
      )}
      
      <div className="prose max-w-none">
        {children}
      </div>
    </section>
  );
};

// Points de la frise chronologique
const timelinePoints = [
  { era: "Grèce antique", year: "Ve siècle av. J.-C." },
  { era: "Rome", year: "450 av. J.-C. - VIe siècle" },
  { era: "Moyen Âge", year: "Ve - XVe siècle" },
  { era: "Ancien Régime", year: "XVIe - XVIIIe siècle" },
  { era: "Code Napoléon", year: "1804-1810" },
  { era: "XXe siècle", year: "1900-1999" },
  { era: "Contemporain", year: "2000 à nos jours" }
];

export default HistoirePage;
