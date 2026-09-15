import CourseCatalog from "../../Ui/CourseCatalog";
import { useAccounting } from "./useAccounting";
import { useAccountingInstructors } from "./useAccountingInstructors";
import { useFeaturedAccounting } from "./useFeaturedAccounting";
export default function Accounting() {
  const { accounting, count, isLoading: loading, error, refetch } = useAccounting();
  const { accountingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useAccountingInstructors();
  const { featuredAccounting } = useFeaturedAccounting(2);
  return <CourseCatalog title="Accounting & bookkeeping" description="Build practical skills and explore new ideas with Accounting & bookkeeping courses." subject="Finance" slug="finance" courses={accounting} count={count} instructors={accountingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredAccounting} />;
}
