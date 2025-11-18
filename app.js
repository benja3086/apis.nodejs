const express = require("express");
const morgan = require("morgan");
const mongoose= require("mongoose");
require("dotenv").config();
//settings
let app = express();

mongoose.connect(process.env.MONGO_KEYS);

app.set("port", process.env.PORT || 3000)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan("dev"));

//routes
app.use("/", require("./src/router/usuarios.router"));

//server
app.listen(app.get("port"), () => {
  console.log("servidor corriendo el el puerto", app.get("port"));
});
  