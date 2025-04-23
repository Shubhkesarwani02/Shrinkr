const { getUser } = require('../service/auth')

async function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies.uid

  if (!userUid) return res.redirect('/login', { error: 'No Uid Found' })
  const user = getUser(userUid)
  if (!user) return res.redirect('/login', { error: 'No User Found' })

  req.user = user
  next()
}

module.exports = {
  restrictToLoggedInUserOnly,
}
