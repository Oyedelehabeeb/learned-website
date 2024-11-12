import { useQuery } from "@tanstack/react-query";
import { getWebDesignCourses } from "../../Services/apiUdemy";

export function useHome() {
  const { data: webDesign, isLoading } = useQuery({
    queryKey: ["web-design"],
    queryFn: getWebDesignCourses,
  });
  return { webDesign, isLoading };
}
