const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 7 && now.getMinutes() === 30){
        sendCronEmails();
        sendEmailStats();
    }
}

module.exports = checkTime;
