require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

app.use(
  "/api/transactions",
  require("./routes/transactionRoutes")
);

app.listen(9000, () => {
  console.log("Server Running");
});