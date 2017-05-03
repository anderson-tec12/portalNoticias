module.exports = function(parametro){
  parametro.get('/',function(req,res){
    parametro.app.controllers.home.index(parametro, req, res);
  })
}
