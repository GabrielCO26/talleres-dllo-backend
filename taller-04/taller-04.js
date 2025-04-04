const express =  require("express")
const app = express()
const usuarios = require("./24-taller-04-datos.json")
app.use(express.json())
//holaaa

//
function filtrar_hobby(hobby){
    return usuarios.filter(user => user.hobbies.includes(hobby))
}

// Punto 1
app.get("/users/hobby", async function (req, res) {
    const hobby = req.query.hobby
    res.status(200).json(filtrar_hobby(hobby)) 
})

// Punto 2
app.get("/users/exists/:codigo", async function (req, res) {
    const codigo = req.params.codigo
    const existe_usuario = usuarios.some(user => user.codigo === codigo)
    res.status(200).json(existe_usuario)  
})

// Punto 3
app.get("/users/hobby/count", async function (req, res) {
    const hobby = req.query.hobby
    res.status(200).json(filtrar_hobby(hobby).length)  
})

// Punto 4
app.get("/users/is-free", async function (req, res) {
    const users_free = usuarios.filter(user => user.hobbies.length < 3)
    res.status(200).json(users_free)  
})

// Punto 5
app.put("/users/suggest", async function (req, res) {
    const {codigo, hobby} = req.body
    const usuario = usuarios.find(user => user.codigo === codigo)
    if(usuario.hobbies.length >= 3){
        return res.status(400).json({error: "el usuario ya tiene 3 hobbies"})
    }
    usuario.hobbies.push(hobby)
    res.status(200).json(usuario) 
})

// Punto 6
app.post("/users", async function (req, res) {
    const {codigo, nombre, apellido, hobbies} = req.body
    if (hobbies.length < 2){
        return res.status(400).json({error: "el usuario debe tener al menos 2 hobbies"})
    }
    const usuarioNuevo = {
        "hobbies": hobbies,
        "codigo": codigo,
        "apellido": apellido.toUpperCase(),
        "nombre": nombre.toUpperCase()
    }
    usuarios.push(usuarioNuevo)
    res.status(200).json(usuarios)  
})

// Test endpoint
app.get("/users/getAll", async function (req, res) {
    res.status(200).json(usuarios)
})

///////////////
app.use(async function (req, res) {
    res.status(404).json({ message: "Las champions del Atletico de Madrid" });
});

app.listen(5000, () => {
    console.log("escuchando por el puerto 5000")
})


