import { createContext } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, [authUser]);

  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("user Signed out");
      })
      .catch((err) => {
        console.error(err);
      });
    setIsAuth(false);
    setToken("");
  };
  console.log("MYtoken", token);
  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
