const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.use(express.json());

//routes
const userRoutes = require("./routes/user.routes.js");
const adminRoutes = require("./routes/admin.routes.js");

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);


//db
const db = require("./db/db.js");
const url = process.env.MONGO_URI;
db(url);

//schedules
const sendCronEmails = require("./email/cron.js");
sendCronEmails();
const sendEmailStats = require("./utils/admin.js");
sendEmailStats();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on PORT ${PORT}`);
});