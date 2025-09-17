'use strict'

var express = require('express');
var path = require('path'); // Importe o módulo path

var app = module.exports = express();

// Configure o view engine se for usar templates (opcional)
// app.set('view engine', 'html');

// Middleware para servir arquivos estáticos (CSS, JS, imagens, etc.)
// Se você tiver uma pasta "public" ou similar, pode usar:
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    // Envie o arquivo index.html usando sendFile com caminho absoluto
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}