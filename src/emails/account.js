const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "gct.165118.a@gmail.com",
  from: "muhammadsameetulhassan43@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
};

sgMail.send(msg);
