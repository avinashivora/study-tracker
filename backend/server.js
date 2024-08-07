const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const connectDataBase = async () => {
  try {
    mongoose.connect(process.env.DATABASE_LOCAL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error: ", error);
  }
};
connectDataBase();
mongoose.set("strictQuery", false);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//import routes below .use()

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));
