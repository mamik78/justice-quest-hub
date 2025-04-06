
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OnboardingPage from "./pages/OnboardingPage";
import QuizPage from "./pages/QuizPage";
import ProfilePage from "./pages/ProfilePage";
import MetiersPage from "./pages/MetiersPage";
import OrganisationPage from "./pages/OrganisationPage";
import HarcelementPage from "./pages/HarcelementPage";
import HistoirePage from "./pages/HistoirePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";
import FAQPage from "./pages/FAQPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/metiers" element={<MetiersPage />} />
                <Route path="/organisation" element={<OrganisationPage />} />
                <Route path="/harcelement" element={<HarcelementPage />} />
                <Route path="/histoire" element={<HistoirePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ChatBot />
          </div>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
