import { Card, CardBody } from "@chakra-ui/card";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  AUTO,
  BOLD,
  CENTER,
  COLUMN,
  DEEPPINK,
  FILL_30PARENT,
  FILL_70PARENT,
  FILL_80PARENT,
  FILL_PARENT,
  GRAY,
  GREEN,
  LARGE,
  LEFT,
  MEDIUM,
  ROW,
  SB,
  SE,
  STICKY,
  X2LARGE,
  YELLOWGREEN,
} from "../Constants/typography";
import { CiDiscount1 } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import empty_cart from "../assets/empty_cart.png";

import "../styles/style.css";
import { Gap } from "../Components/Gap";
import my_pixel from "../scripts/my_pixel";
import { Button } from "@chakra-ui/button";
import { CartItem } from "../Components/CartItem";

import { useEffect } from "react";

import { RUPEES_SYMBOL } from "../Constants/constants";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  //   const { data, loading, error } = useSelector((state) => state.cartManager);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagSubTotal, setBagSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  let nav = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    // Check if there is existing data in local storage
    const storedData = JSON.parse(localStorage.getItem("exampleData"));

    if (storedData) {
      // If there is existing data, set the initial data state to it
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    setCartData([...data]);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const updateQuantity = (pid, value) => {
    console.log("update");
    let newData = data.map((el) => {
      if (el.id === pid) {
        el.quantity = value;
        return el;
      }
      return el;
    });
    // console.log(newData)
    // console.log("local",newData)
    // dispatch(UdpateCart(userId.id, { cart: newData }));
    setCartData(newData);
  };

  useEffect(() => {
    let bag_total = 0;
    let checkout_total = 0;
    let final_discount = 0;

    data.forEach(({ price, strike_price, quantity }) => {
      console.log(strike_price);
      checkout_total += price * quantity;
      bag_total += strike_price * quantity;
    });

    final_discount = bag_total - checkout_total;
    setTotal(checkout_total);
    setDiscount(final_discount);
    setBagTotal(bag_total);
    setBagSubTotal(bag_total);
    // console.log(checkout_total,bag_total,final_discount)
  }, [data]);

  const removeItem = (pid) => {
    let detetedData = data.filter((el) => el.id !== pid);
    // dispatch(UdpateCart(userId.id, { cart: detetedData }));
    setCartData(detetedData);
  };

  console.log(data);

  // if (loading) return <Loader gif={LOADER_URL} />;
  // if (error) return <Loader gif={ERROR_URL} />;

  return cartData ? (
    <Box className="container">
      <Flex w={FILL_PARENT} justify={SE} alignItems={CENTER}>
        <Heading size={LARGE}>My Bag</Heading>
        <Box w={"50%"}></Box>
        <HStack>
          <Text>Delhi,&nbsp;110001</Text>
          <Input variant={"flushed"} placeholder="Change PIN code"></Input>
        </HStack>
      </Flex>
      <Gap gap={30} />
      <Box padding={8} bg={"#e2e2e2"} w={FILL_PARENT}>
        <Flex
          gap={4}
          direction={{ base: COLUMN, sm: COLUMN, lg: ROW }}
          w={{ base: FILL_PARENT, sm: FILL_80PARENT, lg: FILL_80PARENT }}
          margin={AUTO}
        >
          {data.length > 0 ? (
            <Box
              textAlign={LEFT}
              w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_70PARENT }}
            >
              <Text>
                Apply a relevant coupon code here to avail any additional
                discount. Applicable cashback if any will be credited to your
                account as per T&C.
              </Text>
              <Gap gap={30} />

              <VStack gap={4} w={FILL_PARENT}>
                {/* //inflate all cart items here */}
                {cartData?.reverse().map((el) => (
                  <CartItem
                    {...el}
                    update={updateQuantity}
                    remove={removeItem}
                  />
                ))}
              </VStack>

              <Gap gap={30} />
              <Center>
                {" "}
                <Button
                  w={200}
                  borderRadius={my_pixel(50)}
                  variant={"outline"}
                  onClick={() => {
                    nav("/");
                  }}
                  colorScheme="brown"
                >
                  Continue Shopping
                </Button>
              </Center>
            </Box>
          ) : (
            <Card w={FILL_PARENT}>
              <CardBody>
                <VStack padding={8}>
                  <Image w={300} src={empty_cart}></Image>
                  <Text color={GRAY}>Your cart is empty !</Text>
                  <Button
                    w={200}
                    onClick={() => {
                      nav("/");
                    }}
                    borderRadius={my_pixel(50)}
                    variant={"outline"}
                    colorScheme="brown"
                  >
                    Continue Shopping
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          )}

          {/* //panel */}

          <Box
            display={data.length > 0 ? "block" : "none"}
            w={{ base: FILL_PARENT, sm: FILL_PARENT, lg: FILL_30PARENT }}
          >
            <VStack textAlign={LEFT} gap={2}>
              <Card w={FILL_PARENT}>
                <CardBody>
                  <Flex justify={SB} alignItems={CENTER}>
                    <HStack>
                      <CiDiscount1 size={30} />{" "}
                      <Text fontWeight={BOLD}>Check for Coupons</Text>
                    </HStack>
                    <MdArrowForwardIos />
                  </Flex>
                </CardBody>
              </Card>

              <Card w={FILL_PARENT}>
                <CardBody w={FILL_PARENT}>
                  {/* // */}

                  <VStack>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Bag Total
                      </Text>

                      <Text>{RUPEES_SYMBOL + bagTotal.toFixed(2)}</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Shipping Charges
                      </Text>
                      <Text color={GREEN}>FREE</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Bag Subtotal
                      </Text>
                      <Text>{RUPEES_SYMBOL + bagSubTotal.toFixed(2)}</Text>
                    </Flex>
                    <Flex w={FILL_PARENT} justify={SB}>
                      <Text color={GRAY} fontWeight={BOLD}>
                        Product Discount(s)
                      </Text>
                      <Text>{"-" + (RUPEES_SYMBOL + discount.toFixed(2))}</Text>
                    </Flex>
                    <Box textAlign={LEFT}>
                      <Text color={YELLOWGREEN} fontSize={my_pixel(12)}>
                        You will save {RUPEES_SYMBOL + discount.toFixed(2)} on
                        this order
                      </Text>
                    </Box>

                    <Gap gap={20} />

                    <Flex w={FILL_PARENT} justify={SB}>
                      <VStack>
                        <Text
                          color={"gray.800"}
                          fontSize={LARGE}
                          fontWeight={BOLD}
                        >
                          Total
                        </Text>
                        <Text color={"gray.800"} fontSize={LARGE}>
                          {RUPEES_SYMBOL + " " + total.toFixed(2)}
                        </Text>
                      </VStack>

                      <Button
                        onClick={() => {
                          nav("/checkout");
                        }}
                        colorScheme={"pink"}
                        borderRadius={my_pixel(50)}
                      >
                        Checkout
                      </Button>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  ) : (
    ""
  );
}
