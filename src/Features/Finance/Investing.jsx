import CourseCatalog from "../../Ui/CourseCatalog";
import { useInvesting } from "./useInvesting";
import { useInvestingInstructors } from "./useInvestingInstructors";
import { useFeaturedInvesting } from "./useFeaturedInvesting";
export default function Investing() {
  const { investing, count, isLoading: loading, error, refetch } = useInvesting();
  const { investingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useInvestingInstructors();
  const { featuredInvesting } = useFeaturedInvesting(2);
  return <CourseCatalog title="Investing & trading" description="Build practical skills and explore new ideas with Investing & trading courses." subject="Finance" slug="finance" courses={investing} count={count} instructors={investingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredInvesting} />;
}
