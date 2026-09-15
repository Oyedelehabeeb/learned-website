import CourseCatalog from "../../Ui/CourseCatalog";
import { useMedicalCoding } from "./useMedicalCoding";
import { useMedicalCodingInstructors } from "./useMedicalCodingInstructors";
import { useFeaturedMedicalCoding } from "./useFeaturedMedicalCoding";
export default function MedicalCoding() {
  const { medicalCoding, count, isLoading: loading, error, refetch } = useMedicalCoding();
  const { medicalCodingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useMedicalCodingInstructors();
  const { featuredMedicalCoding } = useFeaturedMedicalCoding(5);
  return <CourseCatalog title="Medical Coding" description="Master the art of medical coding with comprehensive training in ICD-10, CPT, and HCPCS. Build expertise in healthcare documentation and medical billing systems." subject="Academics" slug="academics" courses={medicalCoding} count={count} instructors={medicalCodingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredMedicalCoding} />;
}
