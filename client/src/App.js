import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import Home from "./components/Home";
import MainContiner from "./components/MainContainer";
import SingleProduct from "./components/SingleProduct";
import NavTabs from "./components/NavTabs";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/Signup";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <Router>
      <StoreProvider>
        <NavTabs />
        <Routes>
          <Route path="/" element={<MainContiner />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </StoreProvider>
    </Router>
  );
}

export default App;
