import CourseCatalog from "../../Ui/CourseCatalog";
import { useDigitalMarketing } from "./useDigitalMarketing";
import { useDigitalMarketingInstructors } from "./useDigitalMarketingInstructors";
import { useFeaturedDigitalMarketing } from "./useFeaturedDigitalMarketing";
export default function DigitalMarketing() {
  const { digitalMarketing, count, isLoading: loading, error, refetch } = useDigitalMarketing();
  const { digitalMarketingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useDigitalMarketingInstructors();
  const { featuredDigitalMarketing } = useFeaturedDigitalMarketing();
  return <CourseCatalog title="Digital Marketing" description="Master comprehensive digital marketing strategies to reach audiences and drive conversions online" subject="Marketing" slug="marketing" courses={digitalMarketing} count={count} instructors={digitalMarketingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredDigitalMarketing} />;
}
