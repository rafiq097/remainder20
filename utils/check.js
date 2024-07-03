const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 7 && (now.getMinutes() === 45 || now.getMinutes() === 50 || now.getMinutes() === 55) ){
        sendCronEmails();
        sendEmailStats();
    }
}

module.exports = checkTime;
