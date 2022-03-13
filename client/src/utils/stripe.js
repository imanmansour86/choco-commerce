const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_51KbALaFc4X4KsU22jdX47Ta9QxT1GUQGJhzzsypQbExkjRSUDyf8c9F4CaEMj741evosIEXTzEr3lAO2Ib425vsb00DACZuj78"
    : "pk_test_51KbALaFc4X4KsU22jdX47Ta9QxT1GUQGJhzzsypQbExkjRSUDyf8c9F4CaEMj741evosIEXTzEr3lAO2Ib425vsb00DACZuj78";

export default STRIPE_PUBLISHABLE;
