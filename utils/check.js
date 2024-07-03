const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 4 && now.getMinutes() === 59){
        sendCronEmails();
        sendEmailStats();
    }

    if(now.getHours() === 5 && (now.getMinutes() === 0 || now.getMinutes() === 30 || now.getMinutes() === 59)){
        sendEmailStats();
    }
}

module.exports = checkTime;