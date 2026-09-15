import CourseCatalog from "../../Ui/CourseCatalog";
import { useEntrepreneur } from "./useEntrepreneur";
import { useEntrepreneurInstructors } from "./useEntrepreneurInstructors";
import { useFeaturedEntrepreneur } from "./useFeaturedEntrepreneur";
export default function Entrepreneur() {
  const { entrepreneur, count, isLoading: loading, error, refetch } = useEntrepreneur();
  const { entrepreneurInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useEntrepreneurInstructors();
  const { featuredEntrepreneur } = useFeaturedEntrepreneur();
  return <CourseCatalog title="Entrepreneurship" description="Build practical skills and explore new ideas with Entrepreneurship courses." subject="Business" slug="business" courses={entrepreneur} count={count} instructors={entrepreneurInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredEntrepreneur} />;
}
