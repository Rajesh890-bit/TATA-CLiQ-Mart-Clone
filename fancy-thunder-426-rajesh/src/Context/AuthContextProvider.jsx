import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    setToken("");
  };
  console.log("MYtoken", token);
  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
