// const dotenv = require("dotenv").config();
// const mongodb = {
//     users: require('./models/users'),
//     setUsers: function (data) { this.users = data }
// }
// const jwt = require('jsonwebtoken');

// const handleRefreshToken = (req, res) =>{
// const cookies = req.cookies
// if (!cookies?.jwt) return resizeBy.sendStatus(401);
// console.log(cookies.jwt);
// const refreshToken = cookies.jwt;

// const foundUser = users.find(person => person.refreshToken === refreshToken);
// if (!foundUser) return resizeBy.sendStatus(403);

// jwt.verify(
//     refreshToken,
//     process.env.REFRESH_TOKEN_SECRET,
//     (err, decoded) => {
//         if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
//         const accessToken = jwt.sign(
//             { "username": decoded.username },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: '5mins'}

//         );
//         res.json({ accessToken})
//     }
// )
// }
// module.exports = {handleRefreshToken}