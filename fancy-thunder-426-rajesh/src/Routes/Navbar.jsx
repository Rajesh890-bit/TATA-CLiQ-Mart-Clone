import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthDetails from "../Context/AuthDetails";

function Navbar() {
  return (
    <Box
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "teal",
        color: "white",
        padding: "10px",
      }}
    >
      <Link key="/login" to="/login">
        Login
      </Link>
      <Link key="/signup" to="/signup">
        SignUp
      </Link>
      <Link key="/" to="/">
        Home
      </Link>
      <Link key="/products" to="/products">
        Products
      </Link>

      <Flex className="nav-bag" ml={{ base: 0, md: "auto" }}>
        <Link to="/carts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
        </Link>
        <span className="bag-quantity">
          <span>3</span>
        </span>
        <AuthDetails />
      </Flex>
    </Box>
  );
}

export default Navbar;
