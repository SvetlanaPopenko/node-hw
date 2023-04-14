const express = require('express');
const moment = require('moment');
const fs = require('fs/promises');
const cors=require('cors');

const contacts = require('./contacts');

const app = express();

// const corsMiddleware = cors();
// app.use(corsMiddleware);
app.use(cors());

app.use(async(req, res, next) => {
    const { method, url } = req;
    console.log('first middlewar');
    const date= moment().format('DD-MM-YYYY HH:mm:ss');
    await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`);
    next();
 });

app.get('/products', (req, res) => {
    res.json([]);
});

app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.use((req, res) => {
    res.status(404).json({ message: "Not found" })
});

app.listen(3001, () => console.log('Server running on port 3001'));