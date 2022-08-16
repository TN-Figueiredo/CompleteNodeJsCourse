const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tnfigueiredotv@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: ''
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tnfigueiredotv@gmail.com",
    subject: "We are sorry to see you go!",
    text: `We are sorry to let you go ${name}. Is there anything we could have done better to have kept you onboard?`,
    // html: ''
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
