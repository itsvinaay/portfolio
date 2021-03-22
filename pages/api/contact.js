export default function (req, res) {

  require('dotenv').config()
  let nodemailer = require('nodemailer')

  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'winchbot.do.not.reply@gmail.com',
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'winchbot.do.not.reply@gmail.com',
        to: 'ejwinch1@gmail.com',
        subject: `Portfolio Message From ${req.body.name}`,
        text: req.body.body,
        html: `<div>${req.body.body}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })

    const mailDataReply = {
        from: 'winchbot.do.not.reply@gmail.com',
        to: req.body.email,
        subject: `Thanks for the message, ${req.body.name}!`,
        text: 'Hello, I am Winchbot! You sent a message through the Contact form on Elyssa Winch\'s portfolio, and she instructed me to say thanks! Your message has been received, and you should get a reply soon from ejwinch1@gmail.com. Beep boop, Winchbot out.',
        html: 
        '<div><h3>Hello, I am Winchbot!<p>You sent a message through the Contact form on <a href="https://elyssa-winch.herokuapp.com/">Elyssa Winch\'s portfolio,</a> and she instructed me to say thanks! Your message has been received, and you should get a reply soon from ejwinch1@gmail.com. Meanwhile, check out Elyssa\'s <a href="https://www.linkedin.com/in/elyssa-winch/">Linkedin</a> and <a href="https://github.com/ElyssaW">Github!</a></p><p>Beep boop, Winchbot out.</p></h3></div>'
    }

    transporter.sendMail(mailDataReply, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })

    console.log(req.body)
    res.send('success')
  }
}