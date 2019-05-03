# Utilizando Nodemon #

### Rodar ###
* `yarn nodemon -D` O -D adiciona apenas como uma dependencia de desenvolvimento e não de produção

### Adicionar em Package.json ###

* Add:

```js
{
  "name": "modulo1",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.11"
  }

```