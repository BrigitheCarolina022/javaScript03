const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')


const router = express.Router()

//traer todas las rutas
router.get('/',async (req, res)=>{
    //utilizar el modelo para selecionar todos los bootacmot que hay en la base de datos
   const bootcamps=
    await BootcampModel.find()


    res.json({
        success: true ,
        data: bootcamps
    })
})

//traer un bootcamp  por id

router.get('/:id',async(req, res)=>{

    //extraer el id del bootcamp del parametro de la url 
    bootcampId=req.params.id
    const bootcamp =
    await BootcampModel.findById(bootcampId)


    res.json({
        success: true ,
        data: bootcamp    
    })
})

//crear un bootcamps

router.post('/',async (req, res)=>{
    const newBootcamp =
    await bootcampModel.create(req.body)
    res.json({
        success: true ,
        data: newBootcamp 
    })
})


//actualizar un bootcamp por id

router.put('/:id',async(req, res)=>{
    const bootcampId = req.params.id
    const updBootcamp =
    await bootcampModel.
    findByIdAndUpdate(
        bootcampId,
        req.body,
        {
            new: true 
        } )

    res.json({
        success: true ,
        data:updBootcamp
    })
})


//Eliminar un bootcamp por id

router.delete('/:id', async (req, res)=>{
    const bootcampId = req.params.id
    const delBootcamp =
    await bootcampModel.
    findByIdAndDelete(
        bootcampId
        )

    res.json({
        success: true ,
        data:delBootcamp
    })
})

module.exports = router
