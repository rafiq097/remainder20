const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = async (url) => {
    try {
        await mongoose.connect(url
            // , 
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            // }
        )
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));
    }
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = db;