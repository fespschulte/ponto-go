// import { ReactNode, createContext, useContext, useState } from "react";
// import * as auth from "../services/auth.ts";

// type AuthContextData = {
//   signIn(): Promise<void>;
// };

// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthContext = createContext({} as AuthContextData);

// export function useAuth() {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error("useAuth must be used within a AuthContext");
//   }

//   return context;
// }

// async function signIn() {
//   const response = await auth.signIn();
//   setUser(response.user);

//   api.defaults.headers.Authorization = `Baerer ${response.token}`;

//   await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
//   await AsyncStorage.setItem("@RNAuth:token", response.token);
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState(null);

//   function signOut() {
//     setUser(null);
//   }

//   return (
//     <AuthContext.Provider value={{ setUser, user, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
