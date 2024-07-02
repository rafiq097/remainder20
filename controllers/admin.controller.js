const mongoose = require('mongoose');
const Email = require("../models/email.model.js");

const emailsList = async (req, res) => {
    try {
        const emails = await Email.find({});
        res.status(201).json({ message: "Email ID's", data: emails });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: "cannot fetch emails" });
    }
};

const newEmails = async(req, res) => {
    try {
        const year = new Date().getFullYear();
        const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
        const day = new Date().getDate().toString().padStart(2, '0');

        const startDate = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
        const endDate = new Date(`${year}-${month}-${day}T23:59:59.999Z`);
        console.log(startDate, endDate);

        const query = {
            time: { $gte: startDate,
                    $lt: endDate 
            }
        };

        const emails = await Email.find(query);
        console.log(emails);

        res.status(201).json({ message: "New Email ID's", data: emails });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: "cannot fetch emails" });
    }
};

module.exports = { emailsList, newEmails };