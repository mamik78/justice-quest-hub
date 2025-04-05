
interface JusticeAIAnswerProps {
  answer: string;
}

const JusticeAIAnswer = ({ answer }: JusticeAIAnswerProps) => {
  if (!answer) return null;
  
  return (
    <div className="mt-6 p-4 bg-justice-light rounded-lg border border-justice-primary">
      <h3 className="font-bold mb-2">Réponse:</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default JusticeAIAnswer;
