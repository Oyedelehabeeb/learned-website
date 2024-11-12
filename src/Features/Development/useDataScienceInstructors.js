import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataScienceInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useDataScienceInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: dataScienceInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["data-science-instructors", pageInst],
      queryFn: () => getDataScienceInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["data-science-instructors", pageInst + 1],
      queryFn: () => getDataScienceInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["data-science-instructors", pageInst - 1],
      queryFn: () => getDataScienceInstructors({ pageInst: pageInst - 1 }),
    });

  return { dataScienceInstructors, isLoading, count };
}
