
import React, { useState } from "react";
import JusticeAIHeader from "./JusticeAIHeader";
import JusticeAIDisclaimerBox from "./JusticeAIDisclaimerBox";
import JusticeAIForm from "./JusticeAIForm";
import JusticeAIAnswer from "./JusticeAIAnswer";

const JusticeAI: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (submittedQuestion: string) => {
    if (!submittedQuestion.trim()) return;
    
    setIsLoading(true);
    setQuestion(submittedQuestion);
    
    try {
      // Simulation d'une réponse de l'IA (à remplacer par un vrai appel API)
      setTimeout(() => {
        const responses = [
          "Le Service d'Accueil Unique du Justiciable (SAUJ) est un guichet d'accueil présent dans les tribunaux judiciaires. Il permet aux citoyens d'obtenir des informations sur leurs droits et leurs démarches judiciaires.",
          "Le harcèlement est sanctionné par la loi française. Selon le Code pénal, le harcèlement moral peut être puni de 2 ans d'emprisonnement et 30 000€ d'amende. N'hésitez pas à consulter notre page dédiée au harcèlement pour plus d'informations.",
          "Pour déposer une plainte, vous pouvez vous rendre dans n'importe quel commissariat de police ou brigade de gendarmerie. Un officier de police judiciaire recueillera votre témoignage et les éléments de preuve dont vous disposez.",
          "La justice des mineurs est une juridiction spécialisée qui traite des infractions commises par des personnes de moins de 18 ans. Elle privilégie les mesures éducatives à la répression."
        ];
        
        // Choix aléatoire d'une réponse
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setAnswer(randomResponse);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      setAnswer("Désolé, une erreur s'est produite lors du traitement de votre question.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <JusticeAIHeader />
      <JusticeAIDisclaimerBox />
      <JusticeAIForm 
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <JusticeAIAnswer answer={answer} />
    </div>
  );
};

export default JusticeAI;
