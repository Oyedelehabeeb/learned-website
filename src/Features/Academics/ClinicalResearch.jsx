import CourseCatalog from "../../Ui/CourseCatalog";
import { useClinicalResearch } from "./useClinicalResearch";
import { useClinicalResearchInstructors } from "./useClinicalResearchInstructors";
import { useFeaturedClinicalResearch } from "./useFeaturedClinicalResearch";
export default function ClinicalResearch() {
  const { clinicalResearch, count, isLoading: loading, error, refetch } = useClinicalResearch();
  const { clinicalResearchInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useClinicalResearchInstructors();
  const { featuredClinicalResearch } = useFeaturedClinicalResearch(5);
  return <CourseCatalog title="Clinical Research" description="Master the fundamentals of clinical research, from protocol design to data analysis. Learn evidence-based medicine and advance healthcare through rigorous scientific investigation." subject="Academics" slug="academics" courses={clinicalResearch} count={count} instructors={clinicalResearchInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredClinicalResearch} />;
}
