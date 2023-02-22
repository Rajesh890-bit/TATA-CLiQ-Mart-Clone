import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Products = () => {
  const { isAuth, authUser } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1>All Products</h1>
    </div>
  );
};

export default Products;
