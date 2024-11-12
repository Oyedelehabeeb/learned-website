import { useQuery } from "@tanstack/react-query";
import { getMyLearning } from "../../Services/apiCourses";

export function useMyLearning(userId) {
  const { data: myLearning, isLoading } = useQuery({
    queryKey: ["my-learning", userId],
    queryFn: () => getMyLearning(userId),
    enabled: !!userId,
  });
  return { myLearning, isLoading };
}
