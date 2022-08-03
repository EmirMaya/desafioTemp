import express from 'express';
import __dirname from './until.js';
const app = express();



let server = app.listen(8080, () => console.log('Listening on PORT 8080'));


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('views', __dirname + '/views');
app.set('view engine','pug');

let productos = []

app.get('/', (req,res)=>{
    res.render('welcome.pug',{
        message:"WELCOME"
    })
})

app.get('/form',(req,res)=>{
    console.log('REQ+ '+req.body);
    res.render('form',{
        productos
    })
})

app.post('/productos', (req, res) => {
    const product = req.body;
    productos.push(product);
    console.log(product);
    res.redirect('/')
})