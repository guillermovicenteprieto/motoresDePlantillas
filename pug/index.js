const express = require("express")
const pug = require('pug')
const routerPug = express.Router()
const PORT = 8080
const app = express()

const Products = require ('./class/productClass')
const storeProducts = new Products()
let viewProduct = true

app.set('view engine', 'pug')
app.set('views', './views')

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

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT} `))
server.on('error', (err) => console.log(err.message))

