import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "./apiCourses";

export function useAllCourses() {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: getAllCourses,
  });

  return { allCourses, isLoading };
}
