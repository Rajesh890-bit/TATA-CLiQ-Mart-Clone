import "./App.css";
import AuthDetails from "./Context/AuthDetails";
import SignIn from "./Components/Common/SignIn";
import SignUp from "./Components/Common/SignUp";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
