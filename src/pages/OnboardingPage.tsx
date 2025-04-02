
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { avatars } from "../data/quizData";

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { setUsername, selectedAvatar, setSelectedAvatar } = useUser();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (!name.trim()) {
      setError("Entre ton prénom pour continuer");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleNextStep();
    } else {
      setUsername(name);
      navigate("/quiz");
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6 animate-scale-in">
        <h2 className="text-2xl font-bold mb-4 text-justice-primary text-center">
          {step === 1 ? "Bienvenue sur C-Justice-Web!" : "Choisis ton avatar"}
        </h2>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Comment t'appelles-tu?
              </label>
              <input
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-justice-primary focus:border-justice-primary"
                placeholder="Ton prénom"
                maxLength={15}
                autoFocus
              />
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              <div className="mt-8 flex justify-center">
                <button type="button" onClick={handleNextStep} className="btn-primary w-full">
                  Continuer
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.id}
                    className={`avatar-option ${selectedAvatar === avatar.id ? "selected" : ""}`}
                    onClick={() => setSelectedAvatar(avatar.id)}
                  >
                    <img src={avatar.src} alt={avatar.alt} className="w-full h-auto" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1"
                >
                  Retour
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Commencer
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
