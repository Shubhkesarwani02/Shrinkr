const { getUser } = require('../service/auth')

async function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid
  const user = getUser(userUid)

  if (!userUid || !user) return res.redirect('/login')
  else {
    req.user = user
    next()
  }
}

module.exports = {
  restrictToLoggedInUserOnly,
}
