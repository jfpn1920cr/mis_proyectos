const express = require("express");
const router = express.Router();
const fs = require("fs");

// Definir ruta para obtener todos los usuarios
router.get("/publics", (req, res) => {
  try {
    console.log("LLego una petición");
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    const publics = JSON.parse(data).publics;
    res.json(publics.sort((a, b) => parseInt(b.id) - parseInt(a.id)));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error obteniendo usuarios");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para obtener publicaciones por ID de usuario
router.get("/publics/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    const publics = JSON.parse(data).publics;
    //console.log(publics);//
    const public = publics.filter((public) => public.idUser === id);
    if (!public) throw new Error("Sin publicaciones");
    res.json(public.sort((a, b) => parseInt(b.id) - parseInt(a.id)));
  } catch (err) {
    console.error(err);
    res.status(404).send("Publicacion no encontrada");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para obtener publicacion por ID de usuario
router.get("/publics-one/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    const publics = JSON.parse(data).publics;
    const public = publics.filter((public) => public.id === id)[0];
    if (!public) throw new Error("Sin publicaciones");
    res.json(public);
  } catch (err) {
    console.error(err);
    res.status(404).send("Publicacion no encontrada");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para crear un nueva publicaion
router.post("/publics", (req, res) => {
  try {
    console.log("LLego una petición");
    const newPublic = req.body;
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    const publics = JSON.parse(data).publics;
    newPublic.id = `${publics.length+2}`;
    publics.push(newPublic);
    fs.writeFileSync(
      "./src/api/data/dataPublic.json",
      JSON.stringify({ publics })
    );
    res.json(newPublic);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creando publicación");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para actualizar un usuario existente
router.put("/publics/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const updatedPlic = req.body;
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    let publics = JSON.parse(data).publics;
    const index = publics.findIndex((u) => u.id === id);
    if (index === -1) throw new Error("Usuario no encontrado");
    updatedPlic.id = id;
    publics[index] = updatedPlic;
    fs.writeFileSync(
      "./src/api/data/dataPublic.json",
      JSON.stringify({ publics })
    );
    res.json(updatedPlic);
  } catch (err) {
    console.error(err);
    res.status(404).send("Publicación no encontrada");
  }
  console.log("Fin de solicitud");
});

// Definir ruta para eliminar
router.delete("/publics/:id", (req, res) => {
  try {
    console.log("LLego una petición");
    const id = req.params.id;
    const data = fs.readFileSync("./src/api/data/dataPublic.json");
    let publics = JSON.parse(data).publics;
    const index = publics.findIndex((u) => u.id === id);
    if (index === -1) throw new Error("Usuario no encontrado");
    publics.splice(index, 1);
    fs.writeFileSync(
      "./src/api/data/dataPublic.json",
      JSON.stringify({ publics })
    );
    res.send("Usuario eliminado exitosamente");
  } catch (err) {
    console.error(err);
    res.status(404).send("Publicación no encontrada");
  }
  console.log("Fin de solicitud");
});

module.exports = router;
