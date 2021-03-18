import {Router} from 'express';
import authService from '../controllers/authService.js'

const router = Router();


router.use((req, res, next) => {
    const cookieToken = req.cookies['Authentication']

    console.log('extracting cookie token: ', cookieToken)
    
    if (cookieToken) {
        req.user = authService.authorizeUser(cookieToken)
    }
    next()

})

export default router