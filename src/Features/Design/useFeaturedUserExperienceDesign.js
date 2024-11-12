import { useQuery } from "@tanstack/react-query";
import { getFeaturedUserExperienceDesign } from "../../Services/apiFeaturedCourses";

export function useFeaturedUserExperienceDesign() {
  const { data: featuredUserExperienceDesign, isLoading } = useQuery({
    queryKey: ["featured-user-experience-design"],
    queryFn: getFeaturedUserExperienceDesign,
  });
  return { featuredUserExperienceDesign, isLoading };
}
