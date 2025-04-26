const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectMongoDb } = require("./connection");

const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const { checkAuthentication, restrictTo } = require("./middlewares/auth");

const app = express();
const PORT = 5001;

connectMongoDb("mongodb://127.0.0.1:27017/shortner").then(() => {
  console.log("MongoDb Connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);
app.listen(PORT, () => {
  console.log("Server started at PORT:", PORT);
});
