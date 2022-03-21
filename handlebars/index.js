const express = require("express")
const handlebars = require('express-handlebars')
const routerHandlebars = express.Router()
const PORT = 8080
const app = express()

const Products = require ('./class/productClass')
const storeProducts = new Products()

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views'
}))

app.set('view engine', 'hbs')
app.set('views', './views')

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
        console.log(newProduct)
        res.render('form');
    })

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT} `))
server.on('error', (err) => console.log(err.message))

