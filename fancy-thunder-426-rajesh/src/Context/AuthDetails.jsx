import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import SignIn from "../Components/Common/SignIn";

const AuthDetails = () => {
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
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user Signed out");
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
