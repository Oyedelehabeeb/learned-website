import { useQuery } from "@tanstack/react-query";
import { getFeaturedGraphicDesign } from "../../Services/apiFeaturedCourses";

export function useFeaturedGraphicsDesign() {
  const { data: featuredGraphicsDesign, isLoading } = useQuery({
    queryKey: ["featured-graphics-design"],
    queryFn: getFeaturedGraphicDesign,
  });
  return { featuredGraphicsDesign, isLoading };
}
