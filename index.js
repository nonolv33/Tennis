const express= require('express')
const app =express()
const parkings = require('./parkings.json')

// Middleware
app.use(express.json())


//routes
app.get('/parkings', (reg, res) => {res.send("Liste des parkings")})

app.get('/parkings/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
    })

app.listen(8082, () => { console.log("Serveur à la super écoute") })

//... dans index.js
app.post('/parkings', (req, res) => {
    console.log(req.body) // Uniquement pendant la phase de dev
    parkings.push(req.body) // Les données insérées seront passées dans le body de la
    requête
    res.status(200).json(parkings)
    })

    app.put('/parkings/:id', (req, res) => {
        const id = parseInt(req.params.id)
        let parking = parkings.find(parking => parking.id === id)
        parking.name = req.body.name,
        parking.city = req.body.city,
        parking.type = req.body.type,
        res.status(200).json(parking)
        })

    app.delete('/parkings/:id', (req, res) => {
        const id = parseInt(req.params.id)
        let parking = parkings.find(parking => parking.id === id)
        parkings.splice(parkings.indexOf(parking), 1)
        res.status(200).json(parkings)
        })
            