const Email = require("../models/email.model.js");

const registerEmail = async(req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try{
        // await Email.deleteMany({});
        const findEmail = await Email.findOne({ email: email });
        if(findEmail)
            res.status(401).json({ message: "Already Subscribed"});

        console.log(email, "\t", req.body);
        const user = await Email.create({ email });
        console.log(user);
        res.status(201).json({ message: "Email Subscribed", user });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { registerEmail };