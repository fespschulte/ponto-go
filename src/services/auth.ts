// import jwtDecode from "jwt-decode";

// const API_URL = "http://test.frontend.api.brainny.cc/graphql";

const ACCESS_TOKEN_KEY = "accessToken";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// export async function login(email: string, password: string) {
//   const response = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   if (!response.ok) {
//     return null;
//   }
//   const { token } = await response.json();
//   localStorage.setItem(ACCESS_TOKEN_KEY, token);
//   return getUserFromToken(token);
// }

// export function getUser() {
//   const token = getAccessToken();
//   if (!token) {
//     return null;
//   }
//   return getUserFromToken(token);
// }

// export function logout() {
//   localStorage.removeItem(ACCESS_TOKEN_KEY);
// }

// function getUserFromToken(token: string) {
//   const claims = jwtDecode(token);
//   return {
//     id: claims.sub,
//     email: claims.email,
//   };
// }

// import { useApolloClient } from "@apollo/react-hooks";
// import { useCookies } from "react-cookie";

// const AUTH_TOKEN = "auth-token";

// export const useAuthToken = () => {
//   const [cookies, setCookie, removeCookie] = useCookies([AUTH_TOKEN]);
//   const setAuthToken = (authToken: string) => setCookie(AUTH_TOKEN, authToken);
//   const removeAuthToken = () => removeCookie(AUTH_TOKEN);
//   return [cookies[AUTH_TOKEN], setAuthToken, removeAuthToken];
// };

// export const useLogout = () => {
//   const [, , removeAuthToken] = useAuthToken();
//   const apolloClient = useApolloClient();

//   const logout = async () => {
//     await apolloClient.clearStore();
//     removeAuthToken();
//   };
//   return logout;
// };
