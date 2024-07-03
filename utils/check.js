const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 16 && now.getMinutes() === 19){
        sendEmailStats();
    }

    if(now.getHours() === 16 && now.getMinutes() === 29){
        sendCronEmails();
        sendEmailStats();
    }
}

module.exports = checkTime;