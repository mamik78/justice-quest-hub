
import { CustomProgress } from "@/components/ui/custom-progress";
import { Badge } from "@/components/ui/badge";

interface ProgressHeaderProps {
  category: string;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
}

export const ProgressHeader = ({
  category,
  currentIndex,
  totalQuestions,
  progress
}: ProgressHeaderProps) => {
  
  // Déterminer la couleur du badge selon la catégorie
  const getBadgeColor = () => {
    switch(category) {
      case "SAUJ":
        return "bg-blue-600";
      case "Justice":
        return "bg-green-600";
      case "Métiers":
        return "bg-amber-600";
      default:
        return "bg-justice-primary";
    }
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <Badge 
          variant="default" 
          className={`px-3 py-1 text-white ${getBadgeColor()}`}
        >
          {category}
        </Badge>
        <span className="text-sm font-medium bg-justice-light px-3 py-1 rounded-full">
          Question {currentIndex} / {totalQuestions}
        </span>
      </div>

      <CustomProgress value={progress} className="h-2 mb-4" />
    </>
  );
};
