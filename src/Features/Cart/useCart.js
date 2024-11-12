import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { addToCart, getCart } from "../../Services/apiCourses";
import toast from "react-hot-toast";

export function useCart() {
  const queryClient = useQueryClient();

  // Query to get the cart items
  const { data: cart = [], isLoading: isCartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart, // Simplified
  });

  // Mutation to add item to the cart
  const { mutate: addItem, isLoading: isAdding } = useMutation({
    mutationFn: addToCart,
    onSuccess: (newItem) => {
      toast.success(` added to cart successfully.`);

      // Update cart state immediately by adding the new item
      queryClient.setQueryData(["cart"], (oldCart = []) => [
        ...oldCart,
        newItem,
      ]);

      // Optionally refetch the cart for consistency
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error(`Failed to add item to cart: ${err.message}`);
    },
  });

  return { cart, addItem, isCartLoading, isAdding };
}
