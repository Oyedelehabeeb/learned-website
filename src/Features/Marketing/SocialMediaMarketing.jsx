import CourseCatalog from "../../Ui/CourseCatalog";
import { useSocialMediaMarketing } from "./useSocialMediaMarketing";
import { useSocialMediaMarketingInstructors } from "./useSocialMediaInstructors";
import { useFeaturedSocialMediaMarketing } from "./useFeaturedSocialMediaMarketing";
export default function SocialMediaMarketing() {
  const { socialMediaMarketing, count, isLoading: loading, error, refetch } = useSocialMediaMarketing();
  const { socialMediaMarketingInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useSocialMediaMarketingInstructors();
  const { featuredSocialMediaMarketing } = useFeaturedSocialMediaMarketing();
  return <CourseCatalog title="Social Media Marketing" description="Master social media strategies to build engaged communities and drive business growth across all platforms" subject="Marketing" slug="marketing" courses={socialMediaMarketing} count={count} instructors={socialMediaMarketingInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredSocialMediaMarketing} />;
}
