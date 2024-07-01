const Email = require("../models/email.model.js");

const registerEmail = async(req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try{
        const user = await Email.create({ email });
        console.log(user);
        res.status(201).json({ message: "Email Subscribed", user });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const checkUser = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try{
        const user = await Email.findOne({ email: email });
        if(user)
            res.status(201).json({ message: "User Already Subscribed", success: true, user });
        else
            res.status(404).json({ message: "User Not Found", success: false });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { registerEmail, checkUser };