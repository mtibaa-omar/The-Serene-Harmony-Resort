import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabin, id }) => editCabinApi(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin Edited Successfully");
      queryClient.invalidateQueries({ queryKey: "cabins" });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
