"use client";

import { createContext, useState, ReactNode } from "react";

interface AppContextType {
  theme: string;
  toggleTheme: () => void;
  isAuth: boolean;
  login: (username: string, name: string) => void;
  logout: () => void;
  user: { username: string; name: string } | null;
}

export const AppContext = createContext<AppContextType>({
  theme: "Light",
  toggleTheme: () => {},
  isAuth: false,
  login: () => {},
  logout: () => {},
  user: null,
});

export default function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("Light");
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<{ username: string; name: string } | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "dark" : "Light"));
  };

  const login = (username: string, name: string) => {
    setIsAuth(true);
    setUser({ username, name });
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        isAuth,
        theme,
        toggleTheme,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
