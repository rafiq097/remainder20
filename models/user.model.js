const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    ID: {
        type: String, 
        required: [true, "Enter ID"]
    },
    NAME: {
        type: String,
        // required: [true, "Enter Name"]
    },
    GENDER: {
        type: String,
        // required: [true, "Enter Gender"]
    },
    DOB: {
        type: String,
        // required: [true, "Enter DOB"]
    },
    CASTE: {
        type: String,
        // required: [true, "Enter Caste"]
    },
    RANK: {
        type: Number,
        // required: [true, "Enter Rank"]
    },
    PUC_GPA: {
        type: Number,
        // required: [true, "Enter PUC GPA"]
    },
    SCHOOL: {
        type: String,
        // required: [true, "Enter School"]
    },
    MANDAL: {
        type: String,
        // required: [true, "Enter Mandal"]
    },
    DISTRICT: {
        type: String,
        // required: [true, "Enter District"]
    },
    P1S1: {
        type: Number,
        // required: [true, "Enter P1S1"]
    },
    P1S2: {
        type: Number,
        // required: [true, "Enter P1S2"]
    },
    P2S1: {
        type: Number,
        // required: [true, "Enter P2S1"]
    },
    P2S2: {
        type: mongoose.Schema.Types.Mixed,
        // required: [true, "Enter P2S2"]
    },
    THE_AVG: {
        type: Number,
        // required: [true, "Enter THE_AVG"]
    },
    P1: {
        type: String,
        // required: [true, "Enter P1"]
    },
    P2: {
        type: String,
        // required: [true, "Enter P2"]
    },
    STREAM: {
        type: String,
        // required: [true, "Enter Stream"]
    },
    BRANCH: {
        type: String,
        // required: [true, "Enter Branch"]
    },
    E1S1: {
        type: Number,
        // required: [true, "Enter S1"]
    },
    E1S2: {
        type: Number,
        // required: [true, "Enter S2"]
    },
    ENGG_AVG: {
        type: Number,
        // required: [true, "Enter ENGG AVG"]
    },
    CET_NO: {
        type: Number,
        // required: [true, "Enter CET HT NO."]
    },
    Image: {
        type: String,
        // required: [true, "Enter Image URL"]
    },
    FATHER: {
        type: String,
        // required: [true, "Enter Father's Name"]
    },
    ROOM: {
        type: String,
        // required: [true, "Enter Room"]
    },
    PHONE: {
        type: String,
        // required: [true, "Enter Phone"]
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema, "R20");

module.exports = User;
