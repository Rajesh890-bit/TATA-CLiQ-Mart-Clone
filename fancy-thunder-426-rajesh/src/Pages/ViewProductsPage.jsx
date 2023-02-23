import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillFilter } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

import Loader from "../Components/Loader/Loader";
import my_border from "../scripts/my_border";
import ProductCard from "../Components/ProductCard/ProductCard";
import Gap from "../Components/Gap/Gap";
import { Filter } from "../Components/Filter";
import { FilterData } from "../Constants/staticData";

import {
  AUTO,
  BACKGROUND,
  BOLD,
  CENTER,
  DEEPPINK,
  FILL_25PARENT,
  FILL_75PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  NONE,
  POINTER,
  R1,
  R2,
  R3,
  R4,
  SB,
  SOLID,
  STICKY,
  TRANSPARENT,
} from "../Constants/typography";

import {
  DISCOUNT,
  ERROR_URL,
  HTL,
  LOADER_URL,
  LTH,
  POPULARITY,
} from "../Constants/constants";
import {
  HStack,
  Wrap,
  Heading,
  Flex,
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import my_pixel from "../scripts/my_pixel";
const Products = () => {
  const { isAuth, authUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [catagoryProd, setCategory] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [productData, setProductData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [clear, setClear] = useState(false);
  let value = searchParams.get("sort");
  let filterValues = searchParams.get("filter")?.toString().split("+") || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   console.log(error);

  let { id } = useParams();
  const [filter, setFilters] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tata-cliq.onrender.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setCategory(res.data.items);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [id]);

  console.log("Data from View Product page", id);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  if (loading) return <Loader gif={LOADER_URL} />;
  if (error) return <Loader gif={ERROR_URL} />;
  return (
    <Box bg={BACKGROUND} className="container">
      <Heading textAlign={CENTER}>{id.toUpperCase()}</Heading>
      <Text fontSize={my_pixel(16)} color={GRAY}>
        {catagoryProd && catagoryProd.length} Products
      </Text>
      <Gap gap={70} />

      <Flex m={AUTO} w={FILL_80PARENT}>
        <HStack flex={2.5}>
          <>
            <Wrap
              display={{ base: "block", sm: "none", lg: "none" }}
              ref={btnRef}
              onClick={onOpen}
            >
              <AiFillFilter />
            </Wrap>

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                  <Flex gap={4} w={FILL_80PARENT} m={AUTO}>
                    <Box w={FILL_PARENT}>
                      <Card
                        borderRadius={10}
                        position={STICKY}
                        top={5}
                        w={FILL_PARENT}
                      >
                        <Flex
                          padding={4}
                          bg={"gray.100"}
                          justify={SB}
                          alignItems={CENTER}
                        >
                          <Text fontWeight={BOLD}>Filters</Text>
                          <Text
                            cursor={POINTER}
                            onClick={() => {
                              setClear((prev) => !prev);
                            }}
                            color={DEEPPINK}
                            fontWeight={BOLD}
                          >
                            Clear All
                          </Text>
                        </Flex>
                        <CardBody width={FILL_PARENT}>
                          <Filter setFilters={setFilters} data={FilterData} />
                        </CardBody>
                      </Card>
                    </Box>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        </HStack>

        <Flex
          borderRadius={4}
          gap={8}
          alignItems={CENTER}
          padding={2}
          border={my_border(1, SOLID, GRAY)}
        >
          <HStack flex={1}>
            <Text color={GRAY}>Sort:</Text>
            <select
              value={value}
              onChange={(e) => {
                setSearchParams({
                  sort: e.target.value,
                  filter: filter.length > 0 ? filter.join("+") : [],
                });
              }}
              border={0}
              style={{
                WebkitAppearance: NONE,
                outline: NONE,
                backgroundColor: TRANSPARENT,
              }}
            >
              <option value={POPULARITY}>Popularity</option>
              <option value={LTH}>Price Low to High</option>
              <option value={HTL}>Price High to Low</option>
              <option value={DISCOUNT.toLowerCase()}>Discount</option>
            </select>
          </HStack>
          <BsFilter color={GRAY} />
        </Flex>
      </Flex>

      <Gap gap={70} />

      <Flex gap={4} w={FILL_80PARENT} m={AUTO}>
        <Box
          w={FILL_25PARENT}
          display={{ base: NONE, sm: "block", lg: "block" }}
        >
          <Card borderRadius={10} position={STICKY} top={5} w={FILL_PARENT}>
            <Flex padding={4} bg={"gray.100"} justify={SB} alignItems={CENTER}>
              <Text fontWeight={BOLD}>Filters</Text>
              <Text
                cursor={POINTER}
                onClick={() => {
                  setClear((prev) => !prev);
                }}
                color={DEEPPINK}
                fontWeight={BOLD}
              >
                Clear All
              </Text>
            </Flex>
            <CardBody width={FILL_PARENT}>
              <Filter setFilters={setFilters} data={FilterData} />
            </CardBody>
          </Card>
        </Box>

        <Grid
          gap={4}
          w={{ base: FILL_PARENT, sm: FILL_75PARENT, lg: FILL_75PARENT }}
          gridTemplateColumns={{ base: R1, sm: R3, lg: R4 }}
        >
          {catagoryProd?.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Products;
