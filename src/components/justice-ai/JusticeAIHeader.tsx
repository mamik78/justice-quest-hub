
import { Bot } from "lucide-react";

const JusticeAIHeader = () => {
  return (
    <div className="bg-gradient-to-r from-justice-primary to-justice-dark p-6 text-white">
      <div className="flex items-center">
        <Bot size={28} className="mr-3" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Assistant Justice</h2>
          <p className="text-justice-light">Posez vos questions sur la justice et l'organisation judiciaire</p>
        </div>
      </div>
    </div>
  );
};

export default JusticeAIHeader;
