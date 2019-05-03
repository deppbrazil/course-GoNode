// sem express
//const http = require('http')

//http.createServer((req, res) => {
    //console.log(req);
    //return res.end('Hello World');
//})
//.listen(3000);
  
// usando express 
const express = require("express")

const app = express();

// pegando parametros get ou query params da url 
app.get('/', (req, res) => {
    return res.send(`Welcome, ${req.query.name}`);
});

// pegando nome na url 
app.get("/nome/:name", (req, res) => {
    return res.send(`Welcome, ${req.params.name}`);
});

// retornando um json 
app.get("/api/:name", (req, res) => {
    return res.json( {
        message: `Welcome, ${req.params.name}`
    });
});

app.listen(3000);
