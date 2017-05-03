module.exports = function(parametro){
  parametro.get('/formulario_inclusao_noticias', function(req, res){
    parametro.app.controllers.admin.formulario_inclusao_noticia(parametro, req, res);
  })

  parametro.post('/salvar', function(req, res){
    parametro.app.controllers.admin.salvar(parametro, req, res);
  })
}
