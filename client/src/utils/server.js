const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://peaceful-gorge-21480.herokuapp.com/api/payment"
    : "http://localhost:3001/api/payment";

export default PAYMENT_SERVER_URL;
