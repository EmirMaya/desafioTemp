import express from 'express';
import __dirname from './until.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
const server = app.listen(8080, () => console.log('Listening on PORT 8080'));

/**
 * template engine config
 */

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/',viewsRouter)
app.use('/api/users',productsRouter);

