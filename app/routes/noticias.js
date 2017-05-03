module.exports = function(parametro){
  parametro.get('/noticias', function(req, res){
    parametro.app.controllers.noticias.noticias(parametro, req, res);
  })

  parametro.get('/noticia', function(req, res){
    parametro.app.controllers.noticias.noticia(parametro, req, res);
  })

};
