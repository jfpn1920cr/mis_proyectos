const express = require("express");
const router = express.Router();
const fs = require("fs");

// Definir ruta para obtener todos los usuarios
router.get("/users", (req, res) => {
  try {
    console.log("LLego una petición");
    const data = fs.readFileSync("./src/api/data/dataUser.json");
    const users = JSON.parse(data).users;
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error obteniendo usuarios");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para obtener un usuario por ID
router.get("/users/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const data = fs.readFileSync("./src/api/data/dataUser.json");
    const users = JSON.parse(data).users;
    const user = users[id];
    if (!user) throw new Error("Usuario no encontrado");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(404).send("Usuario no encontrado");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para crear un nuevo usuario
router.post("/users", (req, res) => {
  try {
    console.log("LLego una petición");
    const newUser = req.body;
    const data = fs.readFileSync("./src/api/data/dataUser.json");
    const users = JSON.parse(data).users;
    users[newUser.id]= newUser;
    fs.writeFileSync("./src/api/data/dataUser.json", JSON.stringify({ users }));
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creando usuario");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para actualizar un usuario existente
router.put("/users/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const updatedUser = req.body;
    const data = fs.readFileSync("./src/api/data/dataUser.json");
    let users = JSON.parse(data).users;
    if (!users[id]) throw new Error("Usuario no encontrado");
    updatedUser.id = id;
    users[id] = updatedUser;
    fs.writeFileSync("./src/api/data/dataUser.json", JSON.stringify({ users }));
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(404).send("Usuario no encontrado");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para eliminar un usuario existente
router.delete("/users/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const data = fs.readFileSync("./src/api/data/dataUser.json");
    let users = JSON.parse(data).users;
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) throw new Error("Usuario no encontrado");
    users.splice(index, 1);
    fs.writeFileSync("./src/api/data/dataUser.json", JSON.stringify({ users }));
    res.send("Usuario eliminado exitosamente");
  } catch (err) {
    console.error(err);
    res.status(404).send("Usuario no encontrado");
  }
  console.log("Fin de solicitud");
});

module.exports = router;
