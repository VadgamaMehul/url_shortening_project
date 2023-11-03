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
    useUnifiedTopology: true,
    // useCreateIndex: true, // Add this if you're using Mongoose >= 6
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json
app.use(cors());
app.use("/", routes); // Routing middleware

//Listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
