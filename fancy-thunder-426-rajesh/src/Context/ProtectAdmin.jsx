import { useContext } from "react";
import Homepage from "../Pages/Home";
import { AuthContext } from "./AuthContextProvider";

export default function ProtectAdmin({ children }) {
  const { isAuth, authUser } = useContext(AuthContext);
  console.log(isAuth, authUser);
  if (authUser.email === "admin@mail.com" && isAuth && authUser) {
    return children;
  }
  return <Homepage />;
}
