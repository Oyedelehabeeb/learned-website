import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./Ui/Loader";

import AppLayout from "./Ui/AppLayout";
import WebDevelopmentPage from "./Pages/WebDevelopmentPage";
import MobileDevelopmentPage from "./Pages/MobileDevelopmentPage";
import GameDevelopmentPage from "./Pages/GameDevelopmentPage";
import DataSciencePage from "./Pages/DataSciencePage";
import WebDesignPage from "./Pages/WebDesignPage";
import GraphicsDesignPage from "./Pages/GraphicsDesignPage";
import UserExperiencePage from "./Pages/UserExperiencePage";
import DigitalMarketingPage from "./Pages/DigitalMarketingPage";
import SocialMediaMarketingPage from "./Pages/SocialMediaMarketingPage";
import BrandingPage from "./Pages/BrandingPage";
import EntrepreneurPage from "./Pages/EntrepreneurPage";
import SalesPage from "./Pages/SalesPage";
import ManagementPage from "./Pages/ManagementPage";
import NutritionPage from "./Pages/NutritionPage";
import MentalHealthPage from "./Pages/MentalHealthPage";
import FitnessHealth from "./Features/Fitness/FitnessHealth";
import PageNotFound from "./Ui/PageNotFound";
import CourseDetails from "./Ui/CourseDetails";
import DesignHero from "./Features/Design/DesignHero";
import DevelopmentHero from "./Features/Development/DevelopmentHero";
import MarketingHero from "./Features/Marketing/MarketingHero";
import BusinessHero from "./Features/Business/BusinessHero";
import FitnessHero from "./Features/Fitness/FitnessHero";
import CryptocurrencyPage from "./Pages/CryptocurrencyPage";
import InvestingPage from "./Pages/InvestingPage";
import AccountingPage from "./Pages/AccountingPage";
import MedicalCodingPage from "./Pages/MedicalCodingPage";
import AnatomyPage from "./Pages/AnatomyPage";
import ResearchPage from "./Pages/ResearchPage";
import FinanceHero from "./Features/Finance/FinanceHero";
import AcademicsHero from "./Features/Academics/AcademicsHero";
import FinancePage from "./Pages/FinancePage";
import AcademicsPage from "./Pages/AcademicsPage";
import ClinicalResearchPage from "./Pages/ClinicalResearchPage";
import InstructorsDetails from "./Ui/InstructorsDetails";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SettingsPage from "./Pages/SettingsPage";
import ProtectedRoute from "./Ui/ProtectedRoute";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UpdateUserPasswordPage from "./Pages/UpdateUserPasswordPage";
import WishListPage from "./Pages/WishListPage";
import HomePage from "./Pages/HomePage";
import DesignPage from "./Pages/DesignPage";
import DevelopmentPage from "./Pages/DevelopmentPage";
import MarketingPage from "./Pages/MarketingPage";
import BusinessPage from "./Pages/BusinessPage";
import FitnessPage from "./Pages/FitnessPage";
import MyLearningPage from "./Pages/MyLearningPage";
import CartPage from "./Pages/CartPage";
// import LandingPage from "./Features/Authentication/Landing";
const LandingPage = lazy(() => import("./Pages/LandingPage"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="reset-password"
                element={<UpdateUserPasswordPage />}
              />
              <Route path="/" element={<LandingPage />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/home" element={<HomePage />} />
                <Route path="/wishlist" element={<WishListPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/mylearning" element={<MyLearningPage />} />
                <Route path="/design" element={<DesignPage />} />
                <Route path="/development" element={<DevelopmentPage />} />
                <Route path="/marketing" element={<MarketingPage />} />
                <Route path="/business" element={<BusinessPage />} />
                <Route path="/fitness" element={<FitnessPage />} />
                <Route path="/finance" element={<FinancePage />} />
                <Route path="/academics" element={<AcademicsPage />} />

                <Route
                  path="/development/web-development"
                  element={<WebDevelopmentPage />}
                />
                <Route
                  path="/development/mobile-development"
                  element={<MobileDevelopmentPage />}
                />
                <Route
                  path="/development/game-development"
                  element={<GameDevelopmentPage />}
                />
                <Route
                  path="/development/data-science"
                  element={<DataSciencePage />}
                />
                <Route path="/design/web-design" element={<WebDesignPage />} />
                <Route
                  path="/design/graphics-design-illustration"
                  element={<GraphicsDesignPage />}
                />
                <Route
                  path="/design/user-experience-design"
                  element={<UserExperiencePage />}
                />
                <Route
                  path="/marketing/digital-marketing"
                  element={<DigitalMarketingPage />}
                />
                <Route
                  path="/marketing/social-media-marketing"
                  element={<SocialMediaMarketingPage />}
                />
                <Route path="/marketing/branding" element={<BrandingPage />} />
                <Route
                  path="/business/entrepreneur"
                  element={<EntrepreneurPage />}
                />
                <Route path="/business/sales" element={<SalesPage />} />
                <Route
                  path="/business/management"
                  element={<ManagementPage />}
                />
                <Route
                  path="/fitness/fitness-health"
                  element={<FitnessHealth />}
                />
                <Route path="/fitness/nutrition" element={<NutritionPage />} />
                <Route
                  path="/fitness/mental-health"
                  element={<MentalHealthPage />}
                />
                <Route
                  path="/finance/cryptocurrency-blockchain"
                  element={<CryptocurrencyPage />}
                />
                <Route
                  path="/finance/investing-trading"
                  element={<InvestingPage />}
                />
                <Route
                  path="/finance/accounting-bookkeeping"
                  element={<AccountingPage />}
                />
                <Route
                  path="academics/clinical-research"
                  element={<ClinicalResearchPage />}
                />
                <Route
                  path="/academics/medical-coding"
                  element={<MedicalCodingPage />}
                />
                <Route path="/academics/anatomy" element={<AnatomyPage />} />
                <Route
                  path="/academics/research-paper-writing"
                  element={<ResearchPage />}
                />
                <Route path="/courses/:courseId" element={<CourseDetails />} />
                <Route
                  path="/instructors/:instructorId"
                  element={<InstructorsDetails />}
                />
                <Route path="/design/design-hero" element={<DesignHero />} />
                <Route
                  path="/development/development-hero"
                  element={<DevelopmentHero />}
                />
                <Route
                  path="/marketing/marketing-hero"
                  element={<MarketingHero />}
                />
                <Route
                  path="business/business-hero"
                  element={<BusinessHero />}
                />
                <Route path="fitness/fitness-hero" element={<FitnessHero />} />
                <Route path="finance/finance-hero" element={<FinanceHero />} />
                <Route
                  path="academics/academics-hero"
                  element={<AcademicsHero />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "1px solid #e0e0e0",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
