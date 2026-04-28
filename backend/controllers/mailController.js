// const sendMail = require("../utils/sendMail");

// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const bcrypt = require("bcrypt");
//     const User = require("../models/User");

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     // 📩 SEND EMAIL
//    html: `
//   <h2>Welcome ${name} 🎉</h2>
//   <p>Your account has been created successfully.</p>
//   <p>Enjoy our food 🍕</p>
// `

//     res.status(201).json({
//       message: "User registered",
//       user
//     });

//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };