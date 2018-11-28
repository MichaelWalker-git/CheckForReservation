const nodemailer = require('nodemailer');

exports.sendEmail = () => {
	// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
	nodemailer.createTestAccount((err, account) => {
		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.USERNAME,
				pass: process.env.PASSWORD
			},
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: `${process.env.USERNAME}`, // sender address
			to: 'michaelhuytran@gmail.com, 7145150242@mms.att.net ', // list of receivers
			subject: 'Septime Reservation Available Hurry! See here: https://module.lafourchette.com/en_GB/module/10889-d34ca#/54499/pdh?pax=2', // Subject line
			text: 'Check reservations here: https://module.lafourchette.com/en_GB/module/10889-d34ca#/54499/pdh', // plain text body
			html: '<b>RESERVATION AVAILABLE</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.error(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	});
};

