const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
        user: "kha9647@gmail.com", // generated ethereal user
        pass: "youtube123%*", // generated ethereal password
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
const sendSms = (email, name) => {
    // console.log(email, name)
    // let info = await transporter.sendMail({
    //     from: '"Shannon It " <kha9647@gmail.com>', // sender address
    //     to: email, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>welcome to shannon it</b>", // html body
    // });
    console.log("emaiL", email, "name", name)
    var mailOptions = {
        from: ' "Shannon It" <kha9647@gmail.com>',
        to: email,
        subject: 'Welcome to Shannon It',
        text: "Hope a incredible journey with us",
        html: ` <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
     <html lang="en">
     <head>
         <meta name="viewport" content="width=device-width;initial-scale=1.0; user-scalable=1;" />
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet">
         <title>Shannon It</title>
     
     </head>
     <body style="font-family: 'Roboto', sans-serif !important;background-color: #333;">
         
         <table style="margin:0 auto; padding:0; cellpadding:0; cellspacing:0; background-color: #ffffff; width: 600px; height: auto;text-align: center; ">
             <tr>
                 <td style="text-align: center;">
                 </td>
             </tr>
             <tr >
                 <td style="padding: 20px; text-align: center;">
                 </td>
             </tr>
             <tr>
                 <td style="text-align: center;padding: 6% 6% 0%;">
                     <p><b style="font-size: 25px; font-weight: 600">Hi ${name},</b></p>
                     <p style="font-size: 18px; font-weight: 400">Thank you for choosing Shannon It</p>
                 </td>
             </tr>
             <tr>
                 <td style="text-align: center;padding: 6% 6% 0%;">
                     <p style="font-size: 18px; font-weight: 400">Web Development</p>
                     <p style="font-size: 18px; font-weight: 400;">Mobile App development</p>
                     <p style="font-size: 18px; font-weight: 400">Desktop App Development</p>
                     <p style="font-size: 18px; font-weight: 400;">Cloud Solutions</p>
                     <p style="font-size: 18px; font-weight: 400;">Digital Marketting</p>
                 </td>
             </tr>
             <tr >
                 <td style="padding: 10px; text-align: center;">
                     <p style="margin-bottom: 25px;font-size: 18px; font-weight: 400;">Contact Us:</p>
                     <p style="margin-bottom: 0px;font-size: 15px; font-weight: 200;">Bangladesh office</p>
                     <p style="margin-bottom: 10px;font-size: 15px; font-weight: 200;">Rana Ahamed</p>
                     <a href="https://api.whatsapp.com/send?phone=01743136127" class="btn" style="text-decoration: none; background-color: #5E6FF3; padding: 10px 50px; color: #ffffff;border-radius: 20px;font-size: 20px; font-weight: 600;">Whatsapp (Bangladesh):+8801743136127</a>
                     <div  style="margin: 20px;"></div>
                   
                     
                     <a href="mailto:rana.buddy@gmail.com"  class="btn" style="text-decoration: none; background-color: #5E6FF3; padding: 10px 50px; color: #ffffff;border-radius: 20px;font-size: 20px; font-weight: 600;">Email:rana.buddy@gmail.com
                     </a>
                     <p style="margin-top: 40px;font-size: 15px; font-weight: 200;">Cyprus office</p>
                     <p style="margin-bottom:10px;font-size: 15px; font-weight: 200;">Moshiur Rahman</p>
                     <a href="https://api.whatsapp.com/send?phone=+35796257724" class="btn" style="text-decoration: none; background-color: #5E6FF3; padding: 10px 50px; color: #ffffff;border-radius: 20px;font-size: 20px; font-weight: 600;">Whatsapp (Cyprus):+35796257724
                     </a>
                     <div  style="margin: 20px;"></div>
                     <a href="mailto:nobinxm@gmail.com" class="btn" style="text-decoration: none; background-color: #5E6FF3; padding: 10px 50px; color: #ffffff;border-radius: 20px;font-size: 20px; font-weight: 600;">Email:rana.buddy@gmail.com</a>
                 </td>
             </tr>
             <tr>
                 <td style="padding: 6% ;">	
                     <div style="margin: 0 auto;">
                         
                     </div>
     
                 </td>
             </tr>
             <tr>
                 <td style="text-align: center;padding: 5%;">
                     
                     <p style="margin: 0;font-size: 18px; font-weight: 600;"><b>The Shannon Team</b></p>
                     <p style="margin: 0;"><a href="https://shannonit.vercel.app/" style="color: #2AB6FE;text-decoration: none;font-size: 18px; font-weight: 400;">www.shannon.com</a></p>
                 </td>
             </tr>
             <tr style="background: rgb(154,113,231);background: -moz-linear-gradient(left,  rgba(154,113,231,1) 0%, rgba(108,50,222,1) 57%);
     background: -webkit-linear-gradient(left,  rgba(154,113,231,1) 0%,rgba(108,50,222,1) 57%);background: linear-gradient(to right,  rgba(154,113,231,1) 0%,rgba(108,50,222,1) 57%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9a71e7', endColorstr='#6c32de',GradientType=1 );
     color: #ffffff;text-align: center;">
                 <td>
                     <footer>
                         <p style="margin-bottom: 0px;">
                             <a href="https://shannonit.vercel.app/"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sreelogo.com%2Fproduct%2Fabstract-s-logo-design-free-download%2F&psig=AOvVaw3t1TpuVBVKG84LrUZ9VlJT&ust=1650718487001000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDdmNzbp_cCFQAAAAAdAAAAABAM" alt="" style="height: 40px;padding-bottom: 15px;"></a>
                         </p>
                         <p style="
         margin-top: 2px;
     ">
                             <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/fb.png" alt="" style="width: 40px; height: 40px;margin-right: 15px;"></a>
                             <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/ins.png" alt="" style="width: 40px; height: 40px;margin-right: 15px;"></a>
                             <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/yt.png" alt="" style="width: 40px; height: 40px;margin-right: 15px;"></a>
                         <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/tw.png" alt="" style="width: 40px; height: 40px;margin-right: 15px;"></a>
                     <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/in.png" alt="" style="width: 40px; height: 40px;margin-right: 15px;"></a>
                     <a href="https://www.sowpme.co/"><img src="https://tashinsteel.com/email_photo/ttk.png" alt="" style="width: 40px; height: 40px;"></a>
                 </p>
                 <p style="font-weight: 400;margin: 0;">No longer want to receive these email? Unsubscribe.</p>
                 <p style="
         margin-top: 2px;
     "><a href="https://shannonit.vercel.app/" style="color: #ffffff;text-decoration: none;font-weight: 400;">www.shannon.com</a></p>
                     </footer>
                 </td>
             </tr>
         </table>
     
     </body>
     </html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendSms
