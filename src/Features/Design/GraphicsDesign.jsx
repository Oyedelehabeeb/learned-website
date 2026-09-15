import CourseCatalog from "../../Ui/CourseCatalog";
import { useGraphicsDesign } from "./useGraphicsDesign";
import { useGraphicsDesignInstructors } from "./useGraphicsDesignInstructors";
import { useFeaturedGraphicsDesign } from "./useFeaturedGraphicsDesign";
export default function GraphicsDesign() {
  const { graphicsDesign, count, isLoading: loading, error, refetch } = useGraphicsDesign();
  const { graphicsDesignInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useGraphicsDesignInstructors();
  const { featuredGraphicsDesign } = useFeaturedGraphicsDesign();
  return <CourseCatalog title="Graphic design & illustration" description="Create stunning visual communications that captivate and inspire audiences" subject="Design" slug="design" courses={graphicsDesign} count={count} instructors={graphicsDesignInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredGraphicsDesign} />;
}
