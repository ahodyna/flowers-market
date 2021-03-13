import express from 'express';
import path from 'path';
import pagesRouter from './routes/pagesRoutes.js'
import adminRouter from './routes/adminRoutes.js';
import authRouter from './routes/authRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';


const __dirname = path.resolve();

const app = express();
const port = 4000;
app.listen(port);

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(authMiddleware)

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(pagesRouter)
app.use('/auth', authRouter)
app.use('/admin', adminRouter)
