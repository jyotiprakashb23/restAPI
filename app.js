const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = 3000;

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

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