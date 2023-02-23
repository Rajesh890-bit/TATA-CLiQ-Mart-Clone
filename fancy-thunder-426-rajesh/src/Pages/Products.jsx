import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const Products = () => {
  const { isAuth, authUser } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <Box>
      <Text>All Products page</Text>
    </Box>
  );
};

export default Products;
