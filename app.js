const nodeMailer = require('nodemailer')
require("dotenv").config()

const emailHtml = `
    <h1> Hello World! </>
    <p>Esto es el cuerpo del Mail enviado por Nodemailer!<p/>
`

async function main() {
    
    const transporterSettings = nodeMailer.createTransport({
        host: process.env.EMAIL_SERVER,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    })

    //it returns if the information was sent or not, if it wass succesful or not. 
    const info = await transporterSettings.sendMail({
        from: `Nodemailing Testing <${process.env.EMAIL}>`,
        to: process.env.TESTING_EMAIL,
        subject: 'Probando, probando, 123',
        html: emailHtml
    })

    console.log("Message sent. messageId: " + info.messageId)


}

main().catch(e => console.log(e))