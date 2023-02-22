import "./App.css";
import AuthDetails from "./Components/Common/AuthDetails";
import BasicTextFields from "./Components/Common/SignIn";
import SignUp from "./Components/Common/SignUp";

function App() {
  return (
    <div className="App">
      <AuthDetails />
      <BasicTextFields />
      <SignUp />
    </div>
  );
}

export default App;
