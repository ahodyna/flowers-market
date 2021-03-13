import {Router} from 'express';
import authService from '../controllers/authService.js'
const router = Router();




router.post('/login', (req, res) => {
    const loginData = req.body
    const user = authService.loginUser(loginData.login, loginData.password)

    if (user) {
        return res.status(200).json({ token: user.token })
    } else {
        return res.status(401).json({ message: "error" })
    }
})


export default router