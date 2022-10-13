export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "776vinay@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });

    const mailData = {
      from: "776vinay@gmail.com",
      to: "vinay.singh@imentus.com",
      subject: `Portfolio Message From ${req.body.name}`,
      text: req.body.body,
      html: `<div>${req.body.body}</div><p>Sent from: ${req.body.email}</p><div><table><tr><td style="text-align:center;"></td> <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">"&copy;<strong>www.rakeshmandal.com</strong></p></td></table></div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    const mailDataReply = {
      from: "776vinay@gmail.com",
      to: req.body.email,
      subject: `Thanks for the message, ${req.body.name}!`,
      text:
        "Hello, I am Vinay! You sent a message through the Contact form on Vinay Singh's portfolio, and she instructed me to say thanks! Your message has been received, and you should get a reply soon from 776vinay@gmail.com. Beep boop, Vinay out.",
      html:
        '<div><h3>Hello, I am Vinay!</h3><p>You sent a message through the Contact form on <a href="https://elyssa-winch.herokuapp.com/">Elyssa Winch\'s portfolio,</a> and she instructed me to say thanks! Your message has been received, and you should get a reply soon from 776vinay@@gmail.com. Meanwhile, check out Elyssa\'s <a href="https://www.linkedin.com/in/elyssa-winch/">Linkedin</a> and <a href="https://github.com/ElyssaW">Github!</a></p><p><h3>Beep boop, Winchbot out.</p></h3></div><a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a><center><font size="3"><span style="font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#fdfdfd;font-size:16px;line-height:16px"><span class="il">Confirm</span>&nbsp;<span class="il">email</span>&nbsp;address</span></font></center><p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">Hi Jane Doe!</p><p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">You updated your <span class="il">email</span> address to <span style="color:#2b5a83" id="m_-7626415423304311386body_email"><a href="mailto:jane@gmail.com" target="_blank">Jdoe@gmail.com</a></span>. <span class="il">Confirm</span> your <span class="il">email</span> address to continue capturing and sharing your moments with the world.</p><a href="javascript:void(0);"style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset Password</a><table><tr><td style="text-align:center;"></td> <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">"&copy;<strong>www.rakeshmandal.com</strong></p></td></table>',
    };

    transporter.sendMail(mailDataReply, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    console.log(req.body);
    res.send("success");
  }
}
