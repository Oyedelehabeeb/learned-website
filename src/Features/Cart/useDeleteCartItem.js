// src/Hooks/useDeleteCartItem.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSession } from "../../Services/useSession";
import { deleteCart as deleteCartApi } from "../../Services/apiCourses";

export function useDeleteCartItem() {
  const queryClient = useQueryClient();
  const { data: session, isLoading: sessionLoading } = useSession();
  const userId = session?.user?.id;

  const { mutate: deleteCartItem, isLoading: isDeleting } = useMutation({
    mutationFn: (itemId) => deleteCartApi(itemId, userId),
    onSuccess: () => {
      toast.success("Item removed from cart.");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
      toast.error("Failed to delete item. Try again later.");
    },
  });

  if (sessionLoading) {
    return { deleteCartItem: () => {}, isDeleting: true };
  }

  return { deleteCartItem, isDeleting };
}
