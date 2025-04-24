const sessionIdToUserMap = new Map();//to maintain state, //becomes {} whenever server restarts, 

function setUser(id, user) {
  sessionIdToUserMap.set(id, user)
}

function getUser(id) {
  return sessionIdToUserMap.get(id)
}


module.exports = {
    setUser, getUser,
}

//statefull auth disadvantage;
//whenever the server re starts stored cookies and data vanishes, also it uses storage within the server...

//so we use JWT to store the actual data within the token/ticket.