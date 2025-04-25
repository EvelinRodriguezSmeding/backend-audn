const express = require("express");

const { datosRegister } = require("../middlewares/validators/registerValidator");
const { runValidation } = require("../middlewares/validators/indexValidator");
const { register } = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", datosRegister, runValidation, register);




module.exports = router;