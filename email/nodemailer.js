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
        console.log(to, subject);
        const mailOptions = {
            from: 'rafiqshaik097@gmail.com',
            to,
            subject,
            html
        };

        // await transporter.sendMail(mailOptions, (error, info) => {
        //     console.log(to, subject, text);
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log(`Email sent to ${to} \n`+ info.response);
        // });
        // console.log(to, subject, text);
        const info = await transporter.sendMail(mailOptions);

        // Log success message if email sent successfully
        console.log(`Email sent to ${to}. Message ID: ${info.messageId}`);

        return true;
    }
    catch(err){
        console.log(err.message);
    }
};

module.exports = sendEmail;