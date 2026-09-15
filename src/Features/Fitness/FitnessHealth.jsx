import CourseCatalog from "../../Ui/CourseCatalog";
import { useFitnessHealth } from "./useFitnessHealth";
import { useFitnessHealthInstructors } from "./useFitnessHealthInstructors";
import { useFeaturedFitnessHealth } from "./useFeaturedFitnessHealth";
export default function FitnessHealth() {
  const { fitnessHealth, count, isLoading: loading, error, refetch } = useFitnessHealth();
  const { fitnessHealthInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useFitnessHealthInstructors();
  const { featuredFitnessHealth } = useFeaturedFitnessHealth();
  return <CourseCatalog title="Health & fitness" description="Transform your body and mind with comprehensive fitness and health training programs" subject="Health & fitness" slug="fitness" courses={fitnessHealth} count={count} instructors={fitnessHealthInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredFitnessHealth} />;
}
