const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/", routes);


mongoose.connect("mongodb://localhost:27017/Certiapplatest");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
