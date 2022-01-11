import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
  const fileBuf = await fs.readFile('./www/index.html');
  res.type('html')
  res.send(fileBuf);
})
app.use(express.static('./www/'));


