const express = require('express')
const app = express()
const CoursTennis = require('./CoursTennis.json')


// Middleware
app.use(express.json())

// Routes
app.get('/CoursTennis', (req, res) => { res.status(200).json(CoursTennis) })
app.get('/CoursTennis/:id', (req, res) => {
const id = parseInt(req.params.id)
const CourTennis = CoursTennis.find(CoursTennis => CoursTennis.IdClass === id)
res.status(200).json(CourTennis)
})

//post
app.post('/CoursTennis', (req, res) => {
    console.log(req.body) 
    CoursTennis.push(req.body) 
    res.status(200).json(CoursTennis)
    })

       //put
app.put('/CoursTennis/:IdClass', (req, res) => {
    const IdClass = parseInt(req.params.id)
    let CourTennis = CoursTennis.find(CourTennis => CourTennis.IdClass === id)
    CourTennis.Number = req.body.Number,
    CourTennis.SurfaceType = req.body.SurfaceType,
    CourTennis.City = req.body.City,
    CourTennis.Statut = req.body.Statut,
    res.status(200).json(CourTennis)
})

//delete
app.delete('/CoursTennis/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let CourTennis = CoursTennis.find(CourTennis => CourTennis.IdClass === id)
    CoursTennis.splice(CoursTennis.indexOf(CourTennis), 1)
    res.status(200).json(CoursTennis)
    })

         

app.listen(8080, () => { console.log("Serveur à l'écoute") })
