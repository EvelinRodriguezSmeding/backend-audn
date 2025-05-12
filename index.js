const express = require("express");

const morgan = require("morgan");
const cors = require("cors");

const canciones = require("./routes/canciones");
const buscador = require("./routes/buscador");
const authRoute = require("./routes/authroute");
const loginRoute = require("./routes/loginAuthRoutes");
const usuarios = require("./routes/usuarios");
const playlists = require("./routes/playlists");

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan("dev"));

app.use(express.json());

require("dotenv").config();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/api", canciones);
app.use("/api", buscador);
app.use("/api", usuarios);
app.use("/api", playlists);
app.use("/api/auth", authRoute);
app.use("/api/auth", loginRoute);

app.get("/api/*", (req, res) => {
  res.status(404).json({
    error:
      "El recurso que quiere consumir no existe, revise los datos de la url",
  });
});

app.listen(port, () => {
  console.log(`Servidor levantado y escuchando el puerto ${port}`);
});


app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente 💻✨");
});
