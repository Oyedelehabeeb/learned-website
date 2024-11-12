import { useQuery } from "@tanstack/react-query";
import { getFeaturedSocialMediaMarketing } from "../../Services/apiFeaturedCourses";

export function useFeaturedSocialMediaMarketing() {
  const { data: featuredSocialMediaMarketing, isLoading } = useQuery({
    queryKey: ["featured-social-media-marketing"],
    queryFn: getFeaturedSocialMediaMarketing,
  });
  return { featuredSocialMediaMarketing, isLoading };
}
