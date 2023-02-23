import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const SingleProductsPage = () => {
  const { isAuth, authUser } = useContext(AuthContext);
  let { id } = useParams();

  console.log("Data from Single Product page", id);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <Box>
      <Text>Single Products page</Text>
    </Box>
  );
};

export default SingleProductsPage;
