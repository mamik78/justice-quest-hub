
import { ExternalLink } from "lucide-react";

const OfficialLinks = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Ressources officielles</h3>
      <div className="grid gap-3">
        <h4 className="font-semibold mt-2">Sources légales :</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.legifrance.gouv.fr/" target="_blank" rel="noopener noreferrer" 
               className="text-justice-primary hover:underline">
              Légifrance
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.justice.fr/" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Justice.fr
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.service-public.fr/" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Service-public.fr
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.avocat.fr/" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Avocat.fr
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.conciliateurs.fr/" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Conciliateurs.fr
            </a>
          </li>
        </ul>
        
        <h4 className="font-semibold mt-4">Services en ligne :</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.service-public.fr/particuliers/vosdroits/R14106" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Plainte en ligne
            </a>
          </li>
          <li className="flex items-center">
            <ExternalLink size={16} className="mr-2 text-justice-primary" />
            <a href="https://www.service-public.fr/particuliers/vosdroits/R12675" target="_blank" rel="noopener noreferrer"
               className="text-justice-primary hover:underline">
              Procuration de vote
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OfficialLinks;
