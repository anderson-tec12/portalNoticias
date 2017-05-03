var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
// chamando o modulo express-validator
var expressValidator = require('express-validator');

var servidor = express();



// sets
  servidor.set('view engine', 'ejs');
  servidor.set('views','./app/views')

// middleware
  // estamos usando um middleware do express para mapear a pasta public
  // que contem os assets 
  servidor.use(express.static('./app/public'));
  servidor.use(bodyParser.urlencoded({extended:true}))
  // adicionando o middleware e ja executandoa função do modulo
  servidor.use(expressValidator())

  consign().include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
   .into(servidor);
module.exports = servidor;
