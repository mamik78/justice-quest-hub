
import { AlertTriangle } from "lucide-react";

const JusticeAIDisclaimerBox = () => {
  return (
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
  );
};

export default JusticeAIDisclaimerBox;
