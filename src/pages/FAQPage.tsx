
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, BookOpen, Scale, Gavel, Landmark, Vote, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Questions & Informations Juridiques</h1>
          </div>
          <p className="text-justice-light mt-2">
            Comprendre les concepts juridiques essentiels
          </p>
        </div>
        
        <div className="p-6">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="legal">Mentions Légales</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq">
              <p className="text-gray-700 mb-6">
                Cette page regroupe des explications simples sur les concepts fondamentaux du droit français
                et les acteurs du système judiciaire. Pour toute question complémentaire, n'hésitez pas à
                utiliser notre assistant juridique.
              </p>
              
              <div className="space-y-8">
                {faqSections.map((section) => (
                  <div key={section.title} className="bg-justice-gray rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <section.icon className="h-5 w-5 text-justice-primary" />
                      <h2 className="text-xl font-bold text-justice-primary">{section.title}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${section.title}-${index}`}>
                          <AccordionTrigger className="text-left font-medium">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
                <h2 className="text-xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
                <p className="mb-4">
                  Notre assistant juridique est disponible pour répondre à toutes vos questions spécifiques.
                  Cliquez simplement sur l'icône de chat en bas à droite de votre écran.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => {
                      // Open chatbot logic could be implemented here
                      const event = new CustomEvent('open-chatbot');
                      window.dispatchEvent(event);
                    }}
                    className="btn-primary"
                  >
                    Consulter l'assistant
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="legal">
              <div className="bg-justice-gray rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-justice-primary" />
                  <h2 className="text-xl font-bold text-justice-primary">Mentions Légales</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Éditeur du site</h3>
                    <p className="text-gray-700">
                      Le site C-Justice-SAUJ est édité par le Service d'Accueil Unique du Justiciable
                      du Tribunal Judiciaire de Mantes-la-Jolie, organisme public.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Adresse : 20 avenue de la République, 78200 Mantes-la-Jolie<br />
                      Téléphone : 01.30.98.10.10<br />
                      Email : tprx-mantes-la-jolie@justice.fr
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Directeur de publication</h3>
                    <p className="text-gray-700">
                      Direction des services judiciaires du ministère de la Justice
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hébergement</h3>
                    <p className="text-gray-700">
                      Ce site est hébergé par Lovable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Protection des données personnelles</h3>
                    <p className="text-gray-700">
                      Les informations collectées via les formulaires sont destinées uniquement à
                      faciliter la prise de contact avec les services judiciaires appropriés.
                      Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit
                      d'accès, de rectification, et de suppression de vos données.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Pour exercer ces droits, vous pouvez contacter : tprx-mantes-la-jolie@justice.fr
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Propriété intellectuelle</h3>
                    <p className="text-gray-700">
                      L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le
                      droit d'auteur. Toute reproduction ou représentation totale ou partielle de ce site
                      par quelque procédé que ce soit, sans autorisation expresse, est interdite.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cookies</h3>
                    <p className="text-gray-700">
                      Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
                      Ces cookies ne collectent pas de données à des fins publicitaires ou de suivi
                      comportemental.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const faqSections = [
  {
    title: "Les Institutions",
    icon: Landmark,
    questions: [
      {
        question: "Qu'est-ce que le législateur ?",
        answer: (
          <div>
            <p>Le législateur désigne l'institution qui a le pouvoir de faire et voter les lois en France. Il est composé principalement de deux chambres :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>L'Assemblée nationale (577 députés élus pour 5 ans)</li>
              <li>Le Sénat (348 sénateurs élus pour 6 ans)</li>
            </ul>
            <p className="mt-2">Le Parlement (Assemblée nationale + Sénat) vote les lois, contrôle l'action du Gouvernement et évalue les politiques publiques.</p>
          </div>
        )
      },
      {
        question: "Comment fonctionne l'Assemblée nationale ?",
        answer: (
          <div>
            <p>L'Assemblée nationale est la chambre basse du Parlement français. Elle est composée de 577 députés élus au suffrage universel direct pour un mandat de 5 ans.</p>
            <p className="mt-2">Son rôle principal est de :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Voter les lois</li>
              <li>Contrôler l'action du gouvernement</li>
              <li>Évaluer les politiques publiques</li>
            </ul>
            <p className="mt-2">En cas de désaccord avec le Sénat sur un texte de loi, l'Assemblée nationale peut avoir le dernier mot, ce qui lui confère un pouvoir législatif plus important.</p>
          </div>
        )
      },
      {
        question: "Quel est le rôle du Sénat ?",
        answer: (
          <div>
            <p>Le Sénat est la chambre haute du Parlement français. Il est composé de 348 sénateurs élus au suffrage universel indirect par un collège électoral pour un mandat de 6 ans.</p>
            <p className="mt-2">Le Sénat assure :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>La représentation des collectivités territoriales</li>
              <li>L'examen et le vote des lois</li>
              <li>Le contrôle de l'action du gouvernement</li>
            </ul>
            <p className="mt-2">Le Sénat est renouvelé par moitié tous les 3 ans et ne peut pas être dissous, ce qui assure une continuité institutionnelle.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Le Système Judiciaire",
    icon: Scale,
    questions: [
      {
        question: "Quelle est la différence entre l'ordre judiciaire et l'ordre administratif ?",
        answer: (
          <div>
            <p>Le système judiciaire français est divisé en deux ordres distincts :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>L'ordre judiciaire :</strong> traite les litiges entre personnes privées (particuliers, entreprises) et les infractions pénales. Il comprend les tribunaux judiciaires, cours d'appel et la Cour de cassation.</li>
              <li><strong>L'ordre administratif :</strong> juge les litiges entre les citoyens et l'administration publique. Il comprend les tribunaux administratifs, cours administratives d'appel et le Conseil d'État.</li>
            </ul>
            <p className="mt-2">Cette séparation, unique à la France, est appelée dualisme juridictionnel.</p>
          </div>
        )
      },
      {
        question: "Comment fonctionne un procès pénal ?",
        answer: (
          <div>
            <p>Un procès pénal se déroule en plusieurs étapes :</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li><strong>Enquête préliminaire :</strong> menée par la police ou la gendarmerie</li>
              <li><strong>Instruction :</strong> un juge d'instruction recueille les preuves (pour les affaires complexes)</li>
              <li><strong>Jugement :</strong> l'affaire est examinée par un tribunal</li>
              <li><strong>Délibéré et verdict :</strong> les juges délibèrent et prononcent la décision</li>
              <li><strong>Éventuels recours :</strong> appel, pourvoi en cassation</li>
            </ol>
            <p className="mt-2">La juridiction varie selon la gravité de l'infraction : tribunal de police pour les contraventions, tribunal correctionnel pour les délits, cour d'assises pour les crimes.</p>
          </div>
        )
      },
      {
        question: "Qu'est-ce que l'appel ?",
        answer: (
          <div>
            <p>L'appel est un recours qui permet de contester une décision de justice rendue en première instance. C'est un droit fondamental qui permet d'obtenir un second examen de l'affaire par une juridiction supérieure.</p>
            <p className="mt-2">Caractéristiques de l'appel :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Il doit être formé dans un délai précis (généralement un mois après la notification du jugement)</li>
              <li>Il est jugé par une cour d'appel</li>
              <li>Il permet un réexamen complet de l'affaire, tant sur les faits que sur les points de droit</li>
              <li>La décision rendue par la cour d'appel remplace celle de première instance</li>
            </ul>
            <p className="mt-2">L'appel est un principe essentiel qui garantit le droit à un procès équitable en permettant la correction d'éventuelles erreurs.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Citoyenneté et Droits",
    icon: Vote,
    questions: [
      {
        question: "Pourquoi le vote est-il important ?",
        answer: (
          <div>
            <p>Le vote est un acte citoyen fondamental dans une démocratie pour plusieurs raisons :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Il permet aux citoyens de choisir leurs représentants et d'influencer les politiques publiques</li>
              <li>C'est l'expression concrète du principe de souveraineté populaire ("le pouvoir appartient au peuple")</li>
              <li>Il garantit la légitimité du pouvoir politique</li>
              <li>C'est un droit conquis progressivement au cours de l'histoire</li>
            </ul>
            <p className="mt-2">En France, le droit de vote est accordé à tous les citoyens français majeurs. Bien que le vote ne soit pas obligatoire, il est considéré comme un devoir civique essentiel.</p>
          </div>
        )
      },
      {
        question: "Quels sont les principes fondamentaux de la justice ?",
        answer: (
          <div>
            <p>La justice repose sur plusieurs principes fondamentaux :</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>L'égalité devant la loi :</strong> tous les citoyens sont soumis aux mêmes lois</li>
              <li><strong>L'indépendance de la justice :</strong> les juges sont indépendants du pouvoir politique</li>
              <li><strong>La présomption d'innocence :</strong> toute personne est présumée innocente jusqu'à ce que sa culpabilité soit établie</li>
              <li><strong>Le droit à un procès équitable :</strong> accès à un tribunal impartial, droit à la défense, jugement dans un délai raisonnable</li>
              <li><strong>La non-rétroactivité des lois pénales :</strong> on ne peut être condamné pour une action qui n'était pas interdite au moment des faits</li>
            </ul>
            <p className="mt-2">Ces principes sont inscrits dans la Constitution française, la Déclaration des Droits de l'Homme et du Citoyen, et la Convention Européenne des Droits de l'Homme.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Glossaire Juridique",
    icon: BookOpen,
    questions: [
      {
        question: "Qu'est-ce que le SAUJ ?",
        answer: (
          <div>
            <p>Le SAUJ (Service d'Accueil Unique du Justiciable) est un guichet d'accueil présent dans chaque tribunal judiciaire. Il a été créé pour simplifier les démarches des citoyens.</p>
            <p className="mt-2">Le SAUJ permet de :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Obtenir des informations sur les procédures</li>
              <li>Suivre l'avancement de son affaire</li>
              <li>Retirer certains documents et formulaires</li>
              <li>Être orienté vers le bon interlocuteur</li>
            </ul>
            <p className="mt-2">Le SAUJ est un service de proximité qui rend la justice plus accessible à tous les citoyens.</p>
          </div>
        )
      },
      {
        question: "Quelle est la différence entre un avocat et un magistrat ?",
        answer: (
          <div>
            <p>Les avocats et les magistrats sont deux professions juridiques distinctes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>L'avocat :</strong> est un professionnel libéral qui conseille et défend les intérêts de ses clients. Il représente les parties lors des procédures judiciaires. Il prête serment et est soumis à une déontologie stricte.</li>
              <li><strong>Le magistrat :</strong> est un agent public qui rend la justice au nom de l'État. Il existe deux types de magistrats :
                <ul className="list-disc pl-5 mt-1">
                  <li>Les magistrats du siège (juges) : rendent des décisions de justice</li>
                  <li>Les magistrats du parquet (procureurs) : représentent les intérêts de la société</li>
                </ul>
              </li>
            </ul>
            <p className="mt-2">Contrairement aux avocats, les magistrats sont recrutés par concours et formés à l'École Nationale de la Magistrature (ENM).</p>
          </div>
        )
      }
    ]
  }
];

export default FAQPage;
