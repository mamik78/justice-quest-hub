
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "SAUJ",
    definition: "Service d'Accueil Unique du Justiciable - Guichet d'accueil dans les tribunaux pour faciliter les démarches des citoyens."
  },
  {
    term: "Code civil",
    definition: "Ensemble des lois qui définissent le droit privé français (famille, propriété, contrats, etc.)."
  },
  {
    term: "Code pénal",
    definition: "Recueil de textes juridiques définissant les infractions et les peines applicables."
  },
  {
    term: "Audience",
    definition: "Séance durant laquelle une juridiction examine une affaire."
  },
  {
    term: "Magistrat",
    definition: "Personne qui, au nom de l'État, est investie d'un pouvoir juridictionnel (juge) ou qui représente l'intérêt public (procureur)."
  },
  {
    term: "Avocat",
    definition: "Juriste dont la mission est de conseiller, de représenter et de défendre ses clients devant la justice."
  },
  {
    term: "Greffier",
    definition: "Fonctionnaire qui assiste les juges et assure l'authenticité des actes juridictionnels."
  },
  {
    term: "Délit",
    definition: "Infraction pénale de gravité moyenne, jugée par le tribunal correctionnel et passible d'emprisonnement jusqu'à 10 ans."
  },
  {
    term: "Crime",
    definition: "Infraction pénale la plus grave, jugée par la cour d'assises et passible de réclusion criminelle."
  },
  {
    term: "Contravention",
    definition: "Infraction pénale la moins grave, jugée par le tribunal de police et passible d'amende."
  },
  {
    term: "Jurisprudence",
    definition: "Ensemble des décisions de justice qui interprètent la loi et qui servent de référence pour les affaires similaires."
  },
  {
    term: "Appel",
    definition: "Voie de recours permettant de faire rejuger une affaire par une juridiction supérieure."
  }
];

interface GlossaryTermProps {
  term: string;
  children: React.ReactNode;
}

export const GlossaryTerm = ({ term, children }: GlossaryTermProps) => {
  const glossaryEntry = glossaryTerms.find(entry => entry.term.toLowerCase() === term.toLowerCase());
  
  if (!glossaryEntry) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="border-b border-dotted border-justice-primary cursor-help">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-white p-3 shadow-lg rounded-md border text-sm">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-justice-primary mt-0.5" />
            <div>
              <div className="font-bold">{glossaryEntry.term}</div>
              <div className="text-gray-700">{glossaryEntry.definition}</div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GlossaryTerm;
