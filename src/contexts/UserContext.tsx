
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { avatars, badges } from "../data/quizData";

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
  selectedAvatar: number;
  setSelectedAvatar: (id: number) => void;
  points: number;
  addPoints: (pts: number) => void;
  categoryScores: Record<string, number>;
  incrementCategoryScore: (category: string) => void;
  earnedBadges: string[];
  checkAndAwardBadges: () => string[];
  resetProgress: () => void;
  completedQuestions: number[];
  markQuestionCompleted: (id: number) => void;
  feedbackGiven: boolean;
  setFeedbackGiven: (value: boolean) => void;
  age: string;
  setAge: (age: string) => void;
}

const defaultUserContext: UserContextType = {
  username: "",
  setUsername: () => {},
  selectedAvatar: 1,
  setSelectedAvatar: () => {},
  points: 0,
  addPoints: () => {},
  categoryScores: { SAUJ: 0, Justice: 0, Métiers: 0 },
  incrementCategoryScore: () => {},
  earnedBadges: [],
  checkAndAwardBadges: () => [],
  resetProgress: () => {},
  completedQuestions: [],
  markQuestionCompleted: () => {},
  feedbackGiven: false,
  setFeedbackGiven: () => {},
  age: "",
  setAge: () => {}
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Récupérer les valeurs depuis le localStorage ou utiliser les valeurs par défaut
  const [username, setUsername] = useState<string>(() => {
    const saved = localStorage.getItem("username");
    return saved || "";
  });
  
  const [selectedAvatar, setSelectedAvatar] = useState<number>(() => {
    const saved = localStorage.getItem("avatar");
    return saved ? parseInt(saved) : 1;
  });
  
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem("points");
    return saved ? parseInt(saved) : 0;
  });
  
  const [categoryScores, setCategoryScores] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem("categoryScores");
    return saved ? JSON.parse(saved) : { SAUJ: 0, Justice: 0, Métiers: 0 };
  });
  
  const [earnedBadges, setEarnedBadges] = useState<string[]>(() => {
    const saved = localStorage.getItem("earnedBadges");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [completedQuestions, setCompletedQuestions] = useState<number[]>(() => {
    const saved = localStorage.getItem("completedQuestions");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(() => {
    const saved = localStorage.getItem("feedbackGiven");
    return saved ? JSON.parse(saved) : false;
  });

  const [age, setAge] = useState<string>(() => {
    const saved = localStorage.getItem("age");
    return saved || "";
  });

  // Sauvegarder les valeurs dans le localStorage quand elles changent
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  
  useEffect(() => {
    localStorage.setItem("avatar", selectedAvatar.toString());
  }, [selectedAvatar]);
  
  useEffect(() => {
    localStorage.setItem("points", points.toString());
  }, [points]);
  
  useEffect(() => {
    localStorage.setItem("categoryScores", JSON.stringify(categoryScores));
  }, [categoryScores]);
  
  useEffect(() => {
    localStorage.setItem("earnedBadges", JSON.stringify(earnedBadges));
  }, [earnedBadges]);
  
  useEffect(() => {
    localStorage.setItem("completedQuestions", JSON.stringify(completedQuestions));
  }, [completedQuestions]);
  
  useEffect(() => {
    localStorage.setItem("feedbackGiven", JSON.stringify(feedbackGiven));
  }, [feedbackGiven]);
  
  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  const addPoints = (pts: number) => {
    setPoints(current => current + pts);
  };

  const incrementCategoryScore = (category: string) => {
    setCategoryScores(current => ({
      ...current,
      [category]: (current[category] || 0) + 1
    }));
  };

  const checkAndAwardBadges = (): string[] => {
    const newBadges = badges.filter(badge => {
      // Si on a déjà ce badge, on ne le rajoute pas
      if (earnedBadges.includes(badge.id)) return false;

      // Vérifier si on a atteint le score requis pour ce badge
      if (badge.category === "Global") {
        return points >= badge.requiredScore;
      } else {
        return categoryScores[badge.category] >= badge.requiredScore;
      }
    }).map(badge => badge.id);

    if (newBadges.length > 0) {
      setEarnedBadges(current => [...current, ...newBadges]);
      return newBadges;
    }
    return [];
  };

  const resetProgress = () => {
    setPoints(0);
    setCategoryScores({ SAUJ: 0, Justice: 0, Métiers: 0 });
    setEarnedBadges([]);
    setCompletedQuestions([]);
    setFeedbackGiven(false);
    setAge("");
  };

  const markQuestionCompleted = (id: number) => {
    if (!completedQuestions.includes(id)) {
      setCompletedQuestions(current => [...current, id]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        selectedAvatar,
        setSelectedAvatar,
        points,
        addPoints,
        categoryScores,
        incrementCategoryScore,
        earnedBadges,
        checkAndAwardBadges,
        resetProgress,
        completedQuestions,
        markQuestionCompleted,
        feedbackGiven,
        setFeedbackGiven,
        age,
        setAge
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
