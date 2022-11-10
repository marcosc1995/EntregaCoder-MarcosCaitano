//import express from "express"
const express = require('express')
const Productos = require('./api/productos')
//import ejs from "ejs"
//import Productos from './api/productos.js'
const handlebars = require('express-handlebars')

const productos = new Productos()
console.log(productos)

const app = express()
const {Router} = express

const router = new Router()
app.use(express.static("./public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: './views/layouts',
  partialsDir: './views/partials'
}))
app.set('view engine', 'hbs')
app.set('views', './views')
app.use('/api/productos' , router )

//router.get()

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`Listen //localhost:${PORT}`)
})
server.on('error',(error)=>{
    console.log(error)
})
app.get('/',(req,res)=>{
    res.render('form', { productos })
})


app.post('/api/productos', (req, res)=>{
    console.log('post entra en la funcion')
    try {
        const { body } = req;
        productos.save(body);
        //res.send(productos.productos);
        res.redirect('/')        
        
      } catch (error) {
        console.log(error.message);
      }
      //res.render('boxProductos' , { productos})
    console.log('fin del post')  
})
const arrayProductos = productos.productos
app.get('/productos',(req,res)=>{
    console.log(arrayProductos)
    res.render('table' ,{arrayProductos})

})
router.get("/:id", (req, res) => {
    try {
      const idParam = req.params.id;
      //console.log(idParam);
      //const result = productos.productos.find(({ id }) => id === parseInt(idParam));
      const result = productos.getById(parseInt(idParam))
      console.log(result);
      res.send(result);
    } catch (e) {
      res.send(console.log(`${e} Producto no encontrado`))
    }
  });