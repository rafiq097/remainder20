const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.use(express.json());

//routes
const userRoutes = require("./routes/email.routes.js");
const adminRoutes = require("./routes/admin.routes.js");

app.use("/email", userRoutes);
app.use("/admin", adminRoutes);


//db
const db = require("./db/db.js");
const url = process.env.MONGO_URI;
db(url);

//schedules
const sendCronEmails = require("./email/cron.js");
const sendEmailStats = require("./utils/admin.js");

app.get(`/admin/${process.env.ADMIN_KEY}`, async (req, res) => {
    try{
        await sendEmailStats();
        res.status(200).json({ message: "Email sent", success: true });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: error.message, success: false });
    }
});

app.get(`/email/${process.env.EMAIL_KEY}`, async (req, res) => {
    try{
        // await sendCronEmails();
        await sendEmailStats();
        res.status(200).json({ message: "Email sent to Users", success: true });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: error.message, success: false });
    }
})

const checkTime = require("./utils/check.js");
console.log("checkTime");
setInterval(checkTime, 60000);
console.log("checkTime");  

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on PORT ${PORT}`);
});