
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CustomProgress } from "@/components/ui/custom-progress";

interface BadgeDisplayProps {
  icon: string;
  title: string;
  description: string;
  isEarned?: boolean;
  progress?: number;
  requiredScore?: number;
}

const BadgeDisplay = ({ 
  icon, 
  title, 
  description, 
  isEarned = true,
  progress = 0,
  requiredScore = 0
}: BadgeDisplayProps) => {
  // Calculer le pourcentage de progression
  const progressPercentage = requiredScore > 0 ? Math.min(100, Math.round((progress / requiredScore) * 100)) : 0;
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`rounded-lg p-4 text-center transition-all duration-300 ${
            isEarned 
              ? "bg-justice-light shadow-md hover:shadow-lg" 
              : "bg-gray-50 hover:bg-gray-100"
          }`}>
            <div className={`text-4xl mb-2 ${!isEarned && "grayscale opacity-70"}`}>{icon}</div>
            <h3 className={`font-semibold text-sm ${isEarned ? "text-justice-primary" : "text-gray-500"}`}>
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
            
            {isEarned ? (
              <Badge 
                variant="default" 
                className="mt-2 bg-justice-primary hover:bg-justice-dark"
              >
                Obtenu
              </Badge>
            ) : (
              <div className="mt-2">
                <CustomProgress 
                  value={progressPercentage} 
                  className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden"
                  indicatorColor="bg-justice-primary/60" 
                />
                <p className="text-xs text-gray-500 mt-1">{progress}/{requiredScore} ({progressPercentage}%)</p>
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isEarned 
            ? `Badge obtenu : ${title}` 
            : `Progression: ${progress}/${requiredScore} (${progressPercentage}%)`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BadgeDisplay;
