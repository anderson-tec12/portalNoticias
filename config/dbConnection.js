
var mysql = require('mysql');

// como o auto load ja execulta a função do modulo criamos uma variavelque contem uma função
var enganaConsign = function(){
  console.log('banco conectado');
  return mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'deliver',
    database:'portal_noticias'
  });
}

module.exports = function(){
  console.log('o auto load carregou o modulo de conexao com o banco');
  // estamos exportando a variavel que contem a função
  return enganaConsign;
}
