import { useApolloClient } from "@apollo/react-hooks";
import { useCookies } from "react-cookie";

const TOKEN_NAME = "authToken";

export const useAuthToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
  const setAuthToken = (authToken: string) => setCookie(TOKEN_NAME, authToken);
  const removeAuthToken = () => removeCookie(TOKEN_NAME);
  return [cookies[TOKEN_NAME], setAuthToken, removeAuthToken];
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

// interface Response {
//   token: string;
//   user: {
//     name: string;
//     email: string;
//   };
// }

// export function signIn(): Promise<Response> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
//         user: {
//           name: "Thiago",
//           email: "thiagomarinho@rockeseat.com.br",
//         },
//       });
//     }, 2000);
//   });
// }
