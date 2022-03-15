import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

import MainContiner from "./components/MainContainer";
import SingleProduct from "./components/SingleProduct";
import NavTabs from "./components/NavTabs";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/Signup";
import Cart from "./components/pages/Cart/Cart";
import RouteChangeTracker from "./components/RouteChangeTracker";
import ReactGA from "react-ga";

const TRACKING_ID = "G-ST37X3SNG0"; // YOUR_OWN_TRACKING_ID or store in env
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <NavTabs />
        <Routes>
          <Route path="/" element={<MainContiner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route
            path="/checkout"
            element={
              <CheckoutForm
                name={"LaRoche Chocolate"}
                description={"Current Balance"}
                amount={4.99}
                shippingAddress={"3375 Payne Drive"}
              />
            }
          /> */}
          <Route path="/products/:id" element={<SingleProduct />} />
          <RouteChangeTracker />
        </Routes>
      </StoreProvider>
    </Router>
  );
};

export default App;
