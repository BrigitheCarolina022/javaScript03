const express = require('express')
const dotenv = require ('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
//dependencias de rutas 
const bootcampRoutes = require('./routes/bootcampRoutes')

//vincular el archivo. env 
dotenv.config(
    {path:'./config/.env'}
)

//conexion base de datos
conectarDB()

//contruir el objeto de la aplicación
const app = express()
app.use(express.json())


//conectar las rutas 
//al objeto
app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)



//courses
//traer todas las rutas
app.get('/courses',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los courses"
    })
})

//traer un bootcamp  por id

app.get('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara course cuyo id es: ${req.params.id}` 
    })
})

//crear un bootcamps

app.post('/courses',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un course` 
    })
})


//actualizar un bootcamp por id

app.put('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara un course cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un bootcamp por id

app.delete('/courses/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara un course cuyo id es: ${req.params.id}` 
    })
})


//users
//traer todas las rutas
app.get('/users',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los users"
    })
})

//traer un users  por id

app.get('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara users cuyo id es: ${req.params.id}` 
    })
})

//crear un users

app.post('/users',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un users` 
    })
})


//actualizar un users por id

app.put('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara users cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un users por id

app.delete('/users/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara users cuyo id es: ${req.params.id}` 
    })
})


//reviews
//traer todas las rutas
app.get('/reviews',(req, res)=>{
    res.json({
        success: true ,
        msg: "aqui se mostraran todos los reviews"
    })
})

//traer un reviews  por id

app.get('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se mostrara reviews cuyo id es: ${req.params.id}` 
    })
})

//crear un reviews

app.post('/reviews',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se creara un reviews` 
    })
})


//actualizar un reviews por id

app.put('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se actualizara reviews cuyo id es: ${req.params.id}` 
    })
})


//Eliminar un reviews por id

app.delete('/reviews/:id',(req, res)=>{
    res.json({
        success: true ,
        msg: `aqui se eliminara reviews cuyo id es: ${req.params.id}` 
    })
})




app.listen(process.env.PUERTO ,()=> {
console.log(`servidor en ejecucion: ${process.env.PUERTO}`.bgYellow.bgGreen.bold)
})