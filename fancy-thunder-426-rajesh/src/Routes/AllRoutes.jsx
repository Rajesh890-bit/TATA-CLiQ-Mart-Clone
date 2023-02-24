import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Common/SignIn";
import SignUp from "../Components/Common/SignUp";
import Home from "../Pages/Home";
import ViewProductsPage from "../Pages/ViewProductsPage";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../Pages/Error404";
import SingleProductsPage from "../Pages/SingleProductsPage";
import CartPage from "../Pages/Cart";
import SearchPage from "../Pages/SearchPage";
import ProfilePage from "../Pages/ProfilePage";
import AdminPanel from "../Pages/AdminPanel";
import CheckoutPage from "../Pages/CheckoutPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/:id/:pid" element={<SingleProductsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />

        <Route path="/products/:id" element={<ViewProductsPage />}></Route>
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
        <Route path="/admin" element={<AdminPanel />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
