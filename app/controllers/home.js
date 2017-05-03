module.exports.index = function(parametro, req, res){
  var conexaoBD = parametro.config.dbConnection();
  var noticias = new parametro.app.models.Noticias(conexaoBD);
  noticias.get5UltimasNoticias(function(error, result){
    console.log(result);
    res.render('home/index',{dados : result});
  });

}
