require('dotenv').config()
const express = require('express')
const next = require('next')
const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let nodemailer = require('nodemailer')
console.log(process.env.password)

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

    server.post('/api/contact', (req, res) => {
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
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, () => {
        console.log(`Listening on ${port}`)
    })
})