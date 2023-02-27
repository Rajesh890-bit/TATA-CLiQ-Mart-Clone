import { createContext } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsAuth(true);
      } else {
        setAuthUser(null);
        setIsAuth(false);
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

  const handleAddToCart = (copyItem) => {
    // add the selected product to the cart array
    console.log("data from cart page to auth", copyItem);

    // // store the cart array in local storage
    /* setCart([...cart, copyItem]); 
   localStorage.setItem("cart", JSON.stringify([...cart, copyItem])); */
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
  // console.log("MYtoken", token);
  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
