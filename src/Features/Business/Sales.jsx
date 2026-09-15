import CourseCatalog from "../../Ui/CourseCatalog";
import { useSales } from "./useSales";
import { useSalesInstructors } from "./useSalesInstructors";
import { useFeaturedSales } from "./useFeaturedSales";
export default function Sales() {
  const { sales, count, isLoading: loading, error, refetch } = useSales();
  const { salesInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useSalesInstructors();
  const { featuredSales } = useFeaturedSales();
  return <CourseCatalog title="Sales" description="Build practical skills and explore new ideas with sales courses." subject="Business" slug="business" courses={sales} count={count} instructors={salesInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredSales} />;
}
