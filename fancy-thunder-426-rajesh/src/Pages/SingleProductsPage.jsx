import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import future_date from "../scripts/future_date";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiTrendingDown } from "react-icons/bi";
import ProductImageSlider from "../Components/ProductImageSlider/ProductImageSlider";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import {
  ERROR_URL,
  LOADER_URL,
  RUPEES_SYMBOL,
  PERCENT_SYMBOL,
} from "../Constants/constants";
import {
  AUTO,
  BLACK,
  BOLD,
  CENTER,
  COLUMN,
  DEEPPINK,
  FILL_50PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LARGE,
  LEFT,
  LINE_THROUGH,
  MEDIUM,
  NONE,
  POINTER,
  RED,
  ROW,
  SB,
  SMALL,
  SOLID,
  START,
  TRANSPARENT,
  WHITE,
  X1LARGE,
  X2LARGE,
} from "../Constants/typography";
import { RxShare1 } from "react-icons/rx";
import my_pixel from "../scripts/my_pixel";
import Gap from "../Components/Gap/Gap";
import my_border from "../scripts/my_border";
import { BsCashStack } from "react-icons/bs";

const SingleProductsPage = () => {
  const { isAuth, authUser, cart } = useContext(AuthContext);
  // let [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let toast = useToast();
  let nav = useNavigate();

  // let cart = useSelector((state)=>state.cartManager)
  // let {userId,auth} = useSelector((state)=>state.authManager)
  let { id, pid } = useParams();
  let [item, setItem] = useState({});
  let [productData, setProductData] = useState([]);
  let [option, setOption] = useState(0);
  let [exist, setExist] = useState(false);

  const [cartdata, setCartData] = useState([]);

  useEffect(() => {
    // Check if there is existing data in local storage
    const storedData = JSON.parse(localStorage.getItem("exampleData"));

    if (storedData) {
      // If there is existing data, set the initial data state to it
      setCartData(storedData);
    }
  }, []);

  const handleAddData = (newData) => {
    // Add the new data to the existing data array using the spread operator
    const updatedData = [...cartdata, newData];

    // Set the new data state
    setCartData(updatedData);

    // Store the new data in local storage
    localStorage.setItem("exampleData", JSON.stringify(updatedData));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tata-cliq.onrender.com/products/${id}`)
      .then((res) => {
        // console.log(res);
        setProductData(res.data.items);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    let product = productData?.filter((el) => el.id === pid);
    setItem(product);
  }, [productData]);
  console.log("cart data", cart);
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  if (loading) return <Loader gif={LOADER_URL} />;
  if (error) return <Loader gif={ERROR_URL} />;
  return item.length > 0 ? (
    <Box className="container" w={FILL_PARENT} m={AUTO} key={item[0]?.id}>
      <Flex
        direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}
        gap={8}
        m={AUTO}
        mt={my_pixel(160)}
        w={FILL_80PARENT}
      >
        <Box w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_50PARENT }}>
          <ProductImageSlider images={item[0]?.images} />
        </Box>

        <Box width={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_50PARENT }}>
          <Flex
            direction={COLUMN}
            w={FILL_PARENT}
            justify={START}
            alignItems={START}
          >
            <Flex w={FILL_PARENT} justify={SB}>
              <Text fontSize={MEDIUM} fontWeight={BOLD}>
                {item[0]?.name}
              </Text>
              <HStack gap={2}>
                <AiOutlineHeart size={my_pixel(30)} />
                <RxShare1 size={my_pixel(30)} />
              </HStack>
            </Flex>
          </Flex>

          <Box textAlign={LEFT}>
            <Text color={GRAY} fontSize={X2LARGE}>
              {item[0]?.short_desc}
            </Text>
            <Gap gap={16} />
            <Flex alignItems={CENTER} gap={2}>
              <Text fontWeight={BOLD} fontSize={X2LARGE}>
                {RUPEES_SYMBOL + item[0]?.price}
              </Text>

              <Text
                textDecoration={LINE_THROUGH}
                color={GRAY}
                fontSize={X1LARGE}
              >
                MRP: {RUPEES_SYMBOL + item[0]?.strike_price}
              </Text>

              <Text fontWeight={BOLD} color={GREEN} fontSize={X1LARGE}>
                {/* {`(${discount(
                  item[0].strike_price,
                  item[0].price
                )}${PERCENT_SYMBOL.toUpperCase()})`} */}
              </Text>
            </Flex>
            <Text mt={4} color={GRAY} fontSize={SMALL}>
              inclusive of all taxes
            </Text>
            <Button
              _active={{ bg: TRANSPARENT }}
              _hover={{ bg: "pink.50" }}
              mt={4}
              color={GRAY}
              bg={"pink.50"}
              leftIcon={<BiTrendingDown color={DEEPPINK} />}
            >
              Price dropped by &nbsp;
              <span style={{ color: DEEPPINK }}> ₹300 </span> &nbsp; recently
            </Button>
            <Text mt={4} color={RED} fontSize={my_pixel(14)}>
              Free shipping for all orders
            </Text>
            <Flex gap={2} mt={2} alignItems={START}>
              <HStack borderRadius={my_pixel(2)} padding={"0px 6px"} bg={GREEN}>
                <Text color={WHITE}>{item[0]?.ratings}</Text>
                <AiFillStar color={WHITE} />
              </HStack>
              <Text color={BLACK} fontSize={SMALL}>
                Ratings
              </Text>
            </Flex>

            <Text mt={4} fontWeight={BOLD} fontSize={LARGE}>
              AVAILABLE OFFERS
            </Text>
            <Flex gap={4}>
              <Image
                mt={2}
                src={
                  "https://www.tatacliq.com/src/pdp/components/img/genericOfferIcon.svg"
                }
                w={my_pixel(20)}
                h={my_pixel(20)}
              ></Image>
              <Wrap padding={2}>
                Extra 50% off on each discounted product when you buy 2
                discounted products (or in multiples of 2), final discounted
                price will be displayed in the cart. NO COUPON REQUIRED.
              </Wrap>
            </Flex>
            <Gap gap={20} />
            <Box>
              <Text fontWeight={BOLD} fontSize={SMALL}>
                Colour: {item[0]?.color}
              </Text>
              <Image
                mt={2}
                border={my_border(1, SOLID, BLACK)}
                src={item[0]?.images[1]}
                w={50}
                borderRadius={4}
              ></Image>
            </Box>

            <Gap gap={20} />
            <Box>
              <Text fontWeight={BOLD} fontSize={SMALL}>
                {item[0]?.size ? "Select Size" : "Select Variant"}
              </Text>
              <Wrap padding={2}>
                {item[0]?.sizes?.map((el, index) => (
                  <Card
                    border={index === option && my_border(1, SOLID, DEEPPINK)}
                    h={AUTO}
                    onClick={() => {
                      setOption(index);
                    }}
                    cursor={POINTER}
                  >
                    <CardBody>
                      <Text fontSize={SMALL}>{el}</Text>
                    </CardBody>
                  </Card>
                ))}
              </Wrap>
            </Box>
            <Gap gap={40} />
            <Box>
              <HStack gap={2}>
                <Button
                  w={200}
                  h={45}
                  display={NONE}
                  borderRadius={50}
                  colorScheme={"pink"}
                  size="md"
                >
                  BUY NOW
                </Button>
                <Button
                  onClick={() => {
                    if (!isAuth) {
                      nav("/login");
                      return;
                    }
                    item[0].quantity = 1;
                    handleAddData(item[0]);
                  }}
                  h={45}
                  w={200}
                  borderRadius={50}
                  variant={"outline"}
                  colorScheme={"pink"}
                  size="md"
                >
                  {exist ? "GO TO CART" : " ADD TO BAG"}
                </Button>
              </HStack>
            </Box>
            <Gap gap={40} />
            <Box>
              <HStack gap={4}>
                <Text fontWeight={BOLD} fontSize={SMALL}>
                  Ship To
                </Text>
                <Input w={200} variant="flushed" placeholder="Enter Pincode" />
                <Text fontWeight={BOLD} color={DEEPPINK} fontSize={SMALL}>
                  Change
                </Text>
              </HStack>
            </Box>
            <Gap gap={30} />
            <Box>
              <HStack gap={8}>
                <TbTruckDelivery size={30} />
                <Text>
                  Delivery by{" "}
                  <span style={{ color: BLACK, fontWeight: BOLD }}>
                    {future_date(item[0]?.delivery_time)}
                  </span>
                </Text>
                <BsCashStack size={30} />
                <Text>Cash on Delivery Available</Text>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Gap gap={60} />
      <Box bg={"#e2e2e2"} padding={4}>
        <Gap gap={40} />
        <Card w={FILL_80PARENT} m={AUTO}>
          <CardBody>
            <Accordion allowMultiple defaultIndex={[0, 1, 2, 3]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontWeight={BOLD} flex="1" textAlign="left">
                      Product Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {item[0]?.long_desc}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Return & Refund
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  <Text fontSize={MEDIUM}>30 Days Easy Return</Text>
                  <ul style={{ marginLeft: my_pixel(16) }}>
                    <li>
                      An order, once placed, can be cancelled until the seller
                      processes it.
                    </li>
                    <li>
                      This product can be returned within 30 day(s) of
                      delivery,subject to the Return Policy.
                    </li>
                    <li>
                      For any other queries, do reach out to CliQ Care at 90291
                      08282.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Brand Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {item[0]?.short_desc}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" fontWeight={BOLD} textAlign="left">
                      Manufacturing, Packaging and Import Info
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={LEFT} pb={4}>
                  {/* //table */}
                  <TableContainer>
                    <Table variant="simple">
                      <Tbody>
                        <Tr>
                          <Td fontWeight={BOLD}>Generic Name</Td>
                          <Td>{item[0]?.name}</Td>
                        </Tr>
                        <Tr>
                          <Td fontWeight={BOLD}>Country of Origin</Td>
                          <Td>India</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
        <Gap gap={40} />
      </Box>
    </Box>
  ) : (
    ""
  );
};

export default SingleProductsPage;
