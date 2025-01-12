const express = require("express");
const dotenv = require("dotenv").config();

const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
