import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success("User successfully created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, signup };
}
