const sessionIdToUserMap = new Map();//becomes {} whenever server restarts

function setUser(id, user) {
  sessionIdToUserMap.set(id, user)
}

function getUser(id) {
  return sessionIdToUserMap.get(id)
}


module.exports = {
    setUser, getUser,
}
