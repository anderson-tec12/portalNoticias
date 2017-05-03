function Noticias(conexao){
  this._connection = conexao;
}

Noticias.prototype.getNoticias = function(callback){
  this._connection.query("select * from noticias order by data_criacao desc", callback);
}

Noticias.prototype.getNoticia = function(id_noticia, callback){
  this._connection.query('select * from noticias where id_noticia = '+ id_noticia.id_noticia,callback);
}

Noticias.prototype.get5UltimasNoticias = function(callback){
  this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
  console.log(noticia);
  this._connection.query('insert into noticias set ?',noticia,callback);
}

Noticias.prototype.atualiza = function(noticia,id_noticia,callback){
  console.log(id_noticia);
  this._connection.query("update noticias set titulo ='"+noticia.titulo+"',noticia='"+noticia.noticia+"', resumo='"+noticia.resumo+"', autor= '"+noticia.autor+"' where id_noticia ="+id_noticia.id_noticia,callback);
}

module.exports = function(){
  return Noticias;
}
