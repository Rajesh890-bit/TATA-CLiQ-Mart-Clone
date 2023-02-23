import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Common/SignIn";
import SignUp from "../Components/Common/SignUp";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../Pages/Error404";
import SingleProductsPage from "../Pages/SingleProductsPage";
import CartPage from "../Pages/Cart";
import SearchPage from "../Pages/SearchPage";
import ProfilePage from "../Pages/ProfilePage";
import AdminPanel from "../Pages/AdminPanel";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/:id" element={<SingleProductsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
