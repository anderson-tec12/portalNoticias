module.exports = function(parametro){
  parametro.get('/editar',function(req, res){
    parametro.app.controllers.editar.editar(parametro, req, res);
  });

  parametro.post('/salvaredicao', function(req, res){
    parametro.app.controllers.editar.salvar(parametro, req, res);
  })
}
