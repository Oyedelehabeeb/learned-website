import CourseCatalog from "../../Ui/CourseCatalog";
import { useResearch } from "./useResearch";
import { useResearchPapersInstructors } from "./useResearchPapersInstructors";
import { useFeaturedClinicalResearch } from "./useFeaturedClinicalResearch";
export default function Research() {
  const { research, count, isLoading: loading, error, refetch } = useResearch();
  const { researchInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useResearchPapersInstructors();
  const { featuredClinicalResearch } = useFeaturedClinicalResearch();
  return <CourseCatalog title="Research paper writing" description="Master the art of academic writing and research methodology. Learn to craft compelling research papers, conduct literature reviews, and publish in peer-reviewed journals." subject="Academics" slug="academics" courses={research} count={count} instructors={researchInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredClinicalResearch} />;
}
