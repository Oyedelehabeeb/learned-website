import CourseCatalog from "../../Ui/CourseCatalog";
import { useDataScience } from "./useDataScience";
import { useDataScienceInstructors } from "./useDataScienceInstructors";
import { useFeaturedDataScience } from "./useFeaturedDataScience";
export default function DataScience() {
  const { dataScience, count, isLoading: loading, error, refetch } = useDataScience();
  const { dataScienceInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useDataScienceInstructors();
  const { featuredDataScience } = useFeaturedDataScience();
  return <CourseCatalog title="Data Science" description="Transform raw data into actionable insights with machine learning, statistical analysis, and AI. Master Python, R, and cutting-edge data science tools and techniques." subject="Development" slug="development" courses={dataScience} count={count} instructors={dataScienceInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredDataScience} />;
}
