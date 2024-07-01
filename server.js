const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const userRoutes = require("./routes/user.routes.js");

app.use("/user", userRoutes);

const db = require("./db/db.js");
const url = process.env.MONGO_URI;
db(url);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on PORT ${PORT}`);
});