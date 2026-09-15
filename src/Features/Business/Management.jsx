import CourseCatalog from "../../Ui/CourseCatalog";
import { useManagement } from "./useManagement";
import { useManagementInstructors } from "./useManagementInstructors";
import { useFeaturedManagement } from "./useFeaturedManagement";
export default function Management() {
  const { management, count, isLoading: loading, error, refetch } = useManagement();
  const { managementInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useManagementInstructors();
  const { featuredManagement } = useFeaturedManagement();
  return <CourseCatalog title="Management" description="Build practical skills and explore new ideas with management courses." subject="Business" slug="business" courses={management} count={count} instructors={managementInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredManagement} />;
}
