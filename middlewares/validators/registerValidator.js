const { check } = require("express-validator");

const datosRegister = [
  check("email")
    .notEmpty()
    .withMessage("El email es un campo requerido")
    .isEmail()
    .withMessage("Debe ser un email válido"),

  check("username")
    .notEmpty()
    .withMessage("El nombre de usuario es requerido")
    .isLength({ min: 3, max: 20 })
    .withMessage("Debe tener entre 3 y 20 caracteres"),

  check("password")
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isLength({ min: 8, max: 30 })
    .withMessage("La contraseña debe tener entre 8 y 30 caracteres"),
];

module.exports = { datosRegister };
