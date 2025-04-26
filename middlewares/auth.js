const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");

  let user;
  try {
    user = getUser(userUid);
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.redirect("/login");
  }

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) {
    req.user = null;
    return next();
  }
  try {
    const user = getUser(userUid);
    req.user = user;
  } catch (err) {
    console.error("JWT error:", err.message);
    req.user = null;
  }

  next();
}

module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth,
};
