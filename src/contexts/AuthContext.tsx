// import { ReactNode, createContext, useContext, useState } from "react";

// type SignInCredentials = {
//   email: string;
//   password: string;
// };

// type AuthContextData = {
//   signIn(credentials: SignInCredentials): Promise<void>;
//   isAuthenticated: boolean;
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

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ setUser, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // import { ReactNode, createContext, useContext, useState } from "react";
// // import { useMutation } from "@apollo/client";
// // import { useAuthToken } from "../services/auth";
// // import { LOGIN_REQUEST } from "../graphQL/mutations";

// // interface Role {
// //   name: string;
// //   type: string;
// // }

// // interface AuthContextType {
// //   isAuthenticated: boolean;
// //   login: (email: string, password: string) => Promise<void>;
// //   logout: () => void;
// //   user: { role: Role } | null;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider: React.FC<{ children: ReactNode }> = ({
// //   children,
// // }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [, setAuthToken, removeAuthToken] = useAuthToken();
// //   const [user, setUser] = useState<AuthContextType["user"] | null>(null);
// //   const [loginMutation] = useMutation(LOGIN_REQUEST);

// //   const login = async (email: string, password: string) => {
// //     try {
// //       const { data } = await loginMutation({
// //         variables: {
// //           email,
// //           password,
// //         },
// //       });
// //       if (data && data.login && data.login.user) {
// //         setIsAuthenticated(true);
// //         setUser(data.login.user);
// //         setAuthToken(data.login.jwt);
// //       }
// //     } catch (error) {
// //       console.error("Erro durante o login:", error);
// //     }
// //   };

// //   const logout = () => {
// //     setIsAuthenticated(false);
// //     setUser(null);
// //     removeAuthToken(); // Remova o token ao fazer logout
// //   };

// //   return (
// //     <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error("useAuth deve ser usado dentro de um AuthProvider");
// //   }
// //   return context;
// // };
