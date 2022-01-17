import express from 'express';
import fs from 'fs/promises';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home');
}); 
/* 
app.get('/', async (req, res) => {
  const fileBuf = await fs.readFile('./www/index.html');
  res.type('html')
  res.send(fileBuf);
}) */
app.use(express.static('./public/'));

app.listen(5080);