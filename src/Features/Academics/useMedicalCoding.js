import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getMedicalCodingCourses } from "../../Services/apiCourses";

export function useMedicalCoding() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: medicalCoding, count } = {}, isLoading } = useQuery({
    queryKey: ["medical-coding", page],
    queryFn: () => getMedicalCodingCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["medical-coding", page + 1],
      queryFn: () => getMedicalCodingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["medical-coding", page - 1],
      queryFn: () => getMedicalCodingCourses({ page: page - 1 }),
    });

  return { medicalCoding, count, isLoading };
}
