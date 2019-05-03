# Renderizando dados na view #

### Criando array de usuários ###
```js
const users = ['Mir Carvalho', 'Diego Fernandes', 'Robson Marques'];
```

### Adicionando na rota principal ###
```js
app.get('/', (req, res) => {
    return res.render('list', { users });
});
```

### Criando uma lista puxando as informações do array ###

```html
<h1>Listagem de usuários</h1>

<ul>
    {% for user in users %}
        <li>{{ user }}</li>
    {% endfor %}
</ul>
```