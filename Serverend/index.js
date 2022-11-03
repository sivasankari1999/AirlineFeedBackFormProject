const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());
require("dotenv").config()
//connection to mongoose
const connection_string = process.env.CONNECTION_STRING;

  const port = 3001;
  const uri = process.env.CONNECTION_STRING;
  app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });

  app.use(require("./routes/FormPageRoute.js"));

mongoose.connect(uri)
.then (()=>console.log("Mongodb connection is established successfully"))
.catch((error)=>console.error("Mongodb connection failed:",error.message))