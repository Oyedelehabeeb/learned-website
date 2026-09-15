import CourseCatalog from "../../Ui/CourseCatalog";
import { useAnatomy } from "./useAnatomy";
import { useAnatomyInstructors } from "./useAnatomyInstructors";
import { useFeaturedAnatomy } from "./useFeaturedAnatomy";
export default function Anatomy() {
  const { anatomy, count, isLoading: loading, error, refetch } = useAnatomy();
  const { anatomyInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useAnatomyInstructors();
  const { featuredAnatomy } = useFeaturedAnatomy(4);
  return <CourseCatalog title="Anatomy" description="Explore the intricate structure of the human body through comprehensive anatomy courses. Master anatomical systems, physiological processes, and medical terminology." subject="Academics" slug="academics" courses={anatomy} count={count} instructors={anatomyInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredAnatomy} />;
}
