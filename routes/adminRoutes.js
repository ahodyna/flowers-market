import {Router} from 'express';
import dataService from '../controllers/dataService.js'
const router = Router();

router.post('/products', (req, res) => {
    const item = req.body
    console.log(item)
    const createdItem = dataService.createProduct(item)
    return res.status(200).json(createdItem)
})


export default router