const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashwinarya101:U4-JWaC8df_bshy@cluster0.ou9mgmx.mongodb.net/shippingbox?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });