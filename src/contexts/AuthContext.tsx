import { ReactNode, createContext, useContext, useState } from "react";
import { useLoginMutation } from "../graphQL/mutations";
import { useAuthToken } from "../services/auth";

interface Role {
  name: string;
  type: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: { role: Role };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginMutation] = useLoginMutation();
  const [, setAuthToken] = useAuthToken();
  const [user, setUser] = useState<AuthContextType["user"] | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await loginMutation(email, password);
      if (data && data.login && data.login.user) {
        setIsAuthenticated(true);
        setUser(data.login.user);
        setAuthToken(data.login.jwt);
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
