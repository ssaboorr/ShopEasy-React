import express from 'express'
import products from'./data/products.js'
import fashion from './data/fashion.js';
import phone from './data/phone.js'
import footwear from './data/shoes.js'

import dotenv from 'dotenv'
import shoes from './data/shoes.js';

dotenv.config();
const app = express();

// let fashion = products[0]
// let footwear = products[1]
// let phone = products[2]

app.get('/',(req,res)=> {
    res.send("api is running")
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})


app.get('/api/products/fashion',(req,res)=> {
    res.json(fashion)
})

app.get('/api/products/footwear',(req,res) => {
    res.json(footwear)
})

app.get('/api/products/phone',(req,res)=>{
    res.json(phone)
})


// app.get('/api/products/:id',(req,res)=>{
//     const product = products.find((product) => product._id === +req.params.id)
//     res.json(product)
// })

app.get('/api/products/footwear/:id',(req,res)=> {
    const shoe = shoes.find((shoe) => shoe._id === +req.params.id)
    res.json(shoe)
})

app.get('/api/products/fashion/:id',(req,res) => {
    const cloth = fashion.find((cloth) => cloth._id === +req.params.id) 
    res.json(cloth)
})

app.get('/api/products/phone/:id',(req,res) => {
    const phones = phone.find((phone) => phone._id === +req.params.id )
    res.json(phones)
})


// app.get('/api/footwear',(req,res) => {
//     res.json(shoes)
// })

// app.get('/api/phone',(req,res)=>{
//     res.json(phone)
// })




const PORT = process.env.PORT || 5001
app.listen(PORT,() => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))