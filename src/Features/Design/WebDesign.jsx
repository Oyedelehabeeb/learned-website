import CourseCatalog from "../../Ui/CourseCatalog";
import { useWebDesign } from "./useWebDesign";
import { useWebDesignInstructors } from "./useWebDesignInstructors";
import { useFeaturedWebDesign } from "./useFeaturedWebDesign";
export default function WebDesign() {
  const { webDesign, count, isLoading: loading, error, refetch } = useWebDesign();
  const { webDesignInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useWebDesignInstructors();
  const { featuredWebDesign } = useFeaturedWebDesign();
  return <CourseCatalog title="Web Design" description="Craft beautiful, responsive websites that deliver exceptional user experiences" subject="Design" slug="design" courses={webDesign} count={count} instructors={webDesignInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredWebDesign} />;
}
