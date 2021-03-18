import {Router} from 'express';

const router = Router();



router.use((req, res, next) => {
    console.log('checking role: ', req.user)

    if (req.user && req.user.role === 'ADMIN') {
        next()
    } else {
        return res.status(401).json({ message: "not authorized" })
    }

})


export default router