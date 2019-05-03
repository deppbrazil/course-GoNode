# Fluxo de requisição #

### Adicionando um Meddleware ###

```js
const logMiddleware = (req, res) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    );
};
```