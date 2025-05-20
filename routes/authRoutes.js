const express = require("express");
const { datosRegister } = require("../middlewares/validators/registerValidator");
const { datosLogIn } = require("../middlewares/validators/loginValidator");
const { runValidation } = require("../middlewares/validators/indexValidator");
const { register } = require("../controllers/authControllers");
const { login } = require("../controllers/loginController");

const router = express.Router();

// Registro
router.post("/register", datosRegister, runValidation, register);

// Login
router.post("/login", datosLogIn, runValidation, login);

module.exports = router;
