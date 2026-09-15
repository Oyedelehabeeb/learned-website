import CourseCatalog from "../../Ui/CourseCatalog";
import { useCryptocurrency } from "./useCryptocurrency";
import { useCryptocurrencyInstructors } from "./useCryptocurrencyInstructors";
import { useFeaturedCryptocurrency } from "./useFeaturedCryptocurrency";
export default function Cryptocurrency() {
  const { cryptocurrency, count, isLoading: loading, error, refetch } = useCryptocurrency();
  const { cryptoInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useCryptocurrencyInstructors();
  const { featuredCryptocurrency } = useFeaturedCryptocurrency(2);
  return <CourseCatalog title="Cryptocurrency & blockchain" description="Build practical skills and explore new ideas with Cryptocurrency & blockchain courses." subject="Finance" slug="finance" courses={cryptocurrency} count={count} instructors={cryptoInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredCryptocurrency} />;
}
