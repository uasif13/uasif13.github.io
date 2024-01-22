const app = express()
const port = 3000
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        user: "uasif13@gmail.com",
        pass: "asdfghjkl;'1234567890"
    }
})

app.get("/formData", post, (name,email,body) => {
    const name = name
    const email = email
    const body = body
    console.log(name,email,body)

    // await transporter

})

app.connectServer(port, host, ()=> {
    console.log("Server is running")
})