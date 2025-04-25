const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  //for res type auth, get userId from the headers,
  //const userId = req.headers["authorization"]
  if (!userUid) return res.redirect("/login");

  //const token = userId.split('Bearer ')[1];
  //pass this token to getUser

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
  //const userUid = req.headers["authorization"];
  if (!userUid) {
    req.user = null;
    return next();
  }
  //const token = userId.split("Bearer ")[1];
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
