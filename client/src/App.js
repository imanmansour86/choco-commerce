import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import MainContiner from "./components/MainContainer";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContiner />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
