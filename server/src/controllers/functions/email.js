var nodemailer = require('nodemailer');
module.exports = {
    sendEmail : function (email, token){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chouaib7991@gmail.com',
                pass: 'lgjilqnjjkhawzlz'
            }
        });
        const url = `http://localhost:3000/confirmation/${token}`;
        var mailOptions = {
            from: 'chouaib7991@gmail.com',
            to: email,
            subject: 'Confirm your account',
            html: `<strong>Please click to verify your email</strong><button><a href="${url}">Click me</a></button>
            <br><br><hr> <p>Created With love By: Elchouai & Mgoulman </p>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
    sendResetEmail : function (email, token){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'chouaib7991@gmail.com',
                pass: 'lgjilqnjjkhawzlz'
            }
        });
        const url = `http://localhost:3000/resetPassword/${token}`;
        var mailOptions = {
            from: 'chouaib7991@gmail.com',
            to: email,
            subject: 'Reset your password',
            html: `<strong >Click in the link below to reset your password</strong><br><button><a href="${url}">Click me</a></button>
            <br><br><hr> <p>Created With love By: Elchouai & Mgoulman </p>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
};