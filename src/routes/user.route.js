const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/",userController.get);
router.get("/add-user",userController.addUser);
router.post("/add-user",userController.save);

module.exports = router;