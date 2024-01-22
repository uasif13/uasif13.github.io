const app = express()
const port = 3000
const nodemailer = require("nodemailer")

// const transporter = 

app.get("/formData", get, (name,email,body) => {
    const name = name
    const email = email
    const body = body
    console.log(name,email,body)

    // await transporter

})

app.connectServer(port, host, ()=> {
    console.log("Server is running")
})