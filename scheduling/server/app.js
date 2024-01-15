//imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

import homeRoutes from "./routes/home.js";

//app
const app = express();
dotenv.config({ path: "../.env" });

//db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
app.use("/home", homeRoutes);

//port
const port = process.env.PORT || 3001;

//listener
const server = app.listen(port, () => {
  console.log("Server is running");
});
