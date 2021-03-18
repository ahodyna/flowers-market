import express from 'express';
import path from 'path';
import pagesRouter from './routes/pagesRoutes.js'
import adminRouter from './routes/adminRoutes.js';
import authRouter from './routes/authRoutes.js';
import authTokenExtractorMiddleware from './middleware/authTokenExtractorMiddleware.js';
import authAdminRoleCheckMiddleware from './middleware/authAdminRoleCheckMiddleware.js';
import cookieParser from 'cookie-parser'



const __dirname = path.resolve();

const app = express();
const port = 4000;
app.listen(port);

app.use(cookieParser());
app.use(express.json())
app.use(authTokenExtractorMiddleware)

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(__dirname + '/public'))
app.use(pagesRouter)
app.use('/auth', authRouter)
app.use('/admin', authAdminRoleCheckMiddleware, adminRouter)
