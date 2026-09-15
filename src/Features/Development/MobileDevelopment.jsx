import CourseCatalog from "../../Ui/CourseCatalog";
import { useMobileDevelopment } from "./useMobileDevelopment";
import { useMobileDevelopmentInstructors } from "./useMobileDevInstructors";
import { useFeaturedMobileDev } from "./useFeaturedMobileDev";
export default function MobileDevelopment() {
  const { mobileDevelopment, count, isLoading: loading, error, refetch } = useMobileDevelopment();
  const { mobileDevInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useMobileDevelopmentInstructors();
  const { featuredMobileDev } = useFeaturedMobileDev();
  return <CourseCatalog title="Mobile Development" description="Build powerful mobile applications for iOS and Android platforms. Master React Native, Flutter, Swift, and Kotlin development." subject="Development" slug="development" courses={mobileDevelopment} count={count} instructors={mobileDevInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredMobileDev} />;
}
