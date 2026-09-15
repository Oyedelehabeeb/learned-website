import CourseCatalog from "../../Ui/CourseCatalog";
import { useMentalHealth } from "./useMentalHealth";
import { useMentalHealthInstructors } from "./useMentalHealthInstructors";
import { useFeaturedMentalHealth } from "./useFeaturedMentalhealth";
export default function MentalHealth() {
  const { mentalHealth, count, isLoading: loading, error, refetch } = useMentalHealth();
  const { mentalHealthInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useMentalHealthInstructors();
  const { featuredMentalHealth } = useFeaturedMentalHealth();
  return <CourseCatalog title="Mental Health" description="Develop emotional intelligence, stress management, and mindfulness practices for better mental wellness" subject="Health & fitness" slug="fitness" courses={mentalHealth} count={count} instructors={mentalHealthInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredMentalHealth} />;
}
