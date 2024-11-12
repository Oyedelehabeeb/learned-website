import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToWishList, getWishlist } from "../../Services/apiCourses";
import toast from "react-hot-toast";

export function useWishlist() {
  const queryClient = useQueryClient();

  const { data: wishlist = [], isLoading: isWishlistLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  // Mutation to add item to the cart
  const { mutate: addItem, isLoading: isAdding } = useMutation({
    mutationFn: addToWishList,
    onSuccess: (newItem) => {
      toast.success(` added to cart successfully.`);

      // Update cart state immediately by adding the new item
      queryClient.setQueryData(["wishlist"], (oldWishlist = []) => [
        ...oldWishlist,
        newItem,
      ]);

      // Optionally refetch the cart for consistency
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => {
      toast.error(`Failed to add item to cart: ${err.message}`);
    },
  });

  return { wishlist, getWishlist, isWishlistLoading, addItem, isAdding };
}
