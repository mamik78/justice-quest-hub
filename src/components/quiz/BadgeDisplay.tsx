
import { Badge } from "@/components/ui/badge";

interface BadgeDisplayProps {
  icon: string;
  title: string;
  description: string;
  isEarned?: boolean;
}

const BadgeDisplay = ({ icon, title, description, isEarned = true }: BadgeDisplayProps) => {
  return (
    <div className={`rounded-lg p-4 text-center transition-all duration-300 ${
      isEarned 
        ? "bg-justice-light shadow-md hover:shadow-lg" 
        : "bg-gray-50 opacity-70"
    }`}>
      <div className={`text-4xl mb-2 ${!isEarned && "grayscale"}`}>{icon}</div>
      <h3 className={`font-semibold text-sm ${isEarned ? "text-justice-primary" : "text-gray-500"}`}>
        {title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
      {isEarned && (
        <Badge 
          variant="default" 
          className="mt-2 bg-justice-primary hover:bg-justice-dark"
        >
          Obtenu
        </Badge>
      )}
    </div>
  );
};

export default BadgeDisplay;
