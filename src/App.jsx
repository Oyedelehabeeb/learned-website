import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./Ui/Loader";

const AppLayout = lazy(() => import("./Ui/AppLayout"));
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
const PageNotFound = lazy(() => import("./Ui/PageNotFound"));
const CourseDetails = lazy(() => import("./Ui/CourseDetails"));
const DesignHero = lazy(() => import("./Features/Design/DesignHero"));
const DevelopmentHero = lazy(() =>
  import("./Features/Development/DevelopmentHero")
);
const MarketingHero = lazy(() => import("./Features/Marketing/MarketingHero"));
const BusinessHero = lazy(() => import("./Features/Business/BusinessHero"));
const FitnessHero = lazy(() => import("./Features/Fitness/FitnessHero"));
const CryptocurrencyPage = lazy(() => import("./Pages/CryptocurrencyPage"));
const InvestingPage = lazy(() => import("./Pages/InvestingPage"));
const AccountingPage = lazy(() => import("./Pages/AccountingPage"));
const MedicalCodingPage = lazy(() => import("./Pages/MedicalCodingPage"));
const AnatomyPage = lazy(() => import("./Pages/AnatomyPage"));
const ResearchPage = lazy(() => import("./Pages/ResearchPage"));
const FinanceHero = lazy(() => import("./Features/Finance/FinanceHero"));
const AcademicsHero = lazy(() => import("./Features/Academics/AcademicsHero"));
const FinancePage = lazy(() => import("./Pages/FinancePage"));
const AcademicsPage = lazy(() => import("./Pages/AcademicsPage"));
const ClinicalResearchPage = lazy(() => import("./Pages/ClinicalResearchPage"));
const InstructorsDetails = lazy(() => import("./Ui/InstructorsDetails"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const SignupPage = lazy(() => import("./Pages/SignupPage"));
const SettingsPage = lazy(() => import("./Pages/SettingsPage"));
const PaymentHistoryPage = lazy(() => import("./Pages/PaymentHistoryPage"));
const ProtectedRoute = lazy(() => import("./Ui/ProtectedRoute"));
const ForgotPasswordPage = lazy(() => import("./Pages/ForgotPasswordPage"));
const UpdateUserPasswordPage = lazy(() =>
  import("./Pages/UpdateUserPasswordPage")
);
const WishListPage = lazy(() => import("./Pages/WishListPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const DesignPage = lazy(() => import("./Pages/DesignPage"));
const DevelopmentPage = lazy(() => import("./Pages/DevelopmentPage"));
const MarketingPage = lazy(() => import("./Pages/MarketingPage"));
const BusinessPage = lazy(() => import("./Pages/BusinessPage"));
const FitnessPage = lazy(() => import("./Pages/FitnessPage"));
const MyLearningPage = lazy(() => import("./Pages/MyLearningPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
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
