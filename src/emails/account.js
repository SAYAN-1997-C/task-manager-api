var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

const sendWelcomeEmail = (email , name) => {
    var data = {
        from : 'sayanjashu365@gmail.com',
        to : email,
        subject : 'Thanks for joining in',
        text : `welcome to the app. ${name}. Let me know how you get along with this app.`
    }
    return new Promise((resolve,reject) => {
        mailgun.messages().send(data , (error , body) => {
            if(error) {
                reject('Not ok')
            }
            resolve('ok')
        })
    })
}
const sendCancelationEmail = (email , name) => {
    var data = {
        from : 'sayanjashu365@gmail.com',
        to : email,
        subject : 'Sorry to see you go!',
        text : `goodbye ${name} . I hope to see you sometimes soon.`
    }
    return new Promise((resolve,reject) => {
        mailgun.messages().send(data , (error , body) => {
            if(error) {
                reject('Not ok')
            }
            resolve('Ok')
        })
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}