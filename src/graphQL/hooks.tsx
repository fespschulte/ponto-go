import { useMutation } from "@apollo/client";
import { loginMutation } from "./mutations";

export function useLogin() {
  const [mutate, { loading }] = useMutation(loginMutation);

  const login = async (email: string, password: string) => {
    const { data } = await mutate({
      variables: { email, password },
    });
    return data;
  };

  return {
    login,
    loading,
  };
}
