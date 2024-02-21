require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const { connectToDB } = require("./config/database");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routes/auth/signup"));
app.use("/auth", require("./routes/auth/login"));

const startServer = async () => {
  const { success, error } = await connectToDB();
  if (!success) {
    return error;
  }
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
  });
};

startServer();
