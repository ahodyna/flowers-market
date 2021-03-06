import express from 'express';
import path from 'path';


const __dirname = path.resolve();

const app = express();
const port = 4000;
app.listen(port);

app.use(express.static(__dirname + '/public'))


// get
app.get('/', (req, res) => {
    res.render('main', {title: 'Flowers Market'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact - Flowers Market'})
})

app.get('/farm', (req, res) => {
    res.render('farm', {title: 'Our Farm - Flowers Market'})
})

app.get('/services', (req, res) => {
    res.render('services', {title: 'Services - Flowers Market'})
})

app.get('/shop', (req, res) => {
    res.render('shop', {title: 'Shop - Flowers Market'})
  })
  
// 
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))