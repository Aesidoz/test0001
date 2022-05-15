const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", userController.register);
router.put("/:id", userController.updateUser);

module.exports = router;
