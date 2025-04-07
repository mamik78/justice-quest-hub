
import { useState, useEffect } from "react";
import { MessageCircle, Send, X, Lightbulb, Maximize2, Minimize2, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { getHintFromGroq } from "../services/groqService";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "./ui/separator";
import { useUser } from "../contexts/UserContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { avatars } from "../data/avatars";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{type: "user" | "bot", content: string}[]>([
    { type: "bot", content: "Bonjour ! Je suis votre assistant Justice. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const { username, selectedAvatar } = useUser();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSuggestionSet, setCurrentSuggestionSet] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  // Ensembles de suggestions pour rotation
  const suggestionSets = [
    [
      "Qu'est-ce que le SAUJ ?",
      "Comment porter plainte ?",
      "Quels sont les différents types de juridictions ?",
      "Quelle est la différence entre un avocat et un magistrat ?",
      "Comment se déroule un procès ?"
    ],
    [
      "Qu'est-ce qu'un juge d'instruction ?",
      "Comment fonctionne la cour d'assises ?",
      "Quels sont mes droits en tant que victime ?",
      "Comment devenir magistrat ?",
      "Qu'est-ce qu'un greffier ?"
    ],
    [
      "Comment déposer un recours ?",
      "Qu'est-ce que l'aide juridictionnelle ?",
      "Comment contacter un tribunal ?",
      "Quelle différence entre civil et pénal ?",
      "Comment se passe une médiation ?"
    ],
    [
      "Comment lutter contre le harcèlement scolaire ?",
      "Quelles sont les étapes d'une procédure civile ?",
      "Comment s'organise la hiérarchie judiciaire ?",
      "Quelle est l'origine du Code Civil ?",
      "Comment obtenir un casier judiciaire ?"
    ],
    [
      "Quand et pourquoi a été créé le SAUJ ?",
      "Comment a évolué le droit français depuis l'Antiquité ?",
      "Quelles sont les innovations de la justice numérique ?",
      "Comment déposer une main courante ?",
      "Qui peut bénéficier de l'aide juridictionnelle ?"
    ]
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
      
      // Rotate to next suggestion set after receiving a response
      setCurrentSuggestionSet((prev) => (prev + 1) % suggestionSets.length);
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
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    
    // Si on était déjà en plein écran, on reste en plein écran
    if (isFullscreen) {
      return;
    }
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // En mode plein écran, on est automatiquement "expanded"
    if (!isFullscreen) {
      setIsExpanded(true);
    }
  };
  
  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  // Récupérer l'avatar actuel
  const currentAvatar = avatars.find(avatar => avatar.id === selectedAvatar);
  const avatarSrc = currentAvatar ? currentAvatar.src : "";
  
  // Calculer les classes pour la taille du chatbot
  const sizeClasses = isFullscreen 
    ? "w-[95vw] max-w-[1200px] h-[90vh]" 
    : isExpanded 
      ? "w-[80vw] max-w-[800px] h-[80vh]" 
      : "w-[380px]";

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
        <SheetContent 
          side={isMobile ? "bottom" : "right"} 
          className={`${isMobile ? "h-[70vh] rounded-t-xl pt-4" : ""} ${sizeClasses}`}
        >
          <div className="flex items-center justify-between mb-3">
            <SheetHeader className="text-left p-0 flex items-center">
              <div className="mr-3">
                <Avatar className="h-10 w-10 border-2 border-justice-primary">
                  <AvatarImage src={avatarSrc} alt={username || "Utilisateur"} />
                  <AvatarFallback className="bg-justice-light text-justice-primary">
                    {username ? username.substring(0, 2).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <SheetTitle className="flex items-center">
                Assistant Justice
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 mr-2" 
                onClick={toggleExpand}
                title={isExpanded ? "Réduire" : "Agrandir"}
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 mr-2" 
                onClick={toggleFullscreen}
                title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0" 
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>
          </div>
          
          <Separator className="mb-3" />
          
          <div className="flex flex-col h-[calc(100%-130px)]">
            <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg ${
                    message.type === "user" 
                      ? "bg-justice-light ml-4 text-gray-800 font-medium" 
                      : "bg-justice-primary bg-opacity-10 mr-4 text-gray-900 font-medium border border-justice-primary border-opacity-20"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-justice-primary bg-opacity-10 p-3 rounded-lg mr-4 text-gray-900 border border-justice-primary border-opacity-20">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 bg-justice-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-justice-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-justice-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Suggestions avec contrôle de visibilité */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm text-gray-700 mb-2 font-medium">
                <div className="flex items-center">
                  <Lightbulb size={14} className="mr-1 text-justice-primary" />
                  <span>Suggestions:</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={toggleSuggestions}
                >
                  {showSuggestions ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </Button>
              </div>
              
              {showSuggestions && (
                <div className="flex flex-wrap gap-2 max-h-[100px] overflow-y-auto">
                  {suggestionSets[currentSuggestionSet].map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs py-1 px-2 h-auto bg-justice-light hover:bg-justice-light/80 text-justice-dark border-justice-primary/30"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="mt-auto">
              <div className="flex items-end gap-2">
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Posez votre question..."
                  className="resize-none text-sm border-justice-primary/30 focus:border-justice-primary"
                  rows={2}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !question.trim()} 
                  size="icon" 
                  className="h-[40px] w-[40px] bg-justice-primary hover:bg-justice-dark"
                >
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
