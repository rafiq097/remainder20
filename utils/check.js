const sendCronEmails = require("../email/cron.js");
const sendEmailStats = require("./admin.js");

function checkTime()
{
    const now = new Date();
    console.log(now);
    if(now.getHours() === 15 && now.getMinutes() === 37){
        sendCronEmails();
        sendEmailStats();
    }
}

module.exports = checkTime;