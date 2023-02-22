import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import SignIn from "./SignIn";

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
    signOut(auth).then(() => {
      console.log("user Signed out");
    });
  };
  console.log(authUser);

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Sign In ${authUser.email}`}</p>

          <button onClick={userSignOut} style={{ backgroundColor: "teal" }}>
            Sign Out
          </button>
        </>
      ) : (
        <p>Sign Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
