import CourseCatalog from "../../Ui/CourseCatalog";
import { useUserExperienceDesign } from "./useUserExperienceDesign";
import { useUserExperienceDesignInstructors } from "./useUserExperienceDesignInstructors";
import { useFeaturedUserExperienceDesign } from "./useFeaturedUserExperienceDesign";
export default function UserExperienceDesign() {
  const { userExperienceDesign, count, isLoading: loading, error, refetch } = useUserExperienceDesign();
  const { userExperienceDesignInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useUserExperienceDesignInstructors();
  const { featuredUserExperienceDesign } = useFeaturedUserExperienceDesign();
  return <CourseCatalog title="User experience design" description="Master the art of creating intuitive, user-centered designs that solve real problems" subject="Design" slug="design" courses={userExperienceDesign} count={count} instructors={userExperienceDesignInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredUserExperienceDesign} />;
}
