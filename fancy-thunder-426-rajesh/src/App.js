import "./App.css";
import AuthDetails from "./Context/AuthDetails";
import SignIn from "./Components/Common/SignIn";
import SignUp from "./Components/Common/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
