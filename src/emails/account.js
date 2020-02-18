const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



const sendWelcomeMail = async (email,name) => {
  const msg = {
    to: 'alamgirtasmia@gmail.com',
    from: 'tasmia.alamgir@pathao.com',
    subject: 'Test mail',
    text: `Hello, ${name}!! this is a test mail from Tasmia via sendgrid. Sorry to bother you :P `,
    html: '<strong>aPlease ignore this mail.</strong>',
  };
  await sgMail.send(msg);
  console.log(process.env.SENDGRID_API_KEY);
  console.log('mail sent');
}
module.exports = {
  sendWelcomeMail
}

  