import {Router} from 'express';
import authService from '../controllers/authService.js'

const router = Router();



router.use((req, res, next) => {
    console.log(req.path)

    if (req.path.startsWith("/admin")) {
        console.log("startsWith /admin")

        const token = req.header('Authorization')

        const user = authService.authorizeUser(token)
        console.log("user: ", user)
        if (user) {
            next()
        } else {
            return res.status(401).json({ message: "not authorized" })
        }
    

    } else {
        next()
    }

})


export default router