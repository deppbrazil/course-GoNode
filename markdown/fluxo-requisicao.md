# Fluxo de requisição #
# Interceptadores (Middlewares) #

### Adicionando um Meddleware ###

```js
const logMiddleware = (req, res) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    );
};
```

### Para não bloquear o fluxo de requisições adicionar a função Next() ###

```js
const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    );

    return next();
};
```

### Chamando o Middleware dentro da rota principal ###

```js
app.get('/', logMiddleware, (req, res) => {
    return res.send(`Welcome, ${req.query.name}`);
});
```

### Adicionado os Middleware em todas as rotas ###

```js
app.use(logMiddleware);
```