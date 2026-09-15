import CourseCatalog from "../../Ui/CourseCatalog";
import { useBranding } from "./useBranding";
import { useBrandingInstructors } from "./useBrandingInstructors";
import { useFeaturedBranding } from "./useFeaturedBranding";
export default function Branding() {
  const { branding, count, isLoading: loading, error, refetch } = useBranding();
  const { brandingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useBrandingInstructors();
  const { featuredBranding } = useFeaturedBranding();
  return <CourseCatalog title="Branding" description="Build powerful brand identities that resonate with audiences and drive business success" subject="Marketing" slug="marketing" courses={branding} count={count} instructors={brandingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredBranding} />;
}
