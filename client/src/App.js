import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import MainContiner from "./components/MainContainer";
import SingleProduct from "./components/SingleProduct";
import NavTabs from "./components/NavTabs";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/Signup";

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<MainContiner />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
