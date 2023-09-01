import { useApolloClient } from "@apollo/react-hooks";
import { useCookies } from "react-cookie";

const AUTH_TOKEN = "auth-token";

export const useAuthToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies([AUTH_TOKEN]);
  const setAuthToken = (authToken: string) => setCookie(AUTH_TOKEN, authToken);
  const removeAuthToken = () => removeCookie(AUTH_TOKEN);
  return [cookies[AUTH_TOKEN], setAuthToken, removeAuthToken];
};

export const useLogout = () => {
  const [, , removeAuthToken] = useAuthToken();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await apolloClient.clearStore();
    removeAuthToken();
  };
  return logout;
};
