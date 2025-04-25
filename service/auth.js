//const sessionIdToUserMap = new Map();//to maintain state, //becomes {} whenever server restarts,

const jwt = require("jsonwebtoken");
const secret = "shubh_secret";
// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user)
// }

function setUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secret);
}

// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }

function getUser(token) {
  if(!token) return null;
  else return jwt.verify(token, secret);
}


module.exports = {
  setUser,
  getUser,
};

//statefull auth disadvantage;
//whenever the server re starts stored cookies and data vanishes, also it uses storage within the server...

//so we use JWT to store the actual data within the token/ticket.
