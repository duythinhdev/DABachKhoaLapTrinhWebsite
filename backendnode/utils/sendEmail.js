const nodeMailer = require("nodemailer");
require('dotenv').config();
const sendEmail = async(options, req, res) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: false,
        // process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }

    });

    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        html: options.message
    }
    transporter.sendMail(mainOptions, function(err, info) {
        if (err) {
            console.log(err);
            req.flash('mess', 'Lỗi gửi mail: ' + err); //Gửi thông báo đến người dùng
            res.status(404).json({
                error: err
            });
        } else {
            console.log('Message sent: ' + info.response);
            req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); //Gửi thông báo đến người dùng
            res.status(200).json({
                info: info.response
            });
        }
    });
};

module.exports = sendEmail;