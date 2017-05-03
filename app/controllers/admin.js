module.exports.formulario_inclusao_noticia = function(app, req, res){
  res.render('admin/form_add_noticia',{validacao: {}, noticia : {}});
}

module.exports.salvar = function(app,req,res){
  var noticia = req.body;

  req.assert("titulo","titulo é obrigatorio").notEmpty();
  req.assert("resumo","resumo é obrigatorio").notEmpty();
  req.assert("resumo","resumo deve ter no minimo 10 carcteres e no max 100").len(10,100);
  req.assert("autor","autor é obrigatorio").notEmpty();
  req.assert("data_noticia","data da noticia é obrigatorio").notEmpty();
  req.assert("data_noticia","deve estar preenchida ano-mes-dia").isDate({format:'YYYY-MM-DD'});
  req.assert("noticia","noticia é obrigatorio").notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('admin/form_add_noticia',{validacao : erros, noticia : noticia});
    return;
  }
  var conexao = app.config.dbConnection();

  var model = new app.app.models.Noticias(conexao);
  model.salvarNoticia(noticia, function(error, result){
    res.redirect('/noticias');
  })
}
