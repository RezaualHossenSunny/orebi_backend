const nodemailer = require("nodemailer");
 async function senEmail(email, subject,template){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sunnyrahman960@gmail.com",
          pass: "euwhygpwjwccnkul",
        },
      });

      const info = await transporter.sendMail({
        from: 'OREBI',
        to: email, 
        subject:subject,
        html: template
      });
 }

 module.exports=senEmail;