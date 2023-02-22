import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Components/Common/SignIn";
import SignUp from "../Components/Common/SignUp";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Private from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Private>
              <Products />
            </Private>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
