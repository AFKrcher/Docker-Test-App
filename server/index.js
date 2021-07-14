const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
const morgan = require('morgan')
//const db = require('db')
const knex = require('knex')(require('./knexfile.js')['development']);
app.get('/', (req, res) => res.send('Hi'))

//Get all items
app.get('/items', (req, res) =>{
    knex.select('').from('items').then(function(data){
        res.send(data);
    });
})

app.use(morgan('tiny'))
//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
app.post('/items', (req, res) =>{
    const  item = req.body.comment;
    knex('items').insert([{comment:item}]).then(function(data){
        res.send(data);
    });
 }) 


app.listen(port, () => console.log(`App on http://localhost:${port}`))
