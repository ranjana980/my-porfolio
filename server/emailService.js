const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service provider
  auth: {
    user: "ranjana20@navgurukul.org",
    pass: "krvo neoq uzgj jang",
  },
});

module.exports = {
  sendEmail: (values) => {
    const mailOptions = {
      from: values.email,
      to: "rc6307108245@gmail.com",
      subject:values.subject,
      html: `
      <html>
      <head>${values.name}</head>
      <body>
        <h1>Name: ${values.name}</h1>
        <p>Message: ${values.message}</p>
        <b>Contact Number: ${values.phone}</b>
      </body>
      </html>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
