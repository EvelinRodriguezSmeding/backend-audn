const jwt = require("jsonwebtoken");

/* const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Acceso al recurso denegado" });
    return;
  }
  try {
    //verifico que el token sea valido
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    //cambiar la request: agrega un nuevo objeto denominado user.
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "El token es invalido", mensaje: error });
  }
}; */


const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "Acceso al recurso denegado" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "El token es invalido", mensaje: error.message });
  }
};



module.exports = {verifyToken}