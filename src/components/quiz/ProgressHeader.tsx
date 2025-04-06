
import { Progress } from "@/components/ui/progress";

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
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <span className="badge bg-justice-primary text-white px-2 py-1 rounded">
          {category}
        </span>
        <span className="text-sm text-gray-500">
          Question {currentIndex} / {totalQuestions}
        </span>
      </div>

      <Progress value={progress} className="h-1 mb-4" />
    </>
  );
};
