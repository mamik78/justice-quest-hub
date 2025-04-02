
import { useState } from "react";
import { getHintFromGroq } from "../services/groqService";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const JusticeAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Assistant Justice</h2>
        <p className="text-justice-light">Posez vos questions sur la justice et l'organisation judiciaire</p>
      </div>
      
      <div className="p-6">
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
      </div>
    </div>
  );
};

export default JusticeAI;
