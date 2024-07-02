const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    try{
        const mailOptions = {
            from: 'rafiqshaik097@gmail.com',
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);

        console.log(`Email sent to: ${to}`);
        return true;
    }
    catch(err){
        console.log(err.message);
        return false;
    }
};

module.exports = sendEmail;