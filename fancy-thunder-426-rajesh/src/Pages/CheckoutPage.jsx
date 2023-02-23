import React from "react";
import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import my_pixel from "../scripts/my_pixel";
const CheckoutPage = () => {
  let nav = useNavigate();
  return (
    <Center p={"10rem 10rem"}>
      <Stack>
        <Box textAlign="center" py={10} px={6}>
          <Center>
            <Image
              src="https://media.tenor.com/LeSVOZJUt-oAAAAM/muuve-rider.gif"
              h="60%"
            />
          </Center>
          <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Thank you ! You Product Shipped Soon....
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
        <Center>
          <Button
            borderRadius={my_pixel(50)}
            w={200}
            variant={"outline"}
            colorScheme={"brown"}
            onClick={() => {
              nav("/");
            }}
          >
            Go to Homepage
          </Button>
        </Center>
      </Stack>
    </Center>
  );
};

export default CheckoutPage;
