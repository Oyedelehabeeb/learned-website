import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import RouteEffects from "./Ui/RouteEffects";

import AppLayout from "./Ui/AppLayout";
const WebDevelopmentPage = lazy(() => import("./Pages/WebDevelopmentPage"));
const MobileDevelopmentPage = lazy(() =>
  import("./Pages/MobileDevelopmentPage")
);
const GameDevelopmentPage = lazy(() => import("./Pages/GameDevelopmentPage"));
const DataSciencePage = lazy(() => import("./Pages/DataSciencePage"));
const WebDesignPage = lazy(() => import("./Pages/WebDesignPage"));
const GraphicsDesignPage = lazy(() => import("./Pages/GraphicsDesignPage"));
const UserExperiencePage = lazy(() => import("./Pages/UserExperiencePage"));
const DigitalMarketingPage = lazy(() => import("./Pages/DigitalMarketingPage"));
const SocialMediaMarketingPage = lazy(() =>
  import("./Pages/SocialMediaMarketingPage")
);
const BrandingPage = lazy(() => import("./Pages/BrandingPage"));
const EntrepreneurPage = lazy(() => import("./Pages/EntrepreneurPage"));
const SalesPage = lazy(() => import("./Pages/SalesPage"));
const ManagementPage = lazy(() => import("./Pages/ManagementPage"));
const NutritionPage = lazy(() => import("./Pages/NutritionPage"));
const MentalHealthPage = lazy(() => import("./Pages/MentalHealthPage"));
const FitnessHealth = lazy(() => import("./Features/Fitness/FitnessHealth"));
import PageNotFound from "./Ui/PageNotFound";
const CourseDetails = lazy(() => import("./Ui/CourseDetails"));
import DesignHero from "./Features/Design/DesignHero";
import DevelopmentHero from "./Features/Development/DevelopmentHero";
import MarketingHero from "./Features/Marketing/MarketingHero";
import BusinessHero from "./Features/Business/BusinessHero";
import FitnessHero from "./Features/Fitness/FitnessHero";
const CryptocurrencyPage = lazy(() => import("./Pages/CryptocurrencyPage"));
const InvestingPage = lazy(() => import("./Pages/InvestingPage"));
const AccountingPage = lazy(() => import("./Pages/AccountingPage"));
const MedicalCodingPage = lazy(() => import("./Pages/MedicalCodingPage"));
const AnatomyPage = lazy(() => import("./Pages/AnatomyPage"));
const ResearchPage = lazy(() => import("./Pages/ResearchPage"));
import FinanceHero from "./Features/Finance/FinanceHero";
import AcademicsHero from "./Features/Academics/AcademicsHero";
const FinancePage = lazy(() => import("./Pages/FinancePage"));
const AcademicsPage = lazy(() => import("./Pages/AcademicsPage"));
const ClinicalResearchPage = lazy(() => import("./Pages/ClinicalResearchPage"));
const InstructorsDetails = lazy(() => import("./Ui/InstructorsDetails"));
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SettingsPage from "./Pages/SettingsPage";
const PaymentHistoryPage = lazy(() => import("./Pages/PaymentHistoryPage"));
import ProtectedRoute from "./Ui/ProtectedRoute";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import UpdateUserPasswordPage from "./Pages/UpdateUserPasswordPage";
const WishListPage = lazy(() => import("./Pages/WishListPage"));
import HomePage from "./Pages/HomePage";
const DesignPage = lazy(() => import("./Pages/DesignPage"));
const DevelopmentPage = lazy(() => import("./Pages/DevelopmentPage"));
const MarketingPage = lazy(() => import("./Pages/MarketingPage"));
const BusinessPage = lazy(() => import("./Pages/BusinessPage"));
const FitnessPage = lazy(() => import("./Pages/FitnessPage"));
const MyLearningPage = lazy(() => import("./Pages/MyLearningPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
import LandingPage from "./Pages/LandingPage";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
      },
    },
  });

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouteEffects />
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
                <Route
                  path="/payment-history"
                  element={<PaymentHistoryPage />}
                />
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
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
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
