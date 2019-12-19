const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index", {
    msg: "",
    err: "",
    title: "Home Page"
  });
});
module.exports = router;
