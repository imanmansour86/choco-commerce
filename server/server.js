//Requirements
const path = require("path");
const express = require("express");
const routes = require("./controllers");
const cors = require("cors");
// const SERVER_CONFIGS = require("./constants/server");
// const bodyParser = require("body-parser");
// const CORS_WHITELIST = require("./constants/frontend");

// const configureRoutes = require("./routes");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//enable CORS
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
