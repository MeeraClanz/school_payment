import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./component/Signin";
import Header from "./component/Header";
import Subheader from "./pages/Subheader";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Header /> */}
      {/* <Admin /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
