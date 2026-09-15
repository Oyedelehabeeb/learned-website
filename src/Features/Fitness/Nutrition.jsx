import CourseCatalog from "../../Ui/CourseCatalog";
import { useNutrition } from "./useNutrition";
import { useNutritionInstructors } from "./useNutritionInstructors";
import { useFeaturedNutrition } from "./useFeaturedNutrition";
export default function Nutrition() {
  const { nutrition, count, isLoading: loading, error, refetch } = useNutrition();
  const { nutritionInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useNutritionInstructors();
  const { featuredNutrition } = useFeaturedNutrition();
  return <CourseCatalog title="Nutrition" description="Master the science of nutrition and create sustainable healthy eating habits for life" subject="Health & fitness" slug="fitness" courses={nutrition} count={count} instructors={nutritionInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredNutrition} />;
}
