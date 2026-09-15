import CourseCatalog from "../../Ui/CourseCatalog";
import { useWebDevelopment } from "./useWebDevelopment";
import { useWebDevelopmentInstructors } from "./useWebDevInstructors";
import { useFeaturedWebDev } from "./useFeaturedWebDev";
export default function WebDevelopment() {
  const { webDevelopment, count, isLoading: loading, error, refetch } = useWebDevelopment();
  const { webDevInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useWebDevelopmentInstructors();
  const { featuredWebDev } = useFeaturedWebDev();
  return <CourseCatalog title="Web Development" description="Build modern, responsive websites and web applications. Master frontend frameworks, backend technologies, and full-stack development." subject="Development" slug="development" courses={webDevelopment} count={count} instructors={webDevInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredWebDev} />;
}
