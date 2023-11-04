const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./Routes/url_shortner_route");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 3000;

// Connect to MongoDB database using Mongoose.
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error(err));

// mongoose.connect("mongodb://127.0.0.1:27017/url_shortner", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Connected to MongoDB");
// })
// .catch((err) => {
//   console.error("Error connecting to MongoDB:", err);
// });
//middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

//Listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
