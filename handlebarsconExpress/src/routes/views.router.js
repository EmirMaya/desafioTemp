import { Router } from 'express';

let products = [
    { name: "celular", price: "56465" },
]

const router = Router();

router.get('/', (req, res) => {

    res.render('welcome', {});
})

router.get('/products', (req, res) => {
//let users = await usersManager.getAll();
    res.render('products', {
        hasProducts:products.length>0,
        products
    });
})

router.post('/products', (req, res) => {
    const product = req.body;
    
    products.push(product);
    console.log(product);
    res.redirect('/')
})

export default router;
