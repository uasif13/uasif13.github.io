// Import express and create express application
const express = require("express")
const app = express()
// specify port and host for local server
const port = 3000
const host = "127.0.0.1"
const nodemailer = require("nodemailer")
const router = express.Router()

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        user: "uasif13@gmail.com",
        pass: "asdfghjkl;'1234567890"
    }
})

router.post("/formData", (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const body = req.body.body
    console.log(name,email,body)
    function sendEmail() {
        return Promise.resolve(
            transporter.sendMail({
                from: "${name} <${email}>",
                to: "uasif13@gmail.com",
                subject: "Hello from ${name}",
                text: body,
                html: "<h6>{body}</h6>"   
            })
        )
    }
    sendEmail.then(
        function(value) {
            console.log("Message sent: ${info.messageId}") 
        },
        function(error) {
            console.log(console.error)
        }
    )
    // async function sendEmail() {
    //     const info = await transporter.sendMail({
    //         from: "${name} <${email}>",
    //         to: "uasif13@gmail.com",
    //         subject: "Hello from ${name}",
    //         text: body,
    //         html: <h6>{body}</h6>
    //     }) 
    //     console.log("Message sent: ${info.messageId}")
    // }
    // sendEmail().catch(console.error)

})

app.listen(port, host, ()=> {
    console.log("Server is running")
})