module.exports = function (app) {
    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadUsuario', params);
        },
        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/listaCursos', params);
        },
        //cadastro de eventos
        novoCurso: function (request, response) {
            var id = request.body.curso.codigo;
            var descricao = request.body.curso.descricao;
            var ch = request.body.curso.ch;
            var categoria = request.body.curso.categoria;
            //código a ser implementado
            response.redirect('/menu');
        }


    };
    return CursosController;
}; 
