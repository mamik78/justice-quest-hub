
import { useState } from "react";
import { MessageCircle, Send, X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { getHintFromGroq } from "../services/groqService";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "./ui/separator";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{type: "user" | "bot", content: string}[]>([
    { type: "bot", content: "Bonjour ! Je suis votre assistant Justice. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  
  // Suggestions de questions
  const suggestions = [
    "Qu'est-ce que le SAUJ ?",
    "Comment porter plainte ?",
    "Quels sont les différents types de juridictions ?",
    "Quelle est la différence entre un avocat et un magistrat ?",
    "Comment se déroule un procès ?"
  ];
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      return;
    }
    
    // Add user message to chat
    setMessages(prev => [...prev, { type: "user", content: question }]);
    
    // Clear input
    setQuestion("");
    
    setIsLoading(true);
    
    try {
      // Get response from AI
      const response = await getHintFromGroq(question);
      
      // Add bot message to chat
      setMessages(prev => [...prev, { type: "bot", content: response }]);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'IA:", error);
      toast.error("Une erreur est survenue");
      setMessages(prev => [...prev, { 
        type: "bot", 
        content: "Désolé, je n'ai pas pu répondre à votre question. Veuillez réessayer plus tard." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuestion(suggestion);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="rounded-full h-14 w-14 bg-justice-primary hover:bg-justice-dark shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="text-white" size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side={isMobile ? "bottom" : "right"} className={isMobile ? "h-[70vh] rounded-t-xl pt-4" : "w-[350px]"}>
          <div className="flex items-center justify-between mb-3">
            <SheetHeader className="text-left p-0">
              <SheetTitle className="flex items-center">
                <MessageCircle className="text-justice-primary mr-2" size={20} />
                Assistant Justice
              </SheetTitle>
            </SheetHeader>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </Button>
          </div>
          
          <Separator className="mb-3" />
          
          <div className="flex flex-col h-[calc(100%-130px)]">
            <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg ${
                    message.type === "user" 
                      ? "bg-justice-light ml-4 text-gray-800" 
                      : "bg-gray-100 mr-4 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-gray-100 p-3 rounded-lg mr-4 text-gray-800">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Suggestions */}
            <div className="mb-3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Lightbulb size={14} className="mr-1" />
                <span>Suggestions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs py-1 px-2 h-auto bg-gray-50 hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.length > 25 ? `${suggestion.substring(0, 25)}...` : suggestion}
                  </Button>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-auto">
              <div className="flex items-end gap-2">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Posez votre question..."
                  className="resize-none text-sm"
                  rows={2}
                />
                <Button type="submit" disabled={isLoading || !question.trim()} size="icon" className="h-[40px] w-[40px]">
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;
