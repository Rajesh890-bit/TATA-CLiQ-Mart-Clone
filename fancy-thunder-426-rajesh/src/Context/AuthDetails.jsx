import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase-config";
import SignIn from "../Components/Common/SignIn";
import { useToast } from "@chakra-ui/react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const toast = useToast();
  const toastIdRef = useRef();

  function addToast(e) {
    toastIdRef.current = toast({ description: e });
  }
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
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user Signed out");
        addToast(`${authUser.email} logged out`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`${authUser.email}`}</p>

          <button onClick={userSignOut} style={{ backgroundColor: "teal" }}>
            Sign Out
          </button>
        </>
      ) : (
        <p>Sign in</p>
      )}
    </div>
  );
};

export default AuthDetails;
