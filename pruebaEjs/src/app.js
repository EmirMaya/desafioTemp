import express from 'express';
import __dirname from './until.js';


const app = express();

const server = app.listen(8080, () => console.log('listening on 8080 port'))

app.use(express.json());
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
// let pets = [
//     { name: "uly", specie: "dog" },
// ]
let productos = []
app.get('/another', (req, res) => {
    res.render('home', {
        title: "PRIMERA PLANTILLA EJS"
        // pets
    })
})
app.get('/form', (req, res) => {
    res.render('form', {
        productos
    });
})

app.post('/productos', (req, res) => {
    const product = req.body;
    console.log(product);
    productos.push(product);
    res.redirect('/')
})