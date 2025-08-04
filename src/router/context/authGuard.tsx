import { createContext, useState, type ReactNode } from "react";
import { useOnInit } from "../../hooks/useOnInit";
import { CircularProgress } from "@mui/material";
import type { LoginResponse } from "../../dto/auth/loginResponse";
import { AuthService } from "../../services/auth";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: LoginResponse) => void;
    logout: () => void;
}

export const accessTokenKey = 'accessToken';
export const refreshTokenKey = 'refreshToken';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useOnInit(() => {
    const storedToken = localStorage.getItem(accessTokenKey);
    if (storedToken) {
        setIsAuthenticated(true);
    }
    setIsLoading(false);
  });

  const login = (token: LoginResponse) => {
    setIsAuthenticated(true);
    localStorage.setItem(accessTokenKey, token.accessToken);
    localStorage.setItem(refreshTokenKey, token.refreshToken);
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsAuthenticated(false);
      localStorage.removeItem(accessTokenKey);
      localStorage.removeItem(refreshTokenKey);
    }
  };

  if (isLoading) 
    return <CircularProgress />;
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);