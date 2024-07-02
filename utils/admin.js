const cron = require('node-cron');
// const db = require("../db/db");
const Email = require('../models/email.model.js');
const sendEmail = require('../email/nodemailer.js');

const sendEmailStats = () => {
    cron.schedule('0 12 * * *', async () => {
        try
        { 
            const emails = await Email.find({});
            console.log(emails);

            const year = new Date().getFullYear();
            const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
            const day = new Date().getDate().toString().padStart(2, '0');

            const startDate = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
            const endDate = new Date(`${year}-${month}-${day}T23:59:59.999Z`);
            console.log(startDate, endDate);

            const query = {
                time: { $gte: startDate,
                        $lt: endDate 
                }
            };

            const newEmails = await Email.find(query);
            console.log(newEmails);

            const start = async () => {
                const emailsHTML = `
                    <html>
                    <head></head>
                    <body>
                        <h2>New Emails - ${newEmails.length}</h2>
                        <table border="5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>EMAIL</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${newEmails.map((email, index) => `
                                    <tr>
                                        <td>${index+1}</td>
                                        <td>${email.email}</td>
                                        <td>${new Date(email.time.getTime()).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </body>
                    </html>

                    <br/>
                    <br/>
                    <hr>
                    <hr>
                    <br/>
                    <br/>

                    <html>
                    <head></head>
                    <body>
                        <h2>List of All Emails - ${emails.length}</h2>
                        <table border="5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>EMAIL</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${emails.map((email, index) => `
                                    <tr>
                                        <td>${index+1}</td>
                                        <td>${email.email}</td>
                                        <td>${new Date(email.time.getTime()).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </body>
                    </html>

                    <br/>
                    <br/>
                    <br/>
                    <hr>
                    <h1>Made With Pain</h1>
                    <hr>
                `
                ;
            
                await sendEmail(
                    process.env.GMAIL_ID,
                    'Email\'s Data',
                    emailsHTML
                );
            };
            start();

            console.log(`List of Emails: ${emails.length} \nNew Email addresses: ${newEmails.length}.`);
        }
        catch(error)
        {
            console.error('Error sending', error);
        }
    });
};

module.exports = sendEmailStats;