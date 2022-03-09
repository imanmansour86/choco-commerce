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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContiner />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
