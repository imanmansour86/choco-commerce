const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "pk_test_51KbALaFc4X4KsU22jdX47Ta9QxT1GUQGJhzzsypQbExkjRSUDyf8c9F4CaEMj741evosIEXTzEr3lAO2Ib425vsb00DACZuj78"
    : "sk_test_51KbALaFc4X4KsU222Lb1jwB475VSo6O8ntIarZCycJMa39T2WdksUTezDEBAG28gj02JjcHHjbH1FD2xgBMMrFPk00LLJ3fRYI";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
