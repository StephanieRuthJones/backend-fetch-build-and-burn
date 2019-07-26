const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const cors = require('cors')

let port = process.env.PORT || 3000

app.use(cors())

app.get('/', cors(), (req, res, next) => {
    res.send('hello world')
})

app.get('/muppets', cors(), (req, res, next) => {
    knex('muppet')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})


app.post('/muppets', (req, res, next) => {
    knex('muppet').insert(req.body)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

app.patch('/muppets', (req, res, next) => {
    const id = req.body.id
    const name = req.body.name
    const talent = req.body.talent
    const image = req.body.image
    const votes = req.body.votes

    knex('muppet')
        .where({ id: id })
        .update({ talent: talent, image: image, votes: votes })
        .then(() => res.status(200).send('update successful'))
        .catch(err => {
            next(err)
        })
})

app.delete('/muppets', (req, res, next) => {
    const id = req.body.id

    knex('muppet')
        .where({ id: id })
        .delete()
        .then(() => res.status(200).send('muppet deleted'))
        .catch(err => {
            next(err)
        })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something broke!')
})

app.use((err, req, res, next) => {

    res.status(404).send('Sorry, cannot find that!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})