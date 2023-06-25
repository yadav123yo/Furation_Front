import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import BookDetails from "../Pages/Book";
import Order from "../Pages/Order";
import CheckOut from "../Pages/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
            <Home />
        
        }
      />
      <Route
        path="/detail/:id"
        element={
            <BookDetails />
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        }
      />{" "}
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;