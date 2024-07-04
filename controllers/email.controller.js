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
            res.status(201).json({ message: "Email Already Subscribed", success: true, user });
        else
            res.status(404).json({ message: "User Not Found", success: false });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteEmail = async(req, res) => {
    console.log(req.params);
    const { email } = req.params;
    try{
        const user = await Email.findOneAndDelete({ email: email });
        console.log(user);
        res.status(200).json({ message: "Email Deleted", success: true });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Internal server error", success: false });
    }
};

module.exports = { registerEmail, checkUser, deleteEmail };