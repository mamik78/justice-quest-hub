
import { useState } from "react";
import { getHintFromGroq } from "../services/groqService";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Bot, AlertTriangle, ExternalLink, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JusticeAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("assistant");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast.error("Veuillez saisir une question");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Utiliser la fonction getHintFromGroq mais adaptée pour les questions sur la justice
      const response = await getHintFromGroq(
        question, 
        "", // pas de réponse utilisateur dans ce cas
        "" // pas de réponse correcte dans ce cas
      );
      
      setAnswer(response);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'IA:", error);
      toast.error("Une erreur est survenue lors de la communication avec l'IA");
      setAnswer("Désolé, je n'ai pas pu répondre à votre question. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  const emergencyResources = (
    <div className="space-y-4 p-4">
      <div className="bg-red-50 border border-red-300 rounded-lg p-4">
        <h3 className="font-bold text-red-700 mb-2 flex items-center">
          <AlertTriangle size={18} className="mr-2" /> Numéros d'urgence
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-red-800">
          <li><strong>3018</strong> : Violences numériques (cyberharcèlement)</li>
          <li><strong>3020</strong> : Non au harcèlement scolaire</li>
          <li><strong>119</strong> : Enfance en danger</li>
          <li><strong>17</strong> ou <strong>112</strong> : Police/Gendarmerie (situations d'urgence)</li>
          <li><strong>3919</strong> : Violences femmes info</li>
        </ul>
      </div>
      
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-bold mb-2 flex items-center">
          <Info size={18} className="mr-2 text-justice-primary" /> Définition du harcèlement scolaire
        </h3>
        <p className="text-gray-700 mb-3">
          Le harcèlement scolaire est défini juridiquement comme <strong>une violence répétée</strong> qui peut être verbale, physique ou psychologique. Il est caractérisé par trois critères :
        </p>
        <ul className="list-disc pl-5 mb-3 text-gray-700">
          <li>La <strong>volonté de nuire</strong> de l'auteur</li>
          <li>La <strong>répétition</strong> des actes sur une longue durée</li>
          <li>Une <strong>relation de pouvoir déséquilibrée</strong> entre auteur et victime</li>
        </ul>
        <div className="text-sm bg-justice-light p-3 rounded-md">
          <p className="font-semibold mb-1">Base légale :</p>
          <p>Article 222-33-2-3 du Code pénal : délit puni jusqu'à 10 ans d'emprisonnement et 150 000€ d'amende lorsqu'il a conduit au suicide ou à une tentative de suicide.</p>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-bold mb-2">Comment porter plainte ?</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li><strong>Rassemblez les preuves</strong> : messages, photos, témoignages, certificats médicaux</li>
          <li><strong>Signalez</strong> d'abord à l'établissement scolaire (professeur principal, CPE, direction)</li>
          <li>Contactez la <strong>police ou gendarmerie</strong> pour déposer une plainte</li>
          <li>Vous pouvez être accompagné d'un <strong>adulte de confiance</strong> (parent ou autre)</li>
          <li>Les mineurs peuvent porter plainte <strong>sans l'accord de leurs parents</strong></li>
        </ol>
        <div className="mt-3 text-sm">
          <p className="italic">Bon à savoir : le délai de prescription est de 6 ans après les faits pour les mineurs.</p>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-bold mb-2">Ressources utiles</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.nonauharcelement.education.gouv.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-justice-primary hover:underline"
            >
              Programme "Non au harcèlement"
              <ExternalLink size={14} className="ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://e-enfance.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-justice-primary hover:underline"
            >
              Association e-Enfance (cyberharcèlement)
              <ExternalLink size={14} className="ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.service-public.fr/particuliers/vosdroits/F31985" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-justice-primary hover:underline"
            >
              Service-public.fr : Harcèlement scolaire
              <ExternalLink size={14} className="ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
        <div className="flex items-center">
          <Bot size={28} className="mr-3" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Assistant Justice</h2>
            <p className="text-justice-light">Posez vos questions sur la justice et l'organisation judiciaire</p>
          </div>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6 pt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="assistant">Assistant Justice</TabsTrigger>
            <TabsTrigger value="harcelement">Harcèlement scolaire</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="assistant" className="p-6 pt-4">
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mb-4 flex items-start">
            <AlertTriangle size={20} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Attention :</strong> Cet assistant est une intelligence artificielle et peut faire des erreurs. 
              Il ne se substitue pas à un 
              <a href="https://www.avocat.fr/" target="_blank" rel="noopener noreferrer" className="text-justice-primary font-semibold hover:underline mx-1">avocat</a> ni à un 
              <a href="https://www.conciliateurs.fr/" target="_blank" rel="noopener noreferrer" className="text-justice-primary font-semibold hover:underline mx-1">conciliateur</a>. 
              Pour des informations officielles, consultez uniquement les sources légales comme 
              <a href="https://www.legifrance.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-justice-primary font-semibold hover:underline mx-1">Légifrance</a>, 
              <a href="https://www.justice.fr/" target="_blank" rel="noopener noreferrer" className="text-justice-primary font-semibold hover:underline mx-1">Justice.fr</a> ou 
              <a href="https://www.service-public.fr/" target="_blank" rel="noopener noreferrer" className="text-justice-primary font-semibold hover:underline mx-1">Service-public.fr</a>.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Exemple: Qu'est-ce que le SAUJ? Comment fonctionne un tribunal? Quels sont les métiers de la justice?"
                className="min-h-[100px] w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit"
                className="bg-justice-primary hover:bg-justice-dark text-white"
                disabled={isLoading}
              >
                {isLoading ? "Réflexion en cours..." : "Poser ma question"}
              </Button>
            </div>
          </form>
          
          {answer && (
            <div className="mt-6 p-4 bg-justice-light rounded-lg border border-justice-primary">
              <h3 className="font-bold mb-2">Réponse:</h3>
              <p className="text-gray-700">{answer}</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="harcelement">
          {emergencyResources}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JusticeAI;
