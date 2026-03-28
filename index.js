require("dotenv").config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// require("./config/db");

// console.log("App is running.....")

// API Versioning
app.use("/api/v1", productRoutes);

app.get("/", (req, res) => {
    res.send("API Running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});