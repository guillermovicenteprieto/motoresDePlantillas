//Motores de plantilla
//1. handlebars
/*
const express = require("express")
const handlebars = require('express-handlebars')
const routerHandlebars = express.Router()
const PORT = 8080
const app = express()

const Products = require ('./handlebars/class/productClass')
const storeProducts = new Products()

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/handlebars/views/layouts',
    partialsDir: __dirname + '/handlebars/views'
}))

app.set('view engine', 'hbs')
app.set('views', './handlebars/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routerHandlebars)

app.get('/', (req, res) => {
    res.render('form');
})

routerHandlebars
    .get('/', (req, res) => {
        const productsList = storeProducts.allProducts
        res.render('table', {productsList})
    })
    .post('/', (req, res) => {
        const newProduct = storeProducts.saveProduct(req.body)
        res.render('form');
    })

const server = app.listen(PORT, () => console.log(`Server with hbs running on port ${PORT} `))
server.on('error', (err) => console.log(err.message))
*/

//pug
/*
const express = require("express")
const routerPug = express.Router()
const PORT = 8080
const app = express()

const Products = require ('./pug/class/productClass')
const storeProducts = new Products()
let viewProduct = true

app.set('view engine', 'pug')
app.set('views', './pug/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routerPug)


app.get('/', (req, res) => {
    viewProduct = true
    viewProduct && res.render('index',{viewProduct})
})

routerPug
    .get('/', (req, res) => {
        const productsList = storeProducts.allProducts
        viewProduct = false 
        res.render('index', {productsList, viewProduct})
    })
    .post('/', (req, res) => {
        const newProduct = storeProducts.saveProduct(req.body)
        viewProduct = true
        res.render('index', {newProduct, viewProduct})
    })

const server = app.listen(PORT, () => console.log(`Server with pug running on port ${PORT} `))
server.on('error', (err) => console.log(err.message))
*/

//ejs

const express = require("express")
const routerEjs = express.Router()
const PORT = 8080
const app = express()

const Products = require ('./ejs/class/productClass')
const storeProducts = new Products()
let viewProduct = true

app.set('view engine', 'ejs')
app.set('views', './ejs/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routerEjs)


app.get('/', (req, res) => {
    viewProduct = true
    viewProduct && res.render('index',{viewProduct})
})

routerEjs
    .get('/', (req, res) => {
        const productsList = storeProducts.allProducts
        viewProduct = false 
        res.render('index', {productsList, viewProduct})
    })
    .post('/', (req, res) => {
        const newProduct = storeProducts.saveProduct(req.body)
        viewProduct = true
        res.render('index', {newProduct, viewProduct})
    })

const server = app.listen(PORT, () => console.log(`Server with ejs running on port ${PORT} `))
server.on('error', (err) => console.log(err.message))
