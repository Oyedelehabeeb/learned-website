// src/Hooks/useDeleteWishlist.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteWishlist as deleteWishlistApi } from "../../Services/apiCourses";
import { useSession } from "../../Services/useSession";

export function useDeleteWishlist() {
  const queryClient = useQueryClient();
  const { data: session, isLoading: sessionLoading } = useSession(); // Fetch session data
  const userId = session?.user?.id;

  const { mutate: deleteWishlist, isLoading: isDeleting } = useMutation({
    mutationFn: (itemId) => deleteWishlistApi(itemId, userId),

    onSuccess: () => {
      toast.success("Course removed from wishlist.");
      // Invalidate the specific user’s wishlist
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      console.error("Error deleting wishlist item:", error);
      toast.error("Failed to remove course. Try again later.");
    },
  });

  if (sessionLoading) {
    return { deleteWishlist: () => {}, isDeleting: true };
  }

  return { deleteWishlist, isDeleting };
}
