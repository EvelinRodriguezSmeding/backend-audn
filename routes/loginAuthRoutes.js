const express = require("express");

const { datosLogIn } = require("../middlewares/validators/loginValidator");
const { runValidation } = require("../middlewares/validators/indexValidator");
const { login } = require("../controllers/loginController");

const router = express.Router();


router.post("/login", datosLogIn, runValidation, login);

module.exports = router;
