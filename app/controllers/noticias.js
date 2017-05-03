module.exports.noticias = function(app, req, res){
      var connection = app.config.dbConnection();
      var modelsNoticias = new app.app.models.Noticias(connection);
      modelsNoticias.getNoticias(function(error, result){
      res.render('noticias/noticias',{noticias :result});
  });
}

module.exports.noticia = function(app, req, res){
  var connection = app.config.dbConnection();
  var modelsNoticias = new app.app.models.Noticias(connection);
  console.log(req.query);
  var id_noticia = req.query;
  modelsNoticias.getNoticia(id_noticia, function(erros, result){
    res.render('noticias/noticia', {noticia:result});
  })
}
