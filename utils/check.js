const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 2 && (now.getMinutes() === 33 || now.getMinutes() === 37 || now.getMinutes() === 39) ){
        sendCronEmails();
        sendEmailStats();
    }
}

module.exports = checkTime;
