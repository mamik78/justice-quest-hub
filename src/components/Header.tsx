
import { useUser } from "../contexts/UserContext";
import { avatars } from "../data/quizData";
import { Link } from "react-router-dom";

const Header = () => {
  const { username, selectedAvatar, points } = useUser();
  const userAvatar = avatars.find(avatar => avatar.id === selectedAvatar);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-justice-primary text-white rounded-full">
            <span className="text-xl font-bold">C</span>
          </div>
          <h1 className="text-xl font-bold text-justice-primary sm:text-2xl">C-Justice-Web</h1>
        </Link>
        
        {username ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 bg-justice-gray px-3 py-1 rounded-full">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold text-sm">{points} pts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline font-medium">{username}</span>
              <Link to="/profile" className="block w-8 h-8 rounded-full overflow-hidden border-2 border-justice-primary">
                <img src={userAvatar?.src} alt="Avatar" className="w-full h-full object-cover" />
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/onboarding" className="btn-primary">
            Commencer
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
