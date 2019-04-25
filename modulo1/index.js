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
    return res.send(`Bem-vindo, ${req.query.name}`);
});

// pegando nome na url 
app.get("/nome/:name", (req, res) => {
    return res.send(`Bem-vindo, ${req.params.name}`);
});

// retornando um json 
app.get("/api/:name", (req, res) => {
    return res.json( {
        message: `Bem-vindo, ${req.params.name}`
    });
});

app.listen(3000);
