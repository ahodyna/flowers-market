import {Router} from 'express';
import dataService from '../controllers/dataService.js';

const router = Router();



router.get('/', (req, res) => {
    res.render('main', {title: 'Flowers Market'})
})

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact - Flowers Market'})
})

router.get('/farm', (req, res) => {
    res.render('farm', {title: 'Our Farm - Flowers Market' })
})

router.get('/services', (req, res) => {
    res.render('services', {title: 'Services - Flowers Market'})
})

router.get('/shop', (req, res) => {
    res.render('shop', {title: 'Shop - Flowers Market', products: dataService.getAllProducts() })
})


router.get('/products/:id', (req, res) => {
    res.render('productDetails', {title: 'Product Details - Flowers Market', product: dataService.getProductById(req.params.id)})
})

router.get('/auth', (req, res) => {
    res.render('auth', {title: 'Authorization - Flowers Market'})
})

export default router
