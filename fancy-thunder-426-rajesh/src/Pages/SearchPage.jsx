import { Box, Grid, Heading } from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useEffect } from "react";

import { Navigate, useSearchParams } from "react-router-dom";

import { Loader } from "../Components/Loader";
import { ProductCard } from "../Components/ProductCard";
import { LOADER_URL, PRODUCTS } from "../Constants/constants";
import {
  AUTO,
  CENTER,
  FILL_80PARENT,
  LEFT,
  R1,
  R3,
  R4,
  R6,
  R8,
} from "../Constants/typography";
import { AuthContext } from "../Context/AuthContextProvider";

import "../styles/style.css";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q").toLowerCase();
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(false);
  let [filteredData, setFilteredData] = useState([]);
  const { isAuth, authUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);

    const getData = () => {
      let Products = [];

      axios.get(`https://tata-cliq.onrender.com/products`).then((res) => {
        setdata(res);
        // console.log(res);
        res.data?.forEach((el) => {
          el.items?.forEach((item) => {
            query.split(" ").forEach((s) => {
              if (
                item.name.toLowerCase().includes(s) ||
                item.short_desc.toLowerCase().includes(s) ||
                item.long_desc.toLowerCase().includes(s) ||
                item.category.toLowerCase().includes(s)
              ) {
                Products.push(item);
                console.log(item);
              }
            });
          });
        });
      });

      setFilteredData(Products);
      setLoading(false);
    };

    getData();
  }, [searchParams]);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  if (loading) return <Loader gif={LOADER_URL}></Loader>;

  return (
    <Box className="container">
      <Heading margin={16} textAlign={LEFT}>
        Showing {data.length} search results
      </Heading>
      <Grid
        width={FILL_80PARENT}
        gap={4}
        margin={AUTO}
        gridTemplateColumns={{ base: R1, sm: R3, lg: R6 }}
      >
        {console.log(filteredData)}
        {filteredData?.map((el) => (
          <ProductCard {...el} />
        ))}
      </Grid>
    </Box>
  );
}
