const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const app = express();
const productRoute = require("./routes/productRoute");

app.use("/products", productRoute);

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        app.listen(5000, () => console.log("Server started on port 5000"));
    } catch (err) {
        console.error(err);
    }
})();
