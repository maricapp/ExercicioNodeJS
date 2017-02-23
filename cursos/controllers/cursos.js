module.exports = function (app) {
    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario;
            var params = { usuario: usuario };
            response.render('cursos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario;
            var params = { usuario: usuario };
            response.render('cursos/cadUsuario', params);
        },
        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario;
            var params = { usuario: usuario };
            console.log(usuario);
            console.log(params);
            response.render('cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            var usuario = request.session.usuario;
            var params = { usuario: usuario, lista:[{id:1, nome: "Bordado"},{id:2, nome:"Inteligencia Artificial"}] };
            console.log(usuario);
            console.log(params);
            response.render('cursos/listaCursos', params);
        },
        //cadastro de eventos
        novoCurso: function (request, response) {
            var id = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;
            var categoria = request.body.curso.categoria;
            //código a ser implementado
            
            console.log(id);
            console.log(descricao);
            console.log(ch);
            console.log(categoria);            
            
            response.redirect('/menu');
        }
    };
    return CursosController;
}; 
