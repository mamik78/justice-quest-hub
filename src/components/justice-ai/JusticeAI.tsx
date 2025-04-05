
import { useState } from "react";
import { toast } from "sonner";
import { getHintFromGroq } from "../../services/groqService";
import JusticeAIHeader from "./JusticeAIHeader";
import JusticeAIDisclaimerBox from "./JusticeAIDisclaimerBox";
import JusticeAIForm from "./JusticeAIForm";
import JusticeAIAnswer from "./JusticeAIAnswer";

const JusticeAI = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (questionText: string) => {
    setIsLoading(true);
    
    try {
      const response = await getHintFromGroq(
        questionText, 
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
      <JusticeAIHeader />
      
      <div className="p-6">
        <JusticeAIDisclaimerBox />
        <JusticeAIForm onSubmit={handleSubmit} isLoading={isLoading} />
        <JusticeAIAnswer answer={answer} />
      </div>
    </div>
  );
};

export default JusticeAI;
