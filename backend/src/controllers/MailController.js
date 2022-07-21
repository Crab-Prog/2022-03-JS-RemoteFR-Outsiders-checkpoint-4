const nodemailer = require("nodemailer");

class MailController {
  static index = async (req, res) => {
    const sender = req.body.email;
    const { subject } = req.body;
    const { message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: sender,
      to: process.env.MAIL_USER,
      subject,
      text: message,
    });

    transporter.sendMail(info, function mailer(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.warn("email sent successfully");
        result.status(200);
      }
    });

    res.status(200).json({
      status: "success",
      message: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  };
}

module.exports = MailController;
