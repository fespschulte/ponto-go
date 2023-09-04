import { useMutation } from "@apollo/client";
import { createRegisteredTimeMutation, loginMutation } from "./mutations";

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

export function useCreateRegisteredTimeMutation() {
  const [mutate, { loading }] = useMutation(createRegisteredTimeMutation);

  const createRegisteredTime = async (
    timeRegistered: string,
    user: string,
    published_at: string,
    created_by: string,
    updated_by: string
  ) => {
    const { data } = await mutate({
      variables: { timeRegistered, user, published_at, created_by, updated_by },
    });
    return data;
  };

  return {
    createRegisteredTime,
    loading,
  };
}
