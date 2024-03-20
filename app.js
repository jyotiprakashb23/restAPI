require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//middleware to use the routes
app.use("/api/products", products_routes);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const start = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};

start();