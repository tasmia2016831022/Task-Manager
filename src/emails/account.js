//const sendgridAPIKey = "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";
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'tasmia22@student.sust.edu',
    from: 'tasmia.alamgir@pathao.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);