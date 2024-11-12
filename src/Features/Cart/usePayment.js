// import { useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { addToMyLearning, clearCart } from "../../Services/apiCourses";
// import toast from "react-hot-toast";

// export function usePayment(cart) {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const onSuccess = async (reference) => {
//     console.log("Payment successful!", reference);
//     try {
//       const learningItems = cart.map(({ id, title, user_id }) => ({
//         course_id: id,
//         title,
//         user_id,
//         payment_reference: reference.reference,
//         purchase_date: new Date().toISOString(),
//         status: "purchased",
//       }));

//       console.log("Adding to myLearning:", learningItems);
//       await addToMyLearning(learningItems);

//       console.log("Clearing cart items");
//       const cartItemIds = cart.map((item) => item.id);
//       await clearCart(cartItemIds);

//       // Force refetch queries
//       await queryClient.invalidateQueries(["myLearning"]);
//       await queryClient.invalidateQueries(["cart"]);

//       toast.success("Payment successful! Courses added to My Learning");
//       navigate("/mylearning");
//     } catch (error) {
//       console.error("Error processing payment:", error);
//       toast.error("Error processing payment. Please contact support.");
//     }
//   };

//   const onClose = () => {
//     console.log("Payment modal closed");
//     toast.error("Payment was not completed.");
//   };

//   return { onSuccess, onClose };
// }
