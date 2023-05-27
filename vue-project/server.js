const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const routUser = require('./src/api/user/routersUser');
const routPubli = require('./src/api/publicacion/routersPublic');
const cors = require("cors");

// Habilitar CORS para todas las solicitudes
api.use(cors());

api.use(bodyParser.json());
api.use('/api', routUser);
api.use('/api', routPubli);

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});