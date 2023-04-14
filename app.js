const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => { 
    console.log(req.url);
    console.log(req.method);
    res.send("<h2>Contact page</h2>");
})

app.listen(3000, () => {
    console.log('Server is running');
});
