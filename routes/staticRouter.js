const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/", restrictTo(['NORMAL']), async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
