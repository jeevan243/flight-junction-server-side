const express = require("express");
require("dotenv").config();
const connect = require("./config/db")

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());







app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log(`Server Running on Port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
})












