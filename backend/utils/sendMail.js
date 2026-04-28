// const nodemailer = require("nodemailer");

// const sendMail = async (to, subject, text) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "sumit.kumar260591@gmail.com",   // 👈 apna gmail
//         pass: "ksnq ztkv jigl ghql"      // 👈 app password
//       }
//     });

//     const mailOptions = {
//       from: "yourgmail@gmail.com",
//       to,
//       subject,
//       text
//     };

//     await transporter.sendMail(mailOptions);

//     console.log("Email sent successfully ✅");

//   } catch (error) {
//     console.log("Email error:", error);
//   }
// };

// module.exports = sendMail;