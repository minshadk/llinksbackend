const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

console.log(process.env.URL)


mongoose
  .connect(process.env.URL)
  .then(() => console.log("connected to MOngodb"))
  .catch((err) => console.error("ITs an error from "));

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App running on port ${3002}`);
});

