const cron = require('node-cron');
// const db = require("../db/db");
const User = require('../models/user.model.js');
const Email = require('../models/email.model.js');
const sendEmail = require('./nodemailer.js');

const sendCronEmails = () => {
    cron.schedule('* * * * *', async () => {
        try
        {  
            const now = new Date();
            const currentDay = now.getDate();
            const currentMonth = now.getMonth() + 1;

            const users = await User.find({
                DOB: { $regex: `^${currentDay.toString().padStart(2, '0')}/${currentMonth.toString().padStart(2, '0')}`, $options: 'i' }
            });

            const emails = await Email.find({});

            emails.forEach(async (email) => {
                const usersHTML = `
                    <html>
                    <head></head>
                    <body>
                        <h2>User List</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>BRAMCH</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.map(user => `
                                    <tr>
                                        <td>${user.ID}</td>
                                        <td>${user.NAME}</td>
                                        <td>${user.BRANCH}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </body>
                    </html>
                `;
            
                await sendEmail(
                    email.email,
                    'User List',
                    usersHTML
                );
            });

            console.log(`List of users ${emails.length} \n email addresses: ${emails}.`);
        }
        catch(error)
        {
            console.error('Error sending', error);
        }
    });
};

module.exports = sendCronEmails;