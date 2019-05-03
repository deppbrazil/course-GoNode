# Configurando Nunjucks #

### Adicionado ###
```js
yarn add nunjucks
```

### importando ###
```js
const nunjucks = require("nunjucks");
```

### Configurando ###
```js
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.set("view engine", "njk");
```

### Criar ###
* Pasta Views
* list.njk

### Na rota principal colocar ###
```js
app.get('/', (req, res) => {
    return res.render('list', { name: "Mir" });
});
```