
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface JusticeAIFormProps {
  onSubmit: (question: string) => Promise<void>;
  isLoading: boolean;
}

const JusticeAIForm = ({ onSubmit, isLoading }: JusticeAIFormProps) => {
  const [question, setQuestion] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    await onSubmit(question);
    setQuestion("");
  };
  
  return (
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
          disabled={isLoading || !question.trim()}
        >
          {isLoading ? "Réflexion en cours..." : "Poser ma question"}
        </Button>
      </div>
    </form>
  );
};

export default JusticeAIForm;
