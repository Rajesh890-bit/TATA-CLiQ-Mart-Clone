import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import axios from "axios";
import { PRODUCTS } from "../Constants/constants";

let product = {
  id: null,
  images: null,
  name: "",
  short_desc: "",
  long_desc: "",
  category: "",
  price: null,
  strike_price: 0,
  ratings: 0,
  color: "",
  delivery_time: 3,
  sizes: null,
  size: null,
};

export function TableRow({
  images,
  name,
  price,
  category,
  ratings,
  id,
  handleTable,
  long_desc,
  short_desc,
  strike_price,
}) {
  // console.log(name)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ename, setename] = useState();
  const [eimage, seteimage] = useState();
  const [eimage1, seteimage1] = useState();
  const [eimage2, seteimage2] = useState();
  const [eprice, seteprice] = useState();
  const [eratings, seteratings] = useState();
  const [longd, setLongd] = useState();
  const [shortd, setShortd] = useState();
  const [strikep, setStrikep] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setename(name);
    seteimage(images[0]);
    seteimage1(images[1]);
    seteimage2(images[2]);
    seteprice(price);
    seteratings(ratings);
    setLongd(long_desc);
    setShortd(short_desc);
    setStrikep(strike_price);
  }, []);

  // let api = new Api();

  const EditProduct = async () => {};

  const deleteItem = async () => {
    console.log(id, "delete data id");

    let res = await axios.get(
      `https://tata-cliq.onrender.com/products/${category}`
    );
    res = await res.data.items;

    let newData = res.filter((el) => el.id !== id);

    let res1 = await axios(
      `https://tata-cliq.onrender.com/products/${category}`,
      {
        method: "patch",
        data: { items: newData },
      }
    );

    console.log(res1);
    handleTable(category);
  };

  return (
    <>
      <Tr>
        <Td>
          {" "}
          <Image src={images[0]} w="60px" h="60px"></Image>
        </Td>
        <Td maxW="50px" overflow="hidden">
          {name}
        </Td>
        <Td>{price}</Td>
        <Td>{category}</Td>
        <Td>{ratings}</Td>
        <Td onClick={onOpen}>
          <Button>Edit</Button>
        </Td>
        <Td onClick={deleteItem}>
          <Button>Delete</Button>
        </Td>
      </Tr>
    </>
  );
}

export default function AdminPanel() {
  const [catvalue, setCatValue] = useState("shoes"); // State to store the value of table category change Value
  const [value, setValue] = useState("shoes");
  const [NewProduct, setNewProducts] = useState(product);
  const [tableData, setTableData] = useState([]);
  //data posting done here...................
  const handleProSubmitAddNewProducts = async (event) => {
    event.preventDefault();

    // console.log(NewProduct);

    let res = await axios.get(
      `https://tata-cliq.onrender.com/products/${NewProduct.category}`
    );
    res = await res.data.items;

    NewProduct.id = Math.random() + Date.now();
    NewProduct.price = Number(NewProduct.price);
    NewProduct.strike_price = Number(NewProduct.strike_price);
    NewProduct.delivery_time = Number(NewProduct.delivery_time);
    NewProduct.ratings = Number(NewProduct.ratings);
    NewProduct.images = [NewProduct.images];
    NewProduct.sizes = [NewProduct.sizes];

    // https://tata-cliq.onrender.com/products/${value}

    let res1 = await axios(
      `https://tata-cliq.onrender.com/products/${NewProduct.category}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "patch",
        data: { items: [...res, NewProduct] },
      }
    );
    // console.log(res, "response");
    // console.log(NewProduct, "JAFNUEWFUEWFUEFNFJFNDJNDS DJN FNFONF");
    // console.log("REASPONSE AFTER POST", res1);
  };

  const handleFormData = (e) => {
    const val = e.target.name === "size" ? e.target.checked : e.target.value;

    setNewProducts({ ...NewProduct, [e.target.name]: val });
  };

  const handleTable = (catvalue) => {
    fetch(`https://tata-cliq.onrender.com/products/${catvalue}`)
      .then((e) => e.json())
      .then((e) => {
        setTableData(e);
      });
  };
  useEffect(() => {
    handleTable(catvalue);
  }, [catvalue]);

  return (
    <Box className="container">
      <Flex>
        <VStack w="30%">
          <Divider />

          <Heading fontSize="medium">Add New Product</Heading>

          <form onSubmit={handleProSubmitAddNewProducts}>
            <Flex
              m="auto"
              p={8}
              direction="column"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }
            >
              <FormControl>
                <FormLabel htmlFor="imageLink">Image Links</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="imageLinks"
                  name="images"
                  placeholder="Enter image link"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="price"
                  name="price"
                  placeholder="Enter price"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Strike Price">Strike Price</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="Strike Price"
                  name="strike_price"
                  placeholder="Enter strike price"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="name"
                  name="name"
                  placeholder="Enter name"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="ratings">Ratings</FormLabel>
                <Input
                  type="number"
                  onChange={handleFormData}
                  id="ratings"
                  name="ratings"
                  placeholder="Enter ratings"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Select id="category" name="category" onChange={handleFormData}>
                  <option value="shoes">Shoes</option>
                  <option value="menswear">Men's wear</option>
                  <option value="womenswear">Women's wear</option>
                  <option value="gadgets">Gadgets</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Color">Color</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Color"
                  name="color"
                  placeholder="Enter color name"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Delivery Time">Delivery Time</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Delivery Time"
                  name="delivery_time"
                  placeholder="Enter delivery time"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Sizes">Sizes</FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Sizes"
                  name="sizes"
                  placeholder="Enter all sizes seprated by comma"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="is Size?">is Size?</FormLabel>
                <Checkbox name="size" onChange={handleFormData}>
                  yes
                </Checkbox>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Long Description">
                  Short Description
                </FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Short Description"
                  name="short_desc"
                  placeholder="Enter short description"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="Long Description">
                  Long Description
                </FormLabel>
                <Input
                  type="text"
                  onChange={handleFormData}
                  id="Long Description"
                  name="long_desc"
                  placeholder="Enter long description"
                />
              </FormControl>

              <Button
                variant="outline"
                color="white"
                bg="#202340"
                mt={4}
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </VStack>

        <Box w="70%" borderLeftColor="#202340" borderWidth="1px" m="16px">
          <Select
            w="20%"
            m="24px"
            onChange={(e) => {
              handleTable(e.target.value);
              setCatValue(e.target.value);
            }}
          >
            <option value="shoes">Shoes</option>
            <option value="menswear">Men's wear</option>
            <option value="womenswear">Women's wear</option>
            <option value="gadgets">Gadgets</option>
          </Select>

          <TableContainer>
            <Table variant="simple">
              <TableCaption>Select category to edit products</TableCaption>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Categrory</Th>
                  <Th>Ratings</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {console.log(tableData)} */}
                {tableData?.items?.map((el) => {
                  return (
                    <TableRow {...el} handleTable={handleTable} key={el.id} />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
}
