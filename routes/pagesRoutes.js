import {Router} from 'express';
import dataService from '../controllers/dataService.js';
import authAdminRoleCheckMiddleware from '../middleware/authAdminRoleCheckMiddleware.js';

const router = Router();



router.get('/', (req, res) => {
    res.render('main', { title: 'Flowers Market', user: req.user } )
})

router.get('/contact', (req, res) => {
    console.log('req.user: ', req.user)
    res.render('contact', {title: 'Contact - Flowers Market', user: req.user})
})

router.get('/farm', (req, res) => {
    res.render('farm', {title: 'Our Farm - Flowers Market', user: req.user })
})

router.get('/services', (req, res) => {
    res.render('services', {title: 'Services - Flowers Market', user: req.user})
})

router.get('/shop', (req, res) => {
    res.render('shop', {title: 'Shop - Flowers Market', user: req.user, products: dataService.getAllProducts() })
})


router.get('/products/:id', (req, res) => {
    res.render('productDetails', {title: 'Product Details - Flowers Market', user: req.user, product: dataService.getProductById(req.params.id)})
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Authorization - Flowers Market', user: req.user})
})

router.get('/admin-dashboard', authAdminRoleCheckMiddleware, (req, res) => {
    res.render('adminDashboard', {title: 'Admin dashboard - Flowers Market', user: req.user})
})

export default router
