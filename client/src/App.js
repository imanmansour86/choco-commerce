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
import CheckoutForm from "./components/pages/CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51KbALaFc4X4KsU22jdX47Ta9QxT1GUQGJhzzsypQbExkjRSUDyf8c9F4CaEMj741evosIEXTzEr3lAO2Ib425vsb00DACZuj78"
// );

// const WrappedCheckoutForm = () => {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: `sk_test_51KbALaFc4X4KsU222Lb1jwB475VSo6O8ntIarZCycJMa39T2WdksUTezDEBAG28gj02JjcHHjbH1FD2xgBMMrFPk00LLJ3fRYI`,
//   };
//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// };
import ReactGA from "react-ga";
const TRACKING_ID = "G-ST37X3SNG0"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
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
        </Routes>
      </StoreProvider>
    </Router>
  );
}

export default App;
