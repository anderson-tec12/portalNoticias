module.exports.editar = function(app, req, res){
  var conexao = app.config.dbConnection();
  var model = new app.app.models.Noticias(conexao);
  var id_noticia = req.query;
  console.log(id_noticia.id_noticia);

  model.getNoticia(id_noticia, function(error, result){
    console.log(result);
    res.render('admin/editar', {dados:result, valida:{}});
  });

}

module.exports.salvar = function(app, req, res){
  var noticia = req.body;
  var conexao = app.config.dbConnection();
  var id_noticia = req.query;
  console.log('aqui');
  console.log(id_noticia);
  var model = new app.app.models.Noticias(conexao);
  model.atualiza(noticia,id_noticia, function(error,result){
    res.redirect('/noticias');
  })
}
